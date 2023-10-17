// NO 1 (membuat object dengan properties)

const Restaurant = {
    name: "Restaurant Kopi nako",
    city: "surabaya",
    favoritedrink: "chocolate",
    favoritefood: "noodles",
    isVegan: "true",
};
console.table(Restaurant);

// NO 1 mengakses property object
const Restaurant1 = {
    name1: "Restaurant kopi hideng ",
    city1: "Sukabumi",
    favoritedrink1: "Avocado juice",
    favoritefood1: "kimci",
    isVegan1: "true",
};
console.info(`Name: ${Restaurant1.name1}`)
console.info(`city: ${Restaurant1.city1}`)
console.info(`favorite drink : ${Restaurant1.favoritedrink1}`)
console.info(`favorite food : ${Restaurant1.favoritefood1}`)
console.info(`isvegan : ${Restaurant1.isVegan1}`)

// N0 2 variabel nama restaurant yang bertipe array dengan ketentuan sama diatas .
const restaurant = ["nama restaurant :Kopi nako", "city : Sukabumi" , "favorite Drink : Ice coffee milk" , "favorite Food : Dimsum", "isVegan : true"]
const[firstName, secondCity, thirdFavoriteDrink, fourthFavoritefood, fiveisVegan] = restaurant;
console.log(firstName);
console.log(secondCity);
console.log(thirdFavoriteDrink);
console.log(fourthFavoritefood);
console.log(fiveisVegan);


//NO 2 
const arrayrestaurantt = []
arrayrestaurantt [0]= "coffe imut"
arrayrestaurantt [1]= "City = Bogor"
arrayrestaurantt [2]= "favorite Drink = americano"
arrayrestaurantt [3]= "favorite Food = spagety"
arrayrestaurantt [4]= "isVegan = true"
console.log(arrayrestaurantt)