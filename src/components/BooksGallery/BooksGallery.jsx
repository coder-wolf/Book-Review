import BooksGalleryTile from "../BooksGalleryTile/BooksGalleryTile";

const BooksGallery = ({ books }) => {

    return (
        <div className="mt-16">
            <h2 className="text-center text-4xl font-playfair font-semibold">Books</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-6">
                {
                    books.map((book, index) => <BooksGalleryTile key={index} book={book}></BooksGalleryTile>)
                }
            </div>
        </div>
    );
};

export default BooksGallery;