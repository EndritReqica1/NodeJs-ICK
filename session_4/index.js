// // // // let fruit1 = "Strawberry";
// // // // let fruit3 = "Apple";
// // // // let fruit2 = "Orange";
// // // // let fruit4 = "Peach";


// // const fruits = ["Strawberry", "Apple", "Orange","Peach"];

// // // console.log(fruits[2]);


// // // //metdoat e arrayt
// // // console.log(fruits.length);
// // // console.log(fruits[fruits.length -1]);

// // // fruits.push("BAnana");
// // // console.log(fruits);

// // // fruits.unshift("Pineapple");
// // // console.log(fruits);

// // // fruits.pop();
// // // console.log(fruits);

// // // fruits.shift()
// // // console.log(fruits);


// // // console.log(fruits.includes("Lemon")); // per me shiku a ekziston ky element ne array
// // // console.log(fruits.indexOf("Orange")); // perme dit sa e ka indexin nje element


// // let Needle;

// // function findNeedle(){
// //     Array = ["Hay" ,"junk","more junk", "Needle","random junk"];

// //     if(Array.includes("Needle")){
// //         return console.log("Found the needle at: " + Array.indexOf("Needle"))
// //     }else{
// //        return console.log("Nuk ka needle!")
// //     }

// // }

// // var txt = findNeedle();

// // console.log(txt);

// // const personArr = ["Filan","Fisteku",30,"German", ["Franc",["Amerika","Shqipnia"],"England"]];

// // console.log(personArr[4][1][0])




// // const personObj = {
// //     firstName: "Filan",
// //     lastName: "Fisteku",
// //     age: 30,
// //     nationality: "German",
// //     visitedPlaces: ["Franc","England",["Paris","London"]]
// // };

// // console.log(personObj.firstName)
// // console.log(personObj.visitedPlaces[2][1])

// // //rast perdoroimi per menyren obj[]
// // function logProperty(prop){
// //     console.log(personObj[prop]);
// // }

// // logProperty("visitedPlaces");






// // const personObj = {
// //         firstName: "Filan",
// //         lastName: "Fisteku",
// //         age: 30,
// //         nationality: "German",
// //         visitedPlaces: ["Franc","England"]

// //         eat: function(){
// //             return `${this.firstName} ${this.lastName} is eating`;
// //         }
// //     }


// //     var summary = `${personObj.firstName} ${personObj.lastName} eshte ${personObj.age} vjeqar me nacionalitet ${personObj.nationality} dhe ka viztiuar keto ${personObj.visitedPlaces}`;
// //     console.log(summary);
    


// const coffeMachine = {
//     brand: "Gaggia",
//     Model: "Clasic Pro",
//     Color: "White",
    
//     makeEspresso: function(size){
//             size = size.toLowerCase(); // Data filtering
//             switch(size){
//             case "s":
//             return "Short Espresso";
//             case "m":
//             return "Medium Espresso";
//             case "l":
//             return "Large Espresso";
//             case "d":
//             return "Double Espresso";
//             default:
//             return 'Input has to be one of: "s", "m", "l", "d"'         
//         }
//     },

//     about: function(){
//         return `This is ${this.Color} ${this.brand} ${this.Model}`
//     }

// }

// console.log(coffeMachine.makeEspresso("s"));
// console.log(coffeMachine.about());

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// for(let i = 0; i < Array.length; i++){
//     console.log(Array[i]);
// }




// const numbersArr = [1,2,3,4,5,6,7,8,9,10];


// for(let i = 0; i < numbersArr.length; i++){
//     if(numbersArr[i] % 2 == 0){
//          console.log(`Numrat qift = ${numbersArr[i] + 2}`);
//     }else{
//         console.log(`Numrat tek = ${numbersArr[i] - 1}`)
//     }
// }



for(let i = 1; i <= 10; i++){

    if(i % 2 == 0){
        console.log(`${i} `)
    }

}



 






