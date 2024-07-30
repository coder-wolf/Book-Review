import { Link } from "react-router-dom";

const Banner = ({ banner_image }) => {
    return (
        <div>
            <div className="hero bg-[#F3F3F3] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse p-8 md:p-20 justify-between">
                    <img
                        src={banner_image}
                        className="max-w-sm md:h-80 h-64 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold lg:w-2/3 py-10 font-playfair">Books to freshen up your bookshelf</h1>
                        <Link to="/listed_books" className="btn bg-[#23BE0D] hover:bg-[#23BE0D] border-none text-white px-6">View The List</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;