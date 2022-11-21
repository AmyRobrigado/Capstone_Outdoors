"use strict";

window.onload = function(){
    // Populate Options
    fillMountainDropdown();

    // onchange events 
    document.getElementById("mountainSlct").onchange = selectMountainCards;
}

// Dropdown Fill - working 
function fillMountainDropdown(){
    const mountainSelect = document.getElementById("mountainSlct");
    let selectMntOpt = document.createElement("option");

    selectMntOpt.value = "";
    selectMntOpt.textContent = "Select a Mountain..."
        mountainSelect.appendChild(selectMntOpt);

    let mountainLength = mountainsArray.length;
    for (let i = 0; i < mountainLength; i++) {
        let Mnt = document.createElement("option");
        Mnt.value = mountainsArray[i];
        Mnt.textContent = mountainsArray[i].name;

       mountainSelect.appendChild(Mnt); 
}
}

function selectMountainCards() {
    const resultsContainer = document.getElementById("resultsContainer")
    resultsContainer.innerHTML = "";

    let mountainOptionListChoice = document.getElementById("mountainSlct").value


    for (let i = 0; i < mountainsArray.length; i++) {
        if (mountainsArray[i].name == mountainOptionListChoice) {

            let cardSize = document.createElement("div");
            cardSize.className = "card text-center";
            cardSize.innerHTML = "hey";
            resultsContainer.appendChild(cardSize);
        }
    }
}

/* function selectMountainCards() { // in-progress 
const resultsContainer = document.getElementById("resultsContainer");

resultsContainer.innerHTML = "";

let selectMountain = document.getElementById("mountainSlct").value;

for (let i = 0; i < mountainsArray.length; i++) { // 
    if (mountainsArray[i].name == selectMountain) {
        let outerDiv = document.createElement("div");
        outerDiv.className = "col-4";
        outerDiv.innerHTML = "hello";

        resultsContainer.appendChild(outerDiv);
        //--------------------------------------------------------
    }
}
} */






