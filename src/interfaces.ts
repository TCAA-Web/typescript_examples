// Interfaces i typescript
interface dogObjectInterface {
  image_link: string;
  good_with_children: number;
  good_with_other_dogs: number;
  shedding: number;
  grooming: number;
  drooling: number;
  coat_length: number;
  good_with_strangers: number;
  playfulness: number;
  protectiveness: number;
  trainability: number;
  energy: number;
  barking: number;
  name: string;
}

// Og her "extender" vi vores interface
// Et array af dogObjects.
interface dataAPIInterface {
  id: number;
  page: number;
  data: Array<dogObjectInterface>;
}

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
const isDogGoodToChildren = (dog: dogObjectInterface) => {
  if (dog.good_with_children > 3) {
    return "its good with children";
  }
};

// Her kaldes isDogGoodToChildren() funktionen med vores dogObject
console.log(isDogGoodToChildren(dogObject));
