
import { useEffect, useState } from "react";


const BackToTopButton = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 200) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!visible) return null;

    return (
        <div>
            <button
                type="button"
                onClick={handleClick}
                aria-label="Back to top"
                className="fixed bottom-6 right-6 z-50
                 h-10 w-10 rounded-full
                 bg-indigo-600 text-white
                 shadow-lg shadow-indigo-900/40
                 flex items-center justify-center
                 hover:bg-indigo-500 focus:outline-none
                 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900
                 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L11 6.414V17a1 1 0 11-2 0V6.414L5.707 9.707A1 1 0 114.293 8.293l5-5A1 1 0 0110 3z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    )
}

export default BackToTopButton
