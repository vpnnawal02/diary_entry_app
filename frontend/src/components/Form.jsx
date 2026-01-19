import React, { useState } from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        author: "",
        entry_date: "",
        mood: "",
        energy: "",
        content: "",
        tags: ""
    });
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            ...formData,
            energy: formData.energy ? Number(formData.energy) : null,
            tags: formData.tags
                ? formData.tags.split(",").map(tag => tag.trim())
                : null
        };
        try {
            console.log("Payload:", payload);
            const res = await fetch("http://127.0.0.1:8000/diary/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Error:", data);
                alert("Failed to save entry");
            } else {
                console.log("Saved:", data);
                alert("Diary entry saved!");
            }
        } catch (err) {
            console.error("Network error:", err);
        }
    };
    return (
        <div className='flex flex-col justify-center items-center w-full'>

            <form
                onSubmit={handleSubmit}
                className="sm:w-[50%] w-[90%] bg-gray-900 text-gray-100 p-6 rounded-lg my-5">
                <h1 className='text-white text-3xl sm:text-5xl text-center pt-5'>Ok, I am listening.....</h1>
                {/* <!-- Date --> */}
                <div>
                    <label htmlFor="entry-date" className="block text-sm font-medium mb-1 ">
                        Date
                    </label>
                    <input
                        type="date"
                        id="entry-date"
                        name="entry_date"
                        value={formData.entry_date}
                        onChange={handleChange}
                        className="mt-1 block  bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-[90%] sm:w-full"
                    />
                </div>

                {/* Name */}
                <div>
                    <label for="mood" className="block text-sm font-medium mb-1">
                        Who are you???
                    </label>
                    <select
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select your name</option>
                        <option value="Neha">Neha</option>
                        <option value="Vipin">Vipin</option>

                    </select>
                </div>

                {/* <!-- Mood --> */}
                <div>
                    <label
                        for="mood" className="block text-sm font-medium mb-1">
                        Mood
                    </label>
                    <select
                        id="mood"
                        name="mood"
                        value={formData.mood}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select your mood</option>
                        <option value="very_happy">Very happy</option>
                        <option value="happy">Happy</option>
                        <option value="neutral">Neutral</option>
                        <option value="sad">Sad</option>
                        <option value="very_sad">Very sad</option>
                    </select>
                </div>

                {/* <!-- Energy --> */}
                <div>
                    <label for="mood"

                        className="block text-sm font-medium mb-1">
                        Energy
                    </label>
                    <select
                        id="energy"
                        name="energy"
                        value={formData.energy}
                        onChange={handleChange}
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select your energy</option>
                        <option value="1">1/5</option>
                        <option value="2">2/5</option>
                        <option value="3">3/5</option>
                        <option value="4">4/5</option>
                        <option value="5">5/5</option>
                    </select>
                </div>

                {/* <!-- Diary entry --> */}
                <div>
                    <label for="entry" className="block text-sm font-medium mb-1">
                        Diary entry
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        rows="6"
                        placeholder="Write about your day..."
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>

                {/* <!-- Optional: Tags --> */}
                <div>
                    <label for="tags" className="block text-sm font-medium mb-1">
                        Tags (optional)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        placeholder="e.g. work, family, goals"
                        className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
  px-3 py-2 text-sm text-gray-100
  placeholder-gray-500
  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* <!-- Submit --> */}
                <div className="pt-2">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium
             rounded-md bg-indigo-600 text-white
             hover:bg-indigo-500 focus:outline-none focus:ring-2
             focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
             transition-colors"
                    >
                        Save entry
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Form
