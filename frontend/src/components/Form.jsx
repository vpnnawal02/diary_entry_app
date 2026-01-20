import React, { useState } from "react";
import { supabase } from "../supabaseClient";
import Navbar from "./Navbar";

const Form = () => {
    const [formData, setFormData] = useState({
        author: "",
        entry_date: "",
        mood: "",
        energy: "",
        content: "",
        tags: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const resetForm = () => {
        setFormData({
            author: "",
            entry_date: "",
            mood: "",
            energy: "",
            content: "",
            tags: ""
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.author || !formData.entry_date || !formData.mood || !formData.content) {
            alert("Please fill all required fields");
            return;
        }

        setLoading(true);

        const payload = {
            author: formData.author,
            entry_date: formData.entry_date,
            mood: formData.mood,
            energy: formData.energy ? Number(formData.energy) : null,
            content: formData.content,
            tags: formData.tags
                ? formData.tags.split(",").map(tag => tag.trim())
                : null
        };

        const { error } = await supabase
            .from("diary_entries")
            .insert([payload]);

        setLoading(false);

        if (error) {
            console.error("Insert failed:", error);
            alert(error.message);
        } else {
            alert("Diary entry saved!");
            resetForm();
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col justify-center items-center w-full">
                <form
                    onSubmit={handleSubmit}
                    className="sm:w-[50%] w-[90%] bg-gray-900 text-gray-100 p-6 rounded-lg my-5"
                >
                    <h1 className="text-white text-3xl sm:text-5xl text-center pt-5">
                        Ok, I am listening.....
                    </h1>

                    {/* Date */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Date</label>
                        <input
                            type="date"
                            name="entry_date"
                            value={formData.entry_date}
                            onChange={handleChange}
                            className="mt-1 block bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100 w-full"
                        />
                    </div>

                    {/* Author */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Who are you?</label>
                        <select
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100"
                        >
                            <option value="">Select your name</option>
                            <option value="Neha">Neha</option>
                            <option value="Vipin">Vipin</option>
                        </select>
                    </div>

                    {/* Mood */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Mood</label>
                        <select
                            name="mood"
                            value={formData.mood}
                            onChange={handleChange}
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100"
                        >
                            <option value="">Select your mood</option>
                            <option value="very_happy">Very happy</option>
                            <option value="happy">Happy</option>
                            <option value="neutral">Neutral</option>
                            <option value="sad">Sad</option>
                            <option value="very_sad">Very sad</option>
                        </select>
                    </div>

                    {/* Energy */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Energy</label>
                        <select
                            name="energy"
                            value={formData.energy}
                            onChange={handleChange}
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100"
                        >
                            <option value="">Select your energy</option>
                            <option value="1">1/5</option>
                            <option value="2">2/5</option>
                            <option value="3">3/5</option>
                            <option value="4">4/5</option>
                            <option value="5">5/5</option>
                        </select>
                    </div>

                    {/* Content */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Diary entry</label>
                        <textarea
                            name="content"
                            value={formData.content}
                            onChange={handleChange}
                            rows="6"
                            placeholder="Write about your day..."
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100"
                        />
                    </div>

                    {/* Tags */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium mb-1">Tags (optional)</label>
                        <input
                            type="text"
                            name="tags"
                            value={formData.tags}
                            onChange={handleChange}
                            placeholder="e.g. work, family, goals"
                            className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
            px-3 py-2 text-sm text-gray-100"
                        />
                    </div>

                    {/* Submit */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-md
            ${loading ? "bg-gray-500" : "bg-indigo-600 hover:bg-indigo-500"} text-white transition`}
                        >
                            {loading ? "Saving..." : "Save entry"}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
