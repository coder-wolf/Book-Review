import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesToRead from './components/PagesToRead/PagesToRead.jsx';
import Root from './components/Root/Root.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('books.json'),
        element: <Home></Home>
      },
      {
        path: "/listed_books",
        element: <ListedBooks></ListedBooks>
      },
      {
        path: "/book_details/:id",
        loader: () => fetch('books.json'),
        element: <BookDetails></BookDetails>
      },
      {
        path: "/pages_to_read",
        element: <PagesToRead></PagesToRead>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
