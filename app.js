const mongoose = require("mongoose");
//connecting our mongoose to local host
mongoose.connect("mongodb://127.0.0.1:27017/fruitDB", {useNewUrlParser: true, useUnifiedTopology: true})
.then(function() {
    console.log("Connected Successfully");
})
.catch(function(err) {
    console.error(err);
});

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please check ur data, name field not specified" //validation to check the name field is not null, if it is null then the following message is printed
    },
    rating: {
        type: Number,
        min: 1,
        max: 10  // validation to check the rating value to be in the range 1-10 if it is less or more than specified range then it will throw an error
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
    name: "Apple",
    rating: 6,
    review: "a good fruit"
}); 

//fruit.save();

// const Kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 8,
//     review: "excellent fruit"
// });

// const Orange = new Fruit({
//     name: "Orange",
//     rating: 5,
//     review: "too sour for me"
// });

// const Watermelon = new Fruit({
//     name: "Watermelon",
//     rating: 9,
//     review: "refreshing fruit, great for summer"
// });

//inserting more than one items into table fruits
// const fruitArray = [Kiwi, Orange, Watermelon];
// Fruit.insertMany(fruitArray).then(function () {
//     console.log("Successfully saved defult items to DB");
//   }).catch(function (err) {
//     console.log(err);
//   });

//console.log content inside the fruit table into the cmd prompt
const getDocument = async function() {
    const result = await Fruit.find();
    console.log(result);
}

getDocument();

const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const People = mongoose.model("People", personSchema);

const people = new People ({
    name: "Shivani",
    age: 24
});

// people.save();


