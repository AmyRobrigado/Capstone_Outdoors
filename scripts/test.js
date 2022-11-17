"use strict"

"use strict";


window.onload = function() {
    // Populate Options
    fillStateDropdown();
    fillParkTypDropdown();

    // Hide or show select fields
    //selectLocationOptionHide();
    selectParkTypeOptionHide();

    // onchange event for location
    document.getElementById("radioLocationBtn").onchange = currentlySelectedSearchType;
    /* document.getElementById("stateSlct").onchange = nationalStateSelect(); */ 
}

// Dropdown fill
function fillStateDropdown() { // State Dropdown Working - loading options 
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

function fillParkTypDropdown() {  // Park Type Dropdown Working - Loading options
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

// Selecting the location radio button 
function selectLocationOptionHide() { // To hide the location field - working
    //document.querySelector("#stateSlct").innerHTML = "";
    document.getElementById("stateContainer").style.display = "none";
}

// Selecting the location radio button 
function selectLocationOptionShow() { // To hide the location field - working
    document.getElementById("parkTypContainer").style.display = "block";
}



function selectParkTypeOptionHide() { // To hide the parktype field 
    document.querySelector("#parkTyp").innerHTML = "";
}


function currentlySelectedSearchType() { 
    let radioLocation = document.getElementById("radioLocationBtn");
    //let radioParkType = document.getElementById("parkTyp");

    if (radioLocation == radioLocation){
        selectParkTypeOptionHide();
    }
}

function showAllResults(parks){
    //first clear out anything already in resultsContainer so that it is empty.
    
    //next loop thorugh parks, and call getDivCardForNationalPark to get a div
    //that represents that park.

    //next add the result of getDivCardForNationalPark to the resultsContainer so that
    //the user can
}

function getDivCardForNationalPark(park){
    let outerDiv = document.createElement("div");
    outerDiv.className = "col-4";

    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.width = "18rem";

    outerDiv.appendChild(cardDiv);


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










//create functions: selectlocationhide, selectlocationshow, selectparktypehide, selectparktypeshow
// create functions: filterparksbylocation, filterparksbyparktype
//create function: searchtypeonchange *place both onchanges onto the same function*
//create radio buttons for search by location
//create search results card


