import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ListedBookItem from "../ListedBookItem/ListedBookItem";
import { getReadBooksFromStorage, getWishlistBooksFromStorage } from "../../utility/localstorage";

const ListedBooks = () => {
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [selectedTab, setSelectedTab] = useState(0);
    const [displayBooks, setDisplayBooks] = useState([]);

    useEffect(() => {
        const fetchedReadBooks = getReadBooksFromStorage();
        const fetchedWishlistBooks = getWishlistBooksFromStorage();

        fetch('books.json')
            .then(res => res.json())
            .then(books => {
                const filterdReadBooks = books.filter(book => fetchedReadBooks.includes(parseInt(book.id)));
                setReadBooks(filterdReadBooks);

                const filteredWishlistBooks = books.filter(book => fetchedWishlistBooks.includes(parseInt(book.id)));
                setWishlistBooks(filteredWishlistBooks);

                setDisplayBooks(filterdReadBooks);
            })
    }, []);

    const handleShowReadBooks = () => {
        console.log("Showing Read Books");
        setDisplayBooks(readBooks);
        setSelectedTab(0);
    }

    const handleShowWishlistBooks = () => {
        console.log("Showing Wishlist Books");
        setDisplayBooks(wishlistBooks);
        setSelectedTab(1);
    }

    const handleSort = (sortby) => {
        console.log("before: ", displayBooks);
        if (sortby === "rating") {
            console.log("Sorted by rating");

            const sortedBooks = [...displayBooks].sort((a, b) => a.rating - b.rating)
            setDisplayBooks(sortedBooks)

            console.log("after: ", displayBooks);
        }
        if (sortby === "pages") {
            console.log("Sorted by pages");

            const sortedBooks = [...displayBooks].sort((a, b) => a.number_of_pages - b.number_of_pages)
            setDisplayBooks(sortedBooks)

            console.log("after: ", displayBooks);
        }
        if (sortby === "year") {
            console.log("Sorted by year");

            const sortedBooks = [...displayBooks].sort((a, b) => a.year_of_publishing - b.year_of_publishing)
            setDisplayBooks(sortedBooks)

            console.log("after: ", displayBooks);
        }
    }

    return (
        <div>
            <h2 className="text-center font-bold text-3xl bg-[#F3F3F3] py-8 rounded-2xl">Books</h2>
            <div className="mt-3">
                <div className="flex justify-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0D] hover:bg-[#23BE0D] border-none text-white px-8">Sort By <IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-[#F3F3F3] gap-3">
                            <button onClick={() => handleSort("rating")}>Rating</button>
                            <button onClick={() => handleSort("pages")}>Number of Pages</button>
                            <button onClick={() => handleSort("year")}>Publication Year</button>
                        </ul>
                    </div>
                </div>
                <div className="flex py-1">
                    <button onClick={() => { handleShowReadBooks() }} className={`${selectedTab == 0 ? "border-x-2 border-t-2" : "border-b-2 text-gray-400"} p-2 rounded-t-lg`}>Read Books</button>
                    <button onClick={() => { handleShowWishlistBooks() }} className={`${selectedTab == 1 ? "border-x-2 border-t-2" : "border-b-2 text-gray-400"} p-2 rounded-t-lg`}>Wishlist Books</button>
                    <div className="border-b-2 flex-auto"></div>
                </div>
                {
                    displayBooks.map((book, index) => <ListedBookItem key={index} book={book}></ListedBookItem>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;