import React, { useState, useEffect } from "react";
import facade from "./loginFacade";
import uuid from "uuid/v1";

function Hobbies({ loggedIn, allHobbies, setAllHobbies }) {
    console.log("Hobbies");

    if(loggedIn){
        return (
        <div>
        <table>
            <thead><tr><td><b>Name</b></td><td><b>Description</b></td></tr></thead>
             <tbody>
                {allHobbies.map((hobby) => (
                    <tr key={uuid()}>
                        <td>{hobby.name}</td>
                        <td>{hobby.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <hr />
        <input placeholder="HobbyName" type="text" id="hobbyToDelete"/>
        <button >Delete Hobby</button>
        <hr />
        </div>
        )     
    } else {
        return (
        <div>
            <h2> Please login to view data</h2>
        </div >
        )
    }
}

export default Hobbies;
