import React, { Component } from "react";
import TableBody from "./TableBody";
import "../styles/Table.css";
import SearchBar from "./SearchBar";


export default class TableContainer extends Component { 
//  this is where everything goes ///
    constructor() {
        super();
        this.state = {
            users: [{}],
            userFiltered: [{}],
            order: "descending"
        }
        handleSearch: e => {
            // write search 
            console.log(e.target.value);
        }
    };

    render() {
        return (
            <div className="container">
                <SearchBar handleSearch={this.state.handleSearch} />
                <TableBody users={this.state.userFiltered} /> 
            </div>
        )
        
    }





}