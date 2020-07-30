import React from "react";
import Main from "./Main";

function Info({ headings, users, handleSort }) {
    return (
        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed">
                    <thead>
                        <tr>{headings.map(({ name, width })=>{
                            return(
                                <th
                                className="col"
                                key={name}
                                style={{ width }}
                                onClick={() => {
                                    handleSort(name.toLowerCase());
                                }}
                                >
                                    {name}
                                    <span clasName="pointer"></span>
                                </th>
                            )
                        })}
                                </tr>
                    </thead>
                    <Info users={users} />
                </table>
        </div>
    )
}
export default Info