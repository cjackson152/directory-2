import React, { Component } from "react";
import Info from "./Info";
import NavBar from "./NavBar";
import API from "../utils/API";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            users: [{}],
            order: "descend",
            filteredUsers:[{}],
            headings: [
                { name: "Image", width: "20%"},
                { name: "Name", width: "10%"},
                { name: "Phone", width: "10%"},
                { name: "Email", width: "10%"},
                { name: "DOB", width: "10%"},
            ],
            handleSort: heading => {
                if (this.state.order === "descend") {
                    this.setState({
                        order: "ascend"
                    })

                } else {
                    this.setState({
                        order: "descend"
                    })
                }

                const compareFnc = (a, b) => {
                    if (this.state.order === "ascend") {
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1;
                        }
                        else if (heading === "name") {
                            return a[heading].first.localCompare(b[heading].first);
                        } else {
                            return a[heading] - b[heading];
                        }
                    } else {
                        if (a[heading] === undefined) {
                            return 1;
                        } else if (b[heading] === undefined) {
                            return -1; 
                        } else if (heading === "name") {
                            return b[heading].first.localCompare(a[heading].first);
                        } else {
                            return b[heading] - a[heading];
                        }
                    }
                }
                const sortedUsers = this.state.filteredUsers.sort(compareFnc);
                this.setState({ filteredUsers: sortedUsers });

            },

            handleSearchChange: event => {
                console.log(event.target.value);
                const filter = event.target.value;
                const filteredList = this.state.users.filter(item => {
                    let values = Object.values(item)
                    .join("")
                    .toLowerCase();
                    return values.indexOf(filter.toLowerCase()) !== -1;
                });

                this.setState({ filteredUsers: filteredList });
            }
        };
    }
    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
    }

    render() {
        return (
            <>

            <NavBar handleSearchChange={this.state.handleSearchChange} />
            <div className="data-area">
                <Info
                    headings={this.state.headings}
                    users={this.state.filteredUsers}
                    handleSort={this.state.handleSort} />
            </div>
            </>
        )
    }
}