import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="w-full bg-gray-900 text-gray-100">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16 gap-4">
                        {/* <!-- Left: Text logo --> */}
                        <div class="flex-shrink-0 text-xl font-semibold tracking-tight">
                            OUR<span class="text-indigo-400">LIFE</span>
                        </div>

                        {/* <!-- Middle: Search (hidden on very small screens if you want) --> */}
                        <form class="flex-1 max-w-xl hidden sm:flex">
                            <label for="navbar-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {/* <!-- Search icon --> */}
                                    <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                                    </svg>
                                </span>
                                <input
                                    id="navbar-search"
                                    type="search"
                                    placeholder="Search..."
                                    class="block w-full bg-gray-800 border border-gray-700 text-sm text-gray-100 rounded-md pl-10 pr-3 py-2
                   placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </div>
                        </form>

                        {/* <!-- Right: Auth actions --> */}
                        <div class="flex items-center gap-3">
                            {/* <!-- Desktop buttons --> */}
                            <div class="flex items-center gap-3">
                                <button
                                    class="px-3 py-1.5 text-sm rounded-md border border-gray-700 hover:bg-gray-800 transition">
                                    Login
                                </button>
                                <button
                                    class="px-3 py-1.5 text-sm rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition">
                                    Logout
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>

            {/* searchbar for mobile */}
            <form class="flex-1 max-w-xl flex sm:hidden my-2 mx-2">
                <label for="navbar-search" class="sr-only">Search</label>
                <div class="relative w-full">
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* <!-- Search icon --> */}
                        <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" />
                        </svg>
                    </span>
                    <input
                        id="navbar-search"
                        type="search"
                        placeholder="Search..."
                        class="block w-full bg-gray-800 border border-gray-700 text-sm text-gray-100 rounded-md pl-10 pr-3 py-2
                   placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    class="ml-2 inline-flex items-center px-4 py-2 text-sm font-medium
                        rounded-md bg-indigo-600 text-white
                        hover:bg-indigo-500 focus:outline-none focus:ring-2
                        focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                        transition-colors"
                >
                    Search
                </button>
            </form>

        </div>
    )
}

export default Navbar
