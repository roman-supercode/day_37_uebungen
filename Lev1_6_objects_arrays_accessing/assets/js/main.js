// Füge zu dem Objekt Deine Lieblingsmusik hinzu.
// Greife mit console.log auf die Werte dieses Objekts zu:
// "The Beatles"
// Von Pink Floyd: "Download"
// Von Pink Floyd: true;
// 1971 und 1983
// Von Metallica: "MC"
// Von Metallica das Wort: Ride
// Von Led Zeppelin das Wort: IV:
// Von Pink Floyd das Wort: Floyd;



let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill 'Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];

myMusic.push({
    artist: "Amyl and The Sniffers",
    title: "Comfort To Me",
    release_year: 2021,
    medium: ["LP", "CD", "Download", "Stream"],
    gold: true
});

console.log(myMusic[0].artist);
console.log(myMusic[1].medium[3]);
console.log(myMusic[1].gold);
console.log(myMusic[2].release_year);
console.log(myMusic[3].release_year);
console.log(myMusic[3].medium[2]);

// split = teilt die Zeichenfolge an einem Leerzeichen
// slice = gibt ein neues Array (startIndex, endIndex(nicht unbegriffen))
// join = wandelt das Array in ein String ("" = ohne Trennzeichen)
console.log(myMusic[3].title.split(" ").slice(4, 5).join(""));
console.log(myMusic[2].title.split(" ").slice(2, 3).join(""));
console.log(myMusic[1].artist.split(" ").slice(1, 2).join(""));



