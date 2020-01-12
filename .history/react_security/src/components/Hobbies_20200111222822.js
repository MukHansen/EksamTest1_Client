import React, { useState, useEffect } from "react";
import facade from "./loginFacade";
import uuid from "uuid/v1";

function Hobbies({ loggedIn, allHobbies, setAllHobbies }) {
    console.log("Hobbies");

    const deleteHobbyByName = () => {
        if (loggedIn) {
            const getData = async () => {
                try {
                    const deletingHobby = await facade.deleteHobby(document.getElementById("hobbyToDelete").value);
                    console.log("Deleting Hobby", deletingHobby);
                    var hobbies = allHobbies;
                    var hobbyToRemove = document.getElementById("hobbyToDelete").value;

                    for (let i = 0; i < hobbies.length; i++) {
                        const index = hobbies.indexOf(i);
                        if (index == hobbyToRemove) {
                        hobbies.splice(index, 1);
                        }   
                    }
                    setAllHobbies(hobbies);
                } catch (e) {
                    console.log("err", e);
                }
            };
            getData();
        }
      };

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
        {/* <input placeholder="HobbyName" type="text" id="hobbyToDelete" /> */}
        <select id="hobbyToDelete">
            <option> - select a Hobby to delete - </option>
            {allHobbies.map((hobby) => {
              return <option key={uuid()}>{hobby.name}</option>;
            })};
        </select>
        <button onClick={deleteHobbyByName} >Delete Hobby</button>
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
