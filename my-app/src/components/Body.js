import React from "react";
function Body({ users }) {
    function formatDate(date) {
        const dateArr = date.split("-");
        const day = dayArr[0];
        const month = dateArr[1];
        const year = dateArr[0];
        const dayArr = dateArr[2].split("T");
        const formattedDate = [day, month, year].join("-");
        return formattedDate;
    }

    return(
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                user.map(({ login, name, phone, email }) => {
                    return( 
                        <tr key={login.uniqueId}>
                            <td data-th="image" className="align-middle">
                                <img
                                    src={picture.medium}
                                    alt={"profile image for " + name.first + " " + name.last}
                                    className="img-response"
                                    />
                            </td>
                            <td data-th="DOB" className = "align-middle">
                                {formatDate(dob.date)}
                            </td>
                            <td data-th="Name" className= "name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Phone" className = "align-middle">
                                {phone}
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={"mailto: " + email} target="_blank">
                                    {email}
                                </a>
                            </td>   
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
        </tbody>
    )
}

export default Body