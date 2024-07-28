import { FaRegStar } from "react-icons/fa6";
import Tag from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

const BooksGalleryTile = ({ book }) => {
    const { id, title, author, is_fiction, rating, tags, number_of_pages, publisher, year_of_publishing, review, book_cover } = book;

    const navigate = useNavigate();

    const handleNavigateToDetailsPage = (id) => {
        navigate(`/book_details/${id}`);
    }

    return (
        <div onClick={() => { handleNavigateToDetailsPage(id) }}>
            <div className="card bg-base-100 border">
                <figure className="px-10 pt-10">
                    <div className="bg-[#F3F3F3] w-full h-max p-4 py-8 rounded-xl flex justify-center">
                        <img
                            src={book_cover}
                            alt="Shoes"
                            className="rounded-xl h-36 shadow-xl shadow-[]" />
                    </div>
                </figure>
                <div className="card-body ">
                    <div className="flex flex-row gap-2">
                        {
                            tags.map((tag, idx) => <Tag key={idx} tag={tag}></Tag>)
                        }
                    </div>
                    <h2 className="card-title font-playfair font-bold">{title}</h2>
                    <p>By: {author}</p>
                    <div className="divide-dashed">
                        <div></div>
                        <div></div>
                    </div>
                    <div className="flex justify-between">
                        <span>Fiction</span>
                        <span className="flex flex-row items-center gap-2">
                            <span>5.00</span>
                            <FaRegStar />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksGalleryTile;
