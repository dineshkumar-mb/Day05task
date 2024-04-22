let myresume = {
    name: "dineshkumar",
    place:"salem",
    age:29,
    address:{
     state:"tamilnadu",
    district:"salem",
    country:"india",
    },
    skill:
        ["html","css,","bootstrap","php","sql"],
        education:{
            school: "salem",
            college:"namakkal",
            degree: "bachelor of engineering",
            stream:"mechanical",
            yearOfPassedOut:2015,
        }
    }
    
    for (let key in myresume){
        console.log(key , myresume[key]); // using for in loop
    }
    
    // for(let key of Object .keys(myresume)){
    //     console.log (key,myresume[key]);    // using for of loop
    // }
    
    // for (let key in myresume) {
    //     if (myresume.hasOwnProperty(key)) {                               //using for loop
    //         console.log(`Property ${key} has value: ${myresume[key]}`);
    //     }
    // }
    