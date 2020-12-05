import React, { useState, useEffect } from "react";
import dbAPI from "../../utils/dbAPI";

import SavedBooks from "../SavedBooks";



function SearchForm() {
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(function () {
        getSavedBooks()
    }, [])

    function getSavedBooks () {
        dbAPI.getBooks()
            .then(function (result) {
                setSavedBooks(result.data);
            })
    }

    function handleDelete(id) {
        dbAPI.deleteBook(id)
        .then(res => getSavedBooks())
        .catch(err => console.log(err))
        console.log("working");
    }

    return (
        <div>
            { savedBooks.map(book => (
                  <SavedBooks
                    book={book}
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    link={book.link}
                    delete={() => handleDelete(book._id)}
                  />
                ))}
        </div>
        


    );
}

export default SearchForm;

