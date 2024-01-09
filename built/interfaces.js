"use strict";
let apiData = {
    id: 2,
    page: 1,
    data: [
        {
            image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
            good_with_children: 5,
            good_with_other_dogs: 5,
            shedding: 4,
            grooming: 2,
            drooling: 2,
            coat_length: 1,
            good_with_strangers: 5,
            playfulness: 4,
            protectiveness: 3,
            trainability: 5,
            energy: 3,
            barking: 1,
            name: "Golden Retriever",
        },
    ],
};
let dogObject = {
    image_link: "https://api-ninjas.com/images/dogs/golden_retriever.jpg",
    good_with_children: 5,
    good_with_other_dogs: 5,
    shedding: 4,
    grooming: 2,
    drooling: 2,
    coat_length: 1,
    good_with_strangers: 5,
    playfulness: 4,
    protectiveness: 3,
    trainability: 5,
    energy: 3,
    barking: 1,
    name: "Golden Retriever",
};
// At bruge et interface i en funktion
const isDogGoodToChildren = (dog) => {
    if (dog.good_with_children > 3) {
        return "its good with children";
    }
};
// Her kaldes isDogGoodToChildren() funktionen med vores dogObject
console.log(isDogGoodToChildren(dogObject));
