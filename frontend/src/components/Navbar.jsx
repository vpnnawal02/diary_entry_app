import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="w-full bg-gray-900 text-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 gap-4">
                        {/* <!-- Left: Text logo --> */}
                        <div class="text-3xl sm:text-4xl font-semibold tracking-tight">
                            OUR<span class="text-indigo-400">LIFE</span>
                        </div>
                        {/* <!-- Right: Auth actions --> */}
                        <div class="flex items-center gap-3">
                            {/* <!-- Desktop buttons --> */}

                            <div class="flex items-center gap-3">
                                <a href="/notes">
                                    <button
                                        class="px-3 py-1.5 text-sm rounded-md border border-gray-700 hover:bg-gray-800 transition">
                                        Read Notes
                                    </button>
                                </a>
                                <a href="form" className="">
                                    <button
                                        class="px-3 py-1.5 text-sm rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition">
                                        Write Notes
                                    </button>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
