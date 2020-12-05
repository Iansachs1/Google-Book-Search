import React from "react";

import Jumbotron from "../components/Jumbotron";
import SavedForm from "../components/SavedForm";


function Saved() {
    return (
        <div>
            <Jumbotron title="Book List"
                description="View the books you saved to your book list and delete them when you are done." />

            <SavedForm />
        </div>
    )
}

export default Saved;