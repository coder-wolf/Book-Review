import { useLocation } from "react-router-dom";
import Tag from "../Tag/Tag";
import { setReadBooksStorage, setWishlistBooksStorage } from "../../utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


const BookDetails = () => {
    const location = useLocation();
    const book = location.state;
    const { id, title, author, is_fiction, rating, book_cover, tags, number_of_pages, publisher, year_of_publishing, review } = book;
    const [addedToList, setAddedToList] = useState("");

    const handleAddToReadlist = () => {
        if (addedToList == "") {
            setAddedToList("read");
            setReadBooksStorage(id);
            // toast("Added to read list");
            toast.success('📖 Added to read list!', {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
        else if (addedToList == "read") {
            toast.error('Already in read list', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
        else {
            toast.error('Already in wishlist', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    }

    const handleAddToWishlist = () => {
        if (addedToList == "") {
            setAddedToList("wishlist");
            setWishlistBooksStorage(id);
            toast.success('📚 Added to wish list!', {
                position: "top-right",
                autoClose: 1100,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                // theme: "colored",
                theme: "light",
            });
        }
        else if (addedToList == "read") {
            toast.error('Already in read list', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
        else {
            toast.error('Already added to wishlist', {
                position: "top-right",
                autoClose: 1200,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }
    }

    return (
        <div className="grid grid-cols-2 gap-20">
            <div className="col-span-1 bg-gray-100 items-center justify-center flex py-10 rounded-xl">
                <img className="h-96" src={book_cover} alt="" />

            </div>
            <div className="col-span-1 leading-10">
                <h2 className="font-playfair text-4xl font-semibold">{title}</h2>
                <p className="">By: {author}</p>
                <hr className="mt-2" />
                <p className="">{is_fiction ? "Fiction" : "Non-fiction"}</p>
                <hr className="mb-2" />
                <p className="leading-6">
                    <span className="font-bold">Review: </span>
                    {review}
                </p>
                <div className="flex flex-row gap-4">
                    <span className="font-bold">Tag: </span>
                    {
                        tags.map((tag, index) => <Tag key={index} tag={tag}></Tag>)
                    }
                    {/* <Tag tag="#Hello"></Tag>
                    <Tag tag="#Hello"></Tag> */}
                </div>
                <hr className="my-3" />
                <div className="grid grid-cols-3">
                    <div className="text-gray-500">
                        <p>Number of pages:</p>
                        <p>Publisher:</p>
                        <p>Year of Publishing:</p>
                        <p>Rating:</p>
                    </div>
                    <div className="col-span-2 font-semibold">
                        <p>{number_of_pages}</p>
                        <p>{publisher}</p>
                        <p>{year_of_publishing}</p>
                        <p>{rating}</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="btn" onClick={() => { handleAddToReadlist() }}>Read</button>
                    <button className="btn" onClick={() => { handleAddToWishlist() }}>Wishlist</button>
                </div>

            </div>
            <ToastContainer />

        </div>
    );
};

export default BookDetails;