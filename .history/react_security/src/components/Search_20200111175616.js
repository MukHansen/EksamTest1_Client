import React, { useState, useEffect } from "react";
import facade from "./loginFacade";
import uuid from "uuid/v1";
import URL from "../settings";

function Search({ loggedIn }) {
    console.log("Data");
    console.log("loggedIn", loggedIn);
    // const [person, setPerson] = useState([]);
    const initialState = {fName: "", lName: "", phone: "", email: ""};
    const [person, setPerson] = useState(initialState);

    const searchById = () => {
        if (loggedIn) {
            const getData = async () => {
                try {
                    const personData = await facade.fetchPersonById(document.getElementById("id").value);
                    console.log("personData", personData);
                    setPerson(personData);
                } catch (e) {
                    console.log("err", e);
                }
            };
            getData();
        }
      };

    if (loggedIn) {
        return (
            <div>
                <hr />
                    <input placeholder="Id" type="text" id="id" />
                    <button onClick={searchById}>Search by id</button>
                <hr />
                <form>
                    <input placeholder="Email" type="text" id="email" />
                    <button>Search</button>
                </form>
                <hr />
                <form>
                    <input placeholder="Phone" type="text" id="phone" />
                    <button>Search</button>
                </form>
                <hr />
                <div>
                <p>First name: {person.fName}</p>
                <p>First name: {person.lName}</p>
                <p>First name: {person.phone}</p>
                <p>First name: {person.email}</p>
                </div>
            </div >
        )
    } else {
        return (
            <div>
                <h2> Please login to view data</h2>
            </div >
        )
    }
}
export default Search;

// const searchById = () => {
//     const ID = document.querySelector("#id").value;
//     console.log("searching for id", ID);
//     const options = facade.makeOptions("GET", true); //True add's the token
//     fetch(URL + "/api/person/id/" + ID, options)
//     .then(res => res.json())
//     .then(facade.handleHttpErrors)
//     .then(personData => {
//         console.log("Person data", personData);
//         setPerson({fName: personData.fName, lName: personData.lName, phone: personData.phone, email: personData.email});
//         setPersonFirstName(personData.fName);
//         console.log("personFirstName -->", personFirstName.fName);
//         console.log("person fName", person.fName);
//         console.log("personData fName", personData.fName);
//         console.log("person ", person);
//     })
//     return (
//     // return document.getElementById("content").innerHTML = (
//         <div id="content">
//             {/* <p>{JSON.stringify(person.fName)}</p> */}
//             <h2>what</h2>
//             <p>first name: {personFirstName}</p>
//             <p>first name: {person}</p>
//         </div>
//     )
//   };



// const searchById = () => {
//     var personData = {};
//     console.log("personData berfore fetch", personData);
//     const ID = document.querySelector("#id").value;
//     console.log("searching for id", ID);
//     const options = facade.makeOptions("GET", true); //True add's the token
//     fetch(URL + "/api/person/id/" + ID, options)
//     .then(res => res.json())
//     .then(facade.handleHttpErrors)
//     .then(data => {
//         console.log(data);
//         personData = data;
//         console.log("personData after fetch", personData);
//     })
//     console.log("personData berfore setPerson", personData);
//     return setPerson({personData})
//   };