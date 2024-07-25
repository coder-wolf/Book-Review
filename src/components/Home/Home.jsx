import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BooksGallery from "../BooksGallery/BooksGallery";

const Home = () => {
    const books = useLoaderData();

    return (
        <div>
            <Banner banner_image={books[6].book_cover}></Banner>
            <BooksGallery books={books}></BooksGallery>
        </div>
    );
};

export default Home;