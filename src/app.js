//Progression 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable
const moreAboutHome =(address, distanceFromTown, hasNeighbours) => {
    let addressData = typeof address;
    let distanceFromTownData = typeof distanceFromTown;
    let hasNeighboursData = typeof hasNeighbours
    return addressData + distanceFromTownData + hasNeighboursData;
}

//Progression 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean
const moreAboutKaren = (parents, noOfSiblings, isNuclearFamily) => {
    let parentsData = typeof parents;
    let noOfSiblingsData = typeof noOfSiblings;
    let isNuclearFamilysData = typeof isNuclearFamily

    return parentsData + noOfSiblingsData + isNuclearFamilysData === "stringnumberboolean";
}

//Progression 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value
const doesFriendExist = (parents, noOfSiblings) => {
    return (typeof parents === NaN || parents == '' ) ? NaN : parents;
}

//Progression 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?
const sweetTooth =(totalNoOfSweets, sweetsConsumedByKaren, sweetsConsumedInNMeters, metersToTravel) => {
    let totalNoOfSweetsData = typeof totalNoOfSweets;
    let sweetsConsumedByKarenData = typeof sweetsConsumedByKaren;
    let sweetsConsumedInNMetersData = typeof sweetsConsumedInNMeters;
    let metersToTravelData = typeof metersToTravel;
    if (totalNoOfSweetsData+ sweetsConsumedByKarenData+ sweetsConsumedInNMetersData+ metersToTravelData !== "numbernumbernumbernumber"  || totalNoOfSweetsData+ sweetsConsumedByKarenData+ sweetsConsumedInNMetersData+ metersToTravelData === null) 
    { return "No sweets for Karen's friend"; }
    else if (totalNoOfSweetsData+ sweetsConsumedByKarenData+ sweetsConsumedInNMetersData+ metersToTravelData === 0) { return 0; }
    return sweetsConsumedByKaren + ((totalNoOfSweets- (metersToTravel + sweetsConsumedByKaren)) /2 );
  
}

//Progression 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.
const convertToCelsius = (fahrenheit) => {
    let fahrenheitData = typeof fahrenheit;
    return (5/9) * (fahrenheit -32);
}


//Progression 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room
//Given a value, return which of these above actions Lily would take
const aDifficultChoice = (choice) => {
    let choiceData = typeof choice;
    "1. Take her daughter to a doctor"
    "2. Talk to her husband about it"
    "3. Counsel her daughter herself"
    "4. Lock her daughter in her room"
    switch (
}


//Progression 7:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy
