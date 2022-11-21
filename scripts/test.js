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

function getDivCardForNationalPark() {
    /* let mainContainer = document.getElementById("container");    
    let mainDiv = document.getElementById("resultsContainer");



    let outerDiv = document.createElement("div");
    outerDiv.className = "col-4";

    mainContainer.appendChild(mainDiv);
    mainDiv.appendChild(outerDiv);
    ;  */
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
    let p1 = document.createElement("p");
    p.className = "card-text";

    //----------------------------------------------
    let p2 = document.createElement("p");
    p.className = "card-text";

    //----------------------------------------------
    let p3 = document.createElement("p");
    p.className = "card-text";


    //----------------------------------------------
    let a = document.createElement("a");
    a.href = "https://www.nps.gov/acad/index.html";
    a.classList = "btn btn-primary";
    

    // appending children
    document.body.appendChild(outerDiv);
   /*  outerDiv.appendChild(cardDiv1);
    cardDiv1.appendChild(cardDiv2);
    cardDiv2.appendChild(h5);
    cardDiv2.appendChild(p1);
    cardDiv2.appendChild(p2);
    cardDiv2.appendChild(p3);
    cardDiv2.appendChild(a); */
}
function locationSelectCards() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    function locationSelectCards() {
        const resultsContainer = document.getElementById("resultsContainer");
        resultsContainer.innerHTML = "";
    
        let selectThisState = document.getElementById("stateSlct").value;
    
        for (let i = 0; i < locationValues.length; i++) {
            if (locationValues[i] == selectThisState) {
                let outerDiv = document.createElement("div");
                outerDiv.className = "col-4";
    
                resultsContainer.appendChild(outerDiv);
                //--------------------------------------------------------
                let cardDiv1 = document.createElement("div");
                cardDiv1.className = "card";
                cardDiv1.style.width = "18rem";
    
                outerDiv.appendChild(cardDiv1);
                //--------------------------------------------------------
                let cardDiv2 = document.createElement("div");
                cardDiv2.className = "card-body";
    
                cardDiv1.appendChild(cardDiv2);
                //--------------------------------------------------------
                let h5 = document.createElement("h5");
                h5.className = "card-title";
                h5.innerHTML = selectThisState;
    
                cardDiv2.appendChild(h5);
                //----------------------------------------------
                let p1 = document.createElement("p");
                p1.className = "card-text";
                p1.innerHTML = "test";
    
                cardDiv2.appendChild(p1);
                //----------------------------------------------
                let p2 = document.createElement("p");
                p2.className = "card-text";
                p2.innerHTML = "test";
    
                cardDiv2.appendChild(p2);
                //----------------------------------------------
                let p3 = document.createElement("p");
                p3.className = "card-text";
                p3.innerHTML = "test";
    
                cardDiv2.appendChild(p3);
                //----------------------------------------------
                let a = document.createElement("a");
                a.className = "btn btn-primary";
                a.innerText = "Visit Website";
                a.href = "https://www.nps.gov/acad/index.htm";
    
    
                cardDiv2.appendChild(a);
            }
        }
    }

    for (let i = 0; i < locationValues.length; i++) {
        if (locationValues[i] == selectThisState) {
            let outerDiv = document.createElement("div");
            outerDiv.className = "col-4";

            resultsContainer.appendChild(outerDiv);
            //--------------------------------------------------------
            let cardDiv1 = document.createElement("div");
            cardDiv1.className = "card";
            cardDiv1.style.width = "18rem";

            outerDiv.appendChild(cardDiv1);
            //--------------------------------------------------------
            let cardDiv2 = document.createElement("div");
            cardDiv2.className = "card-body";

            cardDiv1.appendChild(cardDiv2);
            //--------------------------------------------------------
            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.innerHTML = selectThisState;

            cardDiv2.appendChild(h5);
            //----------------------------------------------
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerHTML = "test";

            cardDiv2.appendChild(p1);
            //----------------------------------------------
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerHTML = "test";

            cardDiv2.appendChild(p2);
            //----------------------------------------------
            let p3 = document.createElement("p");
            p3.className = "card-text";
            p3.innerHTML = "test";

            cardDiv2.appendChild(p3);
            //----------------------------------------------
            let a = document.createElement("a");
            a.className = "btn btn-primary";
            a.innerText = "Visit Website";
            a.href = "https://www.nps.gov/acad/index.htm";


            cardDiv2.appendChild(a);
        }
    }
}

function parkTypeCards() {
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";

    let selectThisParkType = document.getElementById("parkTyp").value;

    for (let i = 0; i < ParkTypes.length; i++) {
        if (ParkTypes[i] == selectThisParkType) {
            let outerDiv = document.createElement("div");
            outerDiv.className = "col-4";

            resultsContainer.appendChild(outerDiv);
            //--------------------------------------------------------
            let cardDiv1 = document.createElement("div");
            cardDiv1.className = "card";
            cardDiv1.style.width = "18rem";

            outerDiv.appendChild(cardDiv1);
            //--------------------------------------------------------
            let cardDiv2 = document.createElement("div");
            cardDiv2.className = "card-body";

            cardDiv1.appendChild(cardDiv2);
            //--------------------------------------------------------
            let h5 = document.createElement("h5");
            h5.className = "card-title";
            h5.innerHTML = selectThisParkType;

            cardDiv2.appendChild(h5);
            //----------------------------------------------
            let p1 = document.createElement("p");
            p1.className = "card-text";
            p1.innerHTML = "test";

            cardDiv2.appendChild(p1);
            //----------------------------------------------
            let p2 = document.createElement("p");
            p2.className = "card-text";
            p2.innerHTML = "test";

            cardDiv2.appendChild(p2);
            //----------------------------------------------
            let p3 = document.createElement("p");
            p3.className = "card-text";
            p3.innerHTML = "test";

            cardDiv2.appendChild(p3);
            //----------------------------------------------
            let a = document.createElement("a");
            a.className = "btn btn-primary";
            a.innerText = "Visit Website";
            a.href = "https://www.nps.gov/acad/index.htm";


            cardDiv2.appendChild(a);
        }
    }
}

function returnLocationName(parks) {
    for (let i = 0; nationalParks.length; i++){
     return parks[i].LocationName;
    }
 }



//function showAllResults(parks) {
//first clear out anything already in resultsContainer so that it is empty.

//next loop thorugh parks, and call getDivCardForNationalPark to get a div
//that represents that park.

//next add the result of getDivCardForNationalPark to the resultsContainer so that
//the user can
//

//-------------------------------------------------------------------------------

for (let i = 0; i < mountainsArray.length; i++){
    if (mountainsArray[i].name == selectMountain){
        //div 1------------------------------------
        let div1 = document.createElement("div");
        div1.className = "card text-center mt-3";

        resultsContainer.appendChild(div1);
        //div 2------------------------------------
        let div2 = document.createElement("div");
        div2.className = "card-header";

        div1.appendChild(div2);
        //h5---------------------------------------
        let h5 = document.createElement("h5");
        h5.className = "card-title"
        //h5.innerHTML = mountainsArray[i].name;

        div2.appendChild(h5);
        //div 3------------------------------------
        let div3 = document.createElement("div");
        div3.className = "card-body";

        div1.appendChild(div3);
        //p-tags-----------------------------------
         let p1 = document.createElement("p");
         p1.className = "card-text";
         // p1.innerHTML = elevation;

         div3.appendChild(p1);
         //----------------------------------------
         let p2 = document.createElement("p");
         p2.className = "card-text";
         //p2.innerHTML = coordinates;

         div3.appendChild(p2);
         //----------------------------------------
         let p3 = document.createElement("p");
         p3.className = "card-text";
         //p3.innerHTML = description;

         div3.appendChild(p3);
        //-----------------------------------------
        let div4 = document.createElement("div");
        div4.className = "card-footer text-muted";
        //div4.innerHTML = "";
        
        div1.appendChild(div4);
    }
}

