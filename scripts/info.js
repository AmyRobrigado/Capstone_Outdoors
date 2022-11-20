"use strict";

window.onload = function(){
    // Populate Options
    fillMountainDropdown();

    // onchage events 
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

function selectMountainCards() { // in-progress 
const resultsContainer = document.getElementById("resultsContainer");

resultsContainer.innerHTML = "";

let selectMountain = document.getElementById("mountainSlct").value;

for (let i = 0; mountainsArray.length; i++){
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
        h5.innerHTML = mountainsArray[i].name;

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
}






