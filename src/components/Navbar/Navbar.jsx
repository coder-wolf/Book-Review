import { Link } from "react-router-dom";

const Navbar = () => {
    const navbarItems = <>
        <Link to="/">Home</Link>
        <Link to="/listed_books">Listed Books</Link>
        <Link to="/pages_to_read">Pages to Read</Link>
    </>

    return (
        <div className="pb-8">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navbarItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        {navbarItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3 lg:flex hidden">
                    <a className="btn bg-[#23BE0D] hover:bg-[#23BE0D] border-none text-white px-7">Sign in</a>
                    <a className="btn bg-[#59C5D2] hover:bg-[#59C5D2]  border-none text-white px-7">Sign up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;