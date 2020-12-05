import React from "react";

function Jumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">{props.title}</h1>
                <p className="lead">{props.description}</p>
            </div>
        </div>
    );
}

export default Jumbotron;