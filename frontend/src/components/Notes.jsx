import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import NoteCard from "./NoteCard";
import Navbar from "./Navbar";

const Notes = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        let query = supabase
            .from("diary_entries")
            .select("*")
            .order("created_at", { ascending: false });

        if (filters.author) {
            query = query.eq("author", filters.author);
        }

        if (filters.mood) {
            query = query.eq("mood", filters.mood);
        }

        if (filters.date) {
            query = query.eq("entry_date", filters.date);
        }

        const { data, error } = await query;

        if (!error) setNotes(data);
    };

    const deleteNote = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this note?");
        if (!confirmDelete) return;

        const { error } = await supabase
            .from("diary_entries")
            .delete()
            .eq("id", id);

        if (!error) {
            setNotes(prev => prev.filter(note => note.id !== id));
        } else {
            console.error("Delete failed:", error);
        }
    };

    const [filters, setFilters] = useState({
        mood: "",
        author: "",
        date: ""
    });

    useEffect(() => {
        fetchNotes();
    }, [filters]);


    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen text-gray-100">
                <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-4">
                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">

                            {/* Author Filter */}
                            <select
                                value={filters.author}
                                onChange={(e) => setFilters(prev => ({ ...prev, author: e.target.value }))}
                                className="bg-gray-700 text-gray-100 px-3 py-2 rounded text-sm"
                            >
                                <option value="">All Authors</option>
                                <option value="Vipin">Vipin</option>
                                <option value="Neha">Neha</option>
                            </select>

                            {/* Mood Filter */}
                            <select
                                value={filters.mood}
                                onChange={(e) => setFilters(prev => ({ ...prev, mood: e.target.value }))}
                                className="bg-gray-700 text-gray-100 px-3 py-2 rounded text-sm"
                            >
                                <option value="">All Moods</option>
                                <option value="very_happy">Very Happy</option>
                                <option value="happy">Happy</option>
                                <option value="neutral">Neutral</option>
                                <option value="sad">Sad</option>
                                <option value="very_sad">Very Sad</option>
                            </select>

                            {/* Date Filter */}
                            <input
                                type="date"
                                value={filters.date}
                                onChange={(e) => setFilters(prev => ({ ...prev, date: e.target.value }))}
                                className="bg-gray-700 text-gray-100 px-3 py-2 rounded text-sm"
                            />

                            {/* Clear */}
                            <button
                                onClick={() => setFilters({ mood: "", author: "", date: "" })}
                                className="bg-gray-600 hover:bg-gray-500 text-white text-sm rounded px-3 py-2"
                            >
                                Clear
                            </button>

                        </div>
                    </div>

                    {notes.map(note => (
                        <NoteCard key={note.id} note={note} onDelete={deleteNote} />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Notes;
