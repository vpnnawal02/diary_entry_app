import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center px-6">

            {/* Main Card */}
            <div className="max-w-xl w-full bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-lg text-center">

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
                    Our Little Space
                </h1>

                {/* Subtitle */}
                <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                    A quiet corner for thoughts, feelings, and moments that matter —
                    written by us, for us.
                </p>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-indigo-500 mx-auto mb-6 rounded"></div>

                {/* Description */}
                <p className="text-gray-400 mb-10 text-sm sm:text-base">
                    Whether it’s a good day or a difficult one, this is where our stories live.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="/form" className="">
                        <button
                            onClick={() => navigate("/new")}
                            className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 transition text-sm font-medium"
                        >
                            Write an Entry
                        </button>
                    </a>

                    <a href="/notes" className="">
                        <button
                            onClick={() => navigate("/notes")}
                            className="px-6 py-2 rounded-md border border-gray-600 hover:bg-gray-700 transition text-sm font-medium"
                        >
                            View Notes
                        </button>
                    </a>

                </div>
            </div>

            {/* Footer Text */}
            <p className="mt-8 text-gray-500 text-xs">
                Built with care, for moments that deserve to be remembered.
            </p>
        </div>
    );
};

export default Home;
