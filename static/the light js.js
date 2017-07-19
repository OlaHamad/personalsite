// inline comment example 



/* block comment example 

    this is many lines

   / hello

*/



// variables must be declared with var the first time they are declared



// lists -> python : arrays -> js

// all the colors are strings

 var colorOptions = ['red', 'orange', 'lightyellow', 'green', 'blue', 'indigo', 'purple'];

    

// functions are delcared as variables as well, but use the function() delcaration. inside the () go any parameters to the function

// : -> python : {} -> js

var randomColor = function() {

    // console.log -> js : print -> python

    console.log(colorOptions);

    var color = colorOptions[Math.floor(Math.random()*colorOptions.length)];

    console.log(color);

    document.body.style.backgroundColor = color;

}



var timesOn = 0;

var turnOn = function() {

    

    var currentImage = document.getElementById("myImage").src;

    var wasAlreadyOn = (currentImage === "https://www.w3schools.com/js/pic_bulbon.gif");

    if (!wasAlreadyOn) {

        console.log('turning on the light');

        document.getElementById("myImage").src = "https://www.w3schools.com/js/pic_bulbon.gif";

        timesOn += 1;       

        document.getElementById("timesOnLabel").innerHTML = "Times On: " + timesOn;

    } else {

        console.log('light was already on');

    }

}





var turnOff = function() {

    console.log('turning off the light');

    document.getElementById('myImage').src='https://www.w3schools.com/js/pic_bulboff.gif'

}

