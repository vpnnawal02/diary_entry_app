import React from "react";

const NoteCard = ({ note, onDelete }) => {
    return (
        <article className="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 shadow-sm">

            {/* <div className="flex justify-end mb-2">
                <button
                    onClick={() => onDelete(note.id)}
                    className="text-red-400 hover:text-red-500 text-xs font-medium"
                >
                    Delete
                </button>
            </div> */}

            {/* Author */}
            <span className="inline-flex items-center px-2 py-0.5 mb-3 rounded-full text-l font-medium bg-gray-700 text-gray-200">
                {note.author}
            </span>

            {/* Top row */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div>
                    <p className="text-xs uppercase tracking-wide text-gray-400">
                        Date
                    </p>
                    <p className="text-sm font-medium">
                        {new Date(note.entry_date).toLocaleDateString()}
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {/* Mood */}
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300">
                        Mood: {note.mood}
                    </span>

                    {/* Energy */}
                    {note.energy && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300">
                            Energy: {note.energy}/5
                        </span>
                    )}
                </div>
            </div>

            {/* Tags */}
            {note.tags && note.tags.length > 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                    {note.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <div className="prose prose-invert max-w-none text-sm leading-relaxed">
                <p>{note.content}</p>
            </div>

        </article>
    );
};

export default NoteCard;
