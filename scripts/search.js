"use strict";


window.onload = function () {
    // dropdown fills
    fillStateDropdown();
    fillParkTypDropdown();

    // hide / show form fields
    selectLocationOptionShow();
    selectLocationOptionHide();
    selectParkTypeOptionHide();
    selectParkTypeOptionShow();

    // onchange events
    document.getElementById("radioLocationBtn").checked;
    document.getElementById("radioLocationBtn").onchange = currentlySelectedSearchType1;
    document.getElementById("radioParkTypeBtn").onchange = currentlySelectedSearchType2;


}

// Dropdown fill (working)--------------------------------------------------------------------------------------
function fillStateDropdown() {
    const stateSelect = document.getElementById("stateSlct");
    let selectStateOpt = document.createElement("option");

    selectStateOpt.value = "";
    selectStateOpt.textContent = "Select a State...";
    stateSelect.appendChild(selectStateOpt);

    let locationLength = locationValues.length;
    for (let i = 0; i < locationLength; i++) {
        let Opt1 = document.createElement("option");
        Opt1.value = locationValues[i];
        Opt1.textContent = locationValues[i];

        stateSelect.appendChild(Opt1);
    }
}

function fillParkTypDropdown() {
    const parkType = document.getElementById("parkTyp");
    let selectParkTyp = document.createElement("option");

    selectParkTyp.value = "";
    selectParkTyp.textContent = "Select Park Type..."
    parkType.appendChild(selectParkTyp);

    let typeLength = ParkTypes.length;
    for (let i = 0; i < typeLength; i++) {
        let Opt2 = document.createElement("option");
        Opt2.value = ParkTypes[i];
        Opt2.textContent = ParkTypes[i];

        parkType.appendChild(Opt2);
    }
}

// Radio buttons (working...)----------------------------------------------------------------------------------------

function selectLocationOptionHide() {
    //document.querySelector("#stateSlct").innerHTML = "";
    document.getElementById("stateContainer").style.display = "none";
}

function selectLocationOptionShow() {
    document.getElementById("stateContainer").style.display = "block";
}

function selectParkTypeOptionHide() {
    document.getElementById("parkTypContainer").style.display = "none";
}

function selectParkTypeOptionShow() {
    document.getElementById("parkTypContainer").style.display = "block";
}

function currentlySelectedSearchType1() {
    let radioLocation = document.getElementById("radioLocationBtn");
    if (radioLocation == radioLocation) {
        selectLocationOptionShow();
        selectParkTypeOptionHide();
    }
}

function currentlySelectedSearchType2() {
    let radioParkType = document.getElementById("radioParkTypeBtn");
    if (radioParkType == radioParkType) {
        selectParkTypeOptionShow();
        selectLocationOptionHide();
    }
}



// Cards ------------------------------------------------------------------------------------------------------

function showAllResults(parks) {
    //first clear out anything already in resultsContainer so that it is empty.

    //next loop thorugh parks, and call getDivCardForNationalPark to get a div
    //that represents that park.

    //next add the result of getDivCardForNationalPark to the resultsContainer so that
    //the user can
}

function getDivCardForNationalPark(park) {
    let outerDiv = document.createElement("div");
    outerDiv.className = "col-4";
    //----------------------------------------------
    let cardDiv1 = document.createElement("div");
    cardDiv1.className = "card";
    cardDiv1.style.width = "18rem";


    //----------------------------------------------
    let cardDiv2 = document.createElement("div");
    cardDiv2.className = "card-body";


    //----------------------------------------------
    let h5 = document.createElement("h5");
    h5.className = "card-title";


    //----------------------------------------------
    let p = document.createElement("p");
    p.className = "card-text";


    //----------------------------------------------
    let a = document.createElement("a");
    a.attributes = "href";

    // appending children
    outerDiv.appendChild(cardDiv1);
    cardDiv1.appendChild(cardDiv2);
    cardDiv2.appendChild(h5);
    cardDiv2.appendChild(p);
    cardDiv2.appendChild(a);
}

/* function whenLocationSelected() { // figuring out which is the selected option, hide / show appropriate areas
    let selected = currentlySelectedSearchType();
    if (current == "location") {
        selectParkTypeOptionHide();
    }
    else if (current == "parktype") {
        selectLocationOptionHide();
    }
}
 */