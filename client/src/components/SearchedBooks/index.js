import React from "react";
import dbAPI from "../../utils/dbAPI";

function SearchedBooks(props) {

    function handleSaveBook(){
        dbAPI.saveBook({
            title: props.book.volumeInfo.title,
            image: (props.book.volumeInfo.imageLinks === undefined)
            ? "https://books.google.com/googlebooks/images/no_cover_thumb.gif"
            : `${props.book.volumeInfo.imageLinks.thumbnail}`,
            authors: props.book.volumeInfo.authors,
            description: props.book.volumeInfo.description,
            link: props.book.volumeInfo.previewLink
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="card">
            <h4 className="card-header"><strong>{props.title}</strong></h4>
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                            <img src={props.image} alt={props.title} />
                        </div>
                        <div className="col-md-9 col-sm-12">
                            <h5 className="card-title"><strong>Written By: </strong> {props.authors}</h5>
                            <p className="card-text">{props.description}</p>

                        </div>
                    </div>
                    <br />
                    <div className="row">
                    <a href={props.link}>
                        <button className="btn btn-secondary">Details</button>
                    </a>
                        <button type="button" onClick={handleSaveBook} className="btn btn-secondary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchedBooks;