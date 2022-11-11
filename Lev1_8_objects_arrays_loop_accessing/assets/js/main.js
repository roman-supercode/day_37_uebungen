// Greife mithilfe von forEach() oder map() auf Eigenschaften dieses Objekts zu.
// Schreibe Funktion für das Objekt, die in der Console folgendes ausgeben:
// name
// coop
// city
// emails


let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];



studentData.forEach((key) => {
    console.log(
        key.name,
        key.coop,
        key.address.city,
        key.emails);
});




