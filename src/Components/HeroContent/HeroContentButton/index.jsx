import { Link } from "react-router-dom";

export function HeroContentButton() {
    return (
        <div className="flex justify-center m-4">
            <Link to="/Donations">
                <button className="w-72 rounded-lg bg-orange-400 py-2 text-2xl font-bold tracking-widest text-orange-900 shadow-md transition-colors duration-200 hover:bg-orange-500 focus:visible focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
                    NAVEGAR
                </button>
            </Link>
        </div>
    )
}
