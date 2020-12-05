import React from "react";

import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";

function Search () {
    return (
        <div>
            <Jumbotron title="Search Books" 
            description="Search for books you are interested in and add them to your reading list!" />
    
            <SearchForm />
        </div>
        )
}

export default Search;