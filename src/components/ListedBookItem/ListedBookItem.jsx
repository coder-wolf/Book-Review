import { useNavigate } from "react-router-dom";
import Tag from "../Tag/Tag";

const ListedBookItem = ({ book }) => {
    const navigate = useNavigate();
    const { id, title, author, is_fiction, rating, book_cover, tags, number_of_pages, publisher, year_of_publishing, review } = book;
    // console.log(book);

    return (
        <div className="border rounded-2xl grid lg:grid-cols-5 gap-4 pl-6 py-6 mt-4">
            <div className="flex items-center">
                <div className="bg-[#F3F3F3] w-56 h-56 rounded-2xl flex justify-center items-center">
                    <img className="h-44" src={book_cover} alt="" />
                </div>
            </div>
            <div className="col-span-4 leading-8 p-2">
                <h2 className="font-playfair text-2xl font-semibold">{title}</h2>
                <p>By: {author}</p>
                <p className="flex gap-2 items-center">
                    <span className="font-bold">Tag</span>
                    {
                        // tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                    }
                </p>
                <div className="flex gap-4 text-gray-500">
                    <p>Publisher: {publisher}</p>
                    <p>Page: {number_of_pages}</p>
                </div>
                <hr className="my-2" />
                <div className="flex gap-2 py-2 flex-col sm:flex-row">
                    <div className="px-4 py-2 rounded-3xl bg-[#E1EDFF] text-[#499AFF]">Category: {is_fiction ? "Fiction" : "Non Fiction"}</div>
                    <div className="px-4 py-2 rounded-3xl bg-[#FFF3E0] text-[#FFB549]">Rating: {rating}</div>
                    <div onClick={() => { navigate(`/book_details/${id}`) }} className="btn px-4 py-1 rounded-3xl bg-[#23BE0D] hover:bg-[#23BE0D] text-white">View Details</div>
                </div>
            </div>
        </div>
    );
};

export default ListedBookItem;