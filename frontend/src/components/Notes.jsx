import React from 'react'

const Notes = () => {
    return (
        <div>
            <div class="bg-gray-900 min-h-screen text-gray-100">
                <div class="max-w-4xl mx-auto px-4 py-8 space-y-4">

                    {/* <!-- One note card --> */}
                    <article class="bg-gray-800 border border-gray-700 rounded-lg p-4 sm:p-5 shadow-sm">

                        {/* name */}
                        <span class="inline-flex items-center px-2 py-0.5 mb-3 rounded-full text-l font-medium
                     bg-gray-700 text-gray-200">
                            VIPIN
                        </span>

                        {/* <!-- Top row: date + mood + optional energy --> */}
                        <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
                            <div>
                                <p class="text-xs uppercase tracking-wide text-gray-400">
                                    Date
                                </p>
                                <p class="text-sm font-medium">
                                    09-February-2026
                                </p>
                            </div>

                            <div class="flex items-center gap-2">
                                {/* <!-- Mood badge --> */}
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                       bg-indigo-500/20 text-indigo-300">
                                    Mood: Happy
                                </span>

                                {/* <!-- Optional: Energy badge --> */}
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                       bg-emerald-500/20 text-emerald-300">
                                    Energy: 4/5
                                </span>
                            </div>
                        </div>

                        {/* <!-- Optional tags --> */}
                        {/* <div class="mb-3 flex flex-wrap gap-2">
                            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                     bg-gray-700 text-gray-200">
                                work
                            </span>
                            <span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium
                     bg-gray-700 text-gray-200">
                                goals
                            </span>
                        </div> */}

                        {/* <!-- Diary text --> */}
                        <div class="prose prose-invert max-w-none text-sm leading-relaxed">
                            <p>
                                Today was a productive day. Finished my React component, did a solid gym session,
                                and spent some time reading the Bhagavad Gita. Feeling focused and grateful.
                            </p>
                        </div>
                    </article>

                </div>
            </div>

        </div>
    )
}

export default Notes
