import React, { useState, useEffect } from "react";
import facade from "./loginFacade";
import uuid from "uuid/v1";
import URL from "../settings";

function Data({ loggedIn }) {
    const CONTENT = document.querySelector("#content");
    console.log("Data");
    console.log("loggedIn", loggedIn);
    // const [person, setPerson] = useState([]);
    const [person, setPerson] = useState({fName: '', lName: '', phone: '', email: ''});

    // const searchById = (id) => {
    //     console.log("searching for id", id);
    //     facade.login()
    //     .then(res => setLoggedIn(true));
    //     console.log("found id", id);
    //   };
    const searchById = () => {
        const ID = document.querySelector("#id").value;
        console.log("searching for id", ID);
        const options = facade.makeOptions("GET", true); //True add's the token
        fetch(URL + "/api/person/id/" + ID, options)
        .then(res => res.json())
        .then(personData => {
            console.log("Person data", personData);
            setPerson([...personData]);
            console.log("person fName", person.fName);
            console.log("person ", person);
        })
        .then(facade.handleHttpErrors)
        return document.getElementById("content").innerHTML = (
            <div id="content">
                {/* <p>{JSON.stringify(person.fName)}</p> */}
                <p>first name: {person.fName}</p>
            </div>
        )
      };

    if (loggedIn) {
        return (
            <div>
                {/* <button onclick={getAllHobbies}>List all hobbies</button> */}
                <hr />
                {/* <form onChange={onChange}> */}
                    <input placeholder="Id" type="text" id="id" />
                    <button onClick={searchById}>Search by id</button>
                    {/* <button onClick={login}>Search</button> */}
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
                <div id="content">
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
export default Data;