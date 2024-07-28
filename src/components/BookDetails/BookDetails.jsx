import { useLoaderData, useParams } from "react-router-dom";
import Tag from "../Tag/Tag";
import { useEffect, useState } from "react";

const BookDetails = ({ id }) => {
    const [books, setBooks] = useState([]);

    // const params = useParams();
    // console.log(params);

    const data = useLoaderData();
    console.log(data);

    return (
        <div className="grid grid-cols-2 gap-20">
            <div className="col-span-1 bg-gray-100 items-center justify-center flex py-10 rounded-xl">
                <img className="h-96" src="https://media.springernature.com/full/springer-static/cover-hires/book/978-3-030-85939-8" alt="" />
                <div>
                    {books.length}
                </div>
            </div>
            <div className="col-span-1 leading-10">
                <h2 className="font-playfair text-4xl font-semibold">The Catcher in the Rie</h2>
                <p className="">By: Anwar Hossain</p>
                <hr className="mt-2" />
                <p className="">Fiction</p>
                <hr className="mb-2" />
                <p className="leading-6">
                    <span className="font-bold">Review: </span>
                    Sit amet consectetur. Interdum porta pulvinar non sit aliquam. Aenean pulvinar blandit vel non enim elementum penatibus pellentesque ac. Nec accumsan euismod nulla adipiscing lectus. Morbi elementum a auctor erat diam tellus. Fermentum faucibus nulla enim ornare.
                    Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.
                </p>
                <div className="flex flex-row gap-4">
                    <span className="font-bold">Tag: </span>
                    <Tag tag="#Hello"></Tag>
                    <Tag tag="#Hello"></Tag>
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
                        <p>281</p>
                        <p>J.B. Lippincot & Co.</p>
                        <p>1960</p>
                        <p>4.8</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="btn">Read</button>
                    <button className="btn">Wishlist</button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;