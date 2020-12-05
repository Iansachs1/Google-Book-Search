import React, { useState, useEffect } from "react";
import googleAPI from "../../utils/googleAPI";

import SearchedBooks from "../SearchedBooks"


function SearchForm() {

    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [resultsRecieved, setResultsRecieved] = useState(false);

    useEffect(function () {
        console.log(searchResults);
    }, [searchResults])

    function handleInputChange(event) {
        const { value } = event.target;
        setSearchValue(value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        googleAPI.search(searchValue)
            .then(function (result) {
                setSearchResults(result.data.items);
                setResultsRecieved(true);
            })
    }

    return (
        <div>
            <div className="container">

                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="SearchInput">Book</label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            id="SearchInput" />
                        <small id="emailHelp" className="form-text text-muted">Search by book title</small>
                    </div>
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </form>
                <br/>
            </div>

            {
                resultsRecieved
                    ? <div>
                        {searchResults.map((book, index) => {
                            return <SearchedBooks
                                book={book}
                                key={index}
                                title={book.volumeInfo.title}
                                image={
                                    book.volumeInfo.imageLinks === undefined
                                        ? "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
                                        : `${book.volumeInfo.imageLinks.thumbnail}`
                                }
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.previewLink}

                            />
                        })}
                    </div>
                    : <div>no results recieved</div>
            }
        </div>


    );
}

export default SearchForm;

