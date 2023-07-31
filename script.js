const food = require("./data.json")

//list of all food items

food.forEach(item => console.log(item.foodname));
console.log("/n");


//list of all vegetable items

const vegetable = food.filter(item => item.category == "Vegetable");
vegetable.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all fruit items

const fruit = food.filter(item => item.category == "Fruit");
fruit.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");

//list of all protein items

const protein = food.filter(item => item.category == "Protein");
protein.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all nuts items

const nuts = food.filter(item => item.category == "Nuts");
nuts.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all grain items

const grain = food.filter(item => item.category == "Grain");
grain.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all dairy items

const dairy = food.filter(item => item.category == "Dairy");
dairy.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all items with calorie less than 100

const cal = food.filter(item => item.calorie < 100);
cal.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//list of all items with calorie above than 100

const cal1 = food.filter(item => item.calorie > 100);
cal1.forEach(item => console.log(item.foodname, ":" , item.category));
console.log("/n");


//Sorted calorie

const HighToLow = food.sort((item1,item2) => item2.proteins - item1.proteins);
HighToLow.forEach(item => console.log(item.foodname, ":" , item.proteins));
console.log("/n");


//Sorted Cab

const LowToHigh = food.sort((item1,item2) => item1.cab - item2.cab);
LowToHigh.forEach(item => console.log(item.foodname, ":" , item.cab));
console.log("/n");