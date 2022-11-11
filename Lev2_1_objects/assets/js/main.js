// Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.

let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

// Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
const newNameArray = [];
edelMetallPreise.forEach((key) => {
    // console.log(key.name);
    newNameArray.push(key.name);
});

console.log(newNameArray);

// Verwende map() und greife auf alle name zu.
const nameMap = edelMetallPreise.map((key) => {
    return key.name;
});

// console.log(nameMap);


// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
const newPreiseGramEuroArray = [];
edelMetallPreise.forEach((key) => {
    // console.log(key.preiseGramEuro);
    newPreiseGramEuroArray.push(key.preiseGramEuro);
});
console.log(newPreiseGramEuroArray);

// Verwende map() und greife auf alle preiseGramEuro zu.
const preiseGramEuroMap = edelMetallPreise.map((key) => {
    return key.preiseGramEuro;
});
// console.log(preiseGramEuroMap);


// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
const newVeraenderungArray = [];
edelMetallPreise.forEach((key) => {
    // console.log(key.veraenderung);
    newVeraenderungArray.push(key.veraenderung);
});
console.log(newVeraenderungArray);

// Verwende map() und greife auf alle veraenderung zu.
const veraenderungMap = edelMetallPreise.map((key) => {
    return key.veraenderung;
});
// console.log(veraenderungMap);


// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu 
const checkedPrice = edelMetallPreise.filter(checkPrice);

function checkPrice(key) {
    return key.preiseGramEuro > 50;
}

console.log(checkedPrice);


// Gib alles als Tabelle in deinem HTML-Dokument aus.

// Erstelle eine Tabelle
const newTable = document.createElement("TABLE");
document.body.appendChild(newTable);

let tableTRforTH = document.createElement("tr");
newTable.appendChild(tableTRforTH);

let tableTH1 = document.createElement("th");
tableTRforTH.appendChild(tableTH1);
tableTH1.textContent = "Name";

let tableTH2 = document.createElement("th");
tableTRforTH.appendChild(tableTH2);
tableTH2.textContent = "PreisProGramm";

let tableTH3 = document.createElement("th");
tableTRforTH.appendChild(tableTH3);
tableTH3.textContent = "Veränderung";


edelMetallPreise.forEach((item) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.textContent = item.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = item.preiseGramEuro;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = item.veraenderung;
    tr.appendChild(td3);

    newTable.appendChild(tr);
});
