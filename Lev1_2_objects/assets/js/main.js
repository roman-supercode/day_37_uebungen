// Erstelle ein Objekt und speichere es als Variable person
// Deklariere die Eigenschaft name mit dem Wert deines Namens,
// Deklariere die Eigenschaft alter mit dem Wert deines Alters,
// Deklariere die Methode (Funktion) sagNameAlter im Objekt
// Nutze den Befehl alert() im Funktionskörper um name, alter anzuzeigen.
// Gib in der Konsole name und alter aus.
// Rufe die Funktion sagNameAlter aus dem Objekt auf.

const person = {
    name: "Roman",
    alter: 29,

    sagNameAlter() {
        alert(this.name + " " + this.alter);
    }
};

console.log(person.name);
console.log(person.alter);
person.sagNameAlter();