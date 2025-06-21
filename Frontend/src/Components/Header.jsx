import {Link} from "react-router-dom";

export default function Header(){
    return (
        <header className="sticky top-0 bg-[#009951] text-white shadow-lg z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 flex-wrap">
                <p className="text-xl sm:text-2xl font-semibold">FOOD DELIVERY</p>

                <nav className="flex flex-row gap-x-6 sm:gap-10 text-sm sm:text-base mt-4 sm:mt-0">
                    <h4 className="hover:text-[#ff9b24] transition-colors duration-200">
                        <Link to="/">Home</Link>
                    </h4>
                    <h4 className="hover:text-[#ff9b24] transition-colors duration-200">
                        <a href="/#aboutSection">About</a>
                    </h4>
                    <h4 className="hover:text-[#ff9b24] transition-colors duration-200">
                        <a href="#footer">Contact</a>
                    </h4>
                    <h4 className="hover:text-[#ff9b24] transition-colors duration-200 ml-auto sm:ml-0">
                        <Link to="/map">Map</Link>
                    </h4>
                    <h4 className="hover:text-[#ff9b24] transition-colors duration-200 ml-auto sm:ml-0">
                        <Link to="/admin">Admin</Link>
                    </h4>
                </nav>
            </div>
        </header>

    )
}