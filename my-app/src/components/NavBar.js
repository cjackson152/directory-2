import React from "react";
import SearchBar from "./SearchBar";
function Nav({ handleSearchChange }) {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button
                className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="falase" aria-label="Toggle NavBar">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse row" id="navbarNav">
                    <div className="input-group col-8">
                        <div className="input-group-text" id="">
                            <span className="input-group-text" id="">
                                DOB
                            </span>
                        </div>
                        <input type="date" className="form-control" />
                        <input type="date" className="form-control"/>
                    </div>
                    <div className="search-area col-4">
                        <SearchBar handleSearchChange={handleSearchChange}/>
                    </div>
                </div>
        </nav>
    )
}

export default Nav;