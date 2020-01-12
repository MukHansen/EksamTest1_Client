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
                    const hobbyData = await facade.fetchAllHobbies();
                    console.log("hobbyData", hobbyData);
                    setAllHobbies(hobbyData);
                } catch (e) {
                    console.log("err", e);
                }
            };
            getData();
        }
      };
    const addEditHobby = () => {
        if (loggedIn) {
            const getData = async () => {
                try {
                    const addEditingHobby = 
                    await facade.addEditHobby(
                        document.getElementById("hobbyToEditName"),
                        document.getElementById("hobbyToEditDescription"));
                    console.log("Adding/Editing Hobby", addEditingHobby);
                    const hobbyData = await facade.fetchAllHobbies();
                    console.log("hobbyData", hobbyData);
                    setAllHobbies(hobbyData);
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
        <select id="hobbyToDelete">
            <option> - select a Hobby to delete - </option>
            {allHobbies.map((hobby) => {
              return <option key={uuid()}>{hobby.name}</option>;
            })};
        </select>
        <button onClick={deleteHobbyByName} >Delete Hobby</button>
        <hr />
        <input placeholder="HobbyName" type="text" id="hobbyToEditName" />
        <input placeholder="HobbyDescription" type="text" id="hobbyToEditDescription" />
        <button  >Add/Edit Hobby</button>
        <button onClick={addEditHobby} >Add/Edit Hobby</button>
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