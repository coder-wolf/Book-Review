const Banner = ({ banner_image }) => {
    return (
        <div>
            <div className="hero bg-[#F3F3F3] rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse p-20 justify-between">
                    <img
                        src={banner_image}
                        className="max-w-sm h-80 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold w-2/3 py-10 font-playfair">Books to freshen up your bookshelf</h1>
                        <a className="btn bg-[#23BE0D] border-none text-white px-6">View The List</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;