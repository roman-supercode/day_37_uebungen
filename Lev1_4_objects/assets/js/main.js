// Greife auf die Werte dieses Objekts zu:
// "Nala"
// "Droopy"
// und lasse dir einmal alle Hundenamen anzeigen
// Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.


let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
console.log(unsereHaustiere[1].names.splice(0, 3, "Balu", "Snoopy"));
console.log(unsereHaustiere[1].names);


