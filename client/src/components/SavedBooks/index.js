import React, { useEffect } from "react";

function SavedBooks(props) {

    // useEffect(function () {
    //     console.log(props.book);
    // }, [])



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
                        <button type="button" onClick={props.delete} className="btn btn-secondary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedBooks;