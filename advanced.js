/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

england = ["Big Ben","Buckingham Palace","Albert Docks"];
unitedKingdom[1].touristAttractions = england;
console.log(unitedKingdom);



/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = "Cardiff";
unitedKingdom[2].capital = wales

console.log(unitedKingdom);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom[3]);

console.log(northernIrelandKeys);



/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */

for(i = 3 ; i>=1 ; i--){
    if(unitedKingdom[0].population>unitedKingdom[i].population){
        console.log(unitedKingdom[0].name + " has a bigger population than " + unitedKingdom[i].name);
    }else console.log(unitedKingdom[0].name + " does not have a population greater than " + unitedKingdom[i].name);
}

if(unitedKingdom[0].population<unitedKingdom[1].population && unitedKingdom[0].population>unitedKingdom[2].population && unitedKingdom[0].population>unitedKingdom[3].population){
    console.log(unitedKingdom[0].name + " has the 2nd largest population");
}else console.log("error");