const getReadBooksFromStorage = () => {
    const storedReadList = localStorage.getItem('readlist');
    if (storedReadList) {
        return JSON.parse(storedReadList);
    }
    return [];
}

const setReadBooksStorage = id => {
    const storedReadList = getReadBooksFromStorage();
    const exists = storedReadList.find(bookId => parseInt(bookId) === parseInt(id));
    if (!exists) {
        storedReadList.push(id);
        localStorage.setItem('readlist', JSON.stringify(storedReadList));
        return true;
    }
    return false;
}

const getWishlistBooksFromStorage = () => {
    const storedWishList = localStorage.getItem('wishlist');
    if (storedWishList) {
        return JSON.parse(storedWishList);
    }
    return [];
}

const setWishlistBooksStorage = id => {
    const storedWishList = getWishlistBooksFromStorage();
    const exists = storedWishList.find(bookId => parseInt(bookId) === parseInt(id));
    if (!exists) {
        storedWishList.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishList));
        return true;
    }
    return false;
}

export { getReadBooksFromStorage, getWishlistBooksFromStorage, setReadBooksStorage, setWishlistBooksStorage }