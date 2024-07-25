const BookDetails = ({ book }) => {
    return (
        <div className="grid grid-cols-2">
            <div className="col-span-1">
                <img src={book.book_cover} alt="" />
            </div>
            <div className="col-span-1">

            </div>
        </div>
    );
};

export default BookDetails;