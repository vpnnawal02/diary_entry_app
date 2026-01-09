import React from 'react'

const Form = () => {
    return (
        <div className='flex flex-col justify-center items-center w-full'>
            {/* <h1 className='text-white text-3xl sm:text-5xl text-center pt-5'>Ok, I am listening.....</h1> */}
            <form class="sm:w-[50%] w-[90%] bg-gray-900 text-gray-100 p-6 rounded-lg my-5">
                {/* <!-- Date --> */}
                <div>
                    <label for="entry-date" class="block text-sm font-medium mb-1 ">
                        Date
                    </label>
                    <input
                        type="date"
                        id="entry-date"
                        name="date"
                        class="mt-1 block  bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-[90%] sm:w-full"
                    />
                </div>

                {/* Name */}
                <div>
                    <label for="mood" class="block text-sm font-medium mb-1">
                        Who are you???
                    </label>
                    <select
                        id="name"
                        name="name"
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select your name</option>
                        <option value="very_happy">Neha</option>
                        <option value="happy">Vipin</option>

                    </select>
                </div>

                {/* <!-- Mood --> */}
                <div>
                    <label for="mood" class="block text-sm font-medium mb-1">
                        Mood
                    </label>
                    <select
                        id="mood"
                        name="mood"
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
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
                    <label for="mood" class="block text-sm font-medium mb-1">
                        Energy
                    </label>
                    <select
                        id="energy"
                        name="energy"
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="">Select your energy</option>
                        <option value="very_happy">1/5</option>
                        <option value="happy">2/5</option>
                        <option value="neutral">3/5</option>
                        <option value="sad">4/5</option>
                        <option value="very_sad">5/5</option>
                    </select>
                </div>

                {/* <!-- Diary entry --> */}
                <div>
                    <label for="entry" class="block text-sm font-medium mb-1">
                        Diary entry
                    </label>
                    <textarea
                        id="entry"
                        name="entry"
                        rows="6"
                        placeholder="Write about your day..."
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    ></textarea>
                </div>

                {/* <!-- Optional: Tags --> */}
                <div>
                    <label for="tags" class="block text-sm font-medium mb-1">
                        Tags (optional)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        placeholder="e.g. work, family, goals"
                        class="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md
             px-3 py-2 text-sm text-gray-100
             placeholder-gray-500
             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                {/* <!-- Submit --> */}
                <div class="pt-2">
                    <button
                        type="submit"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium
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
