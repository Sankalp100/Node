var rect = require('./rectangle');

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + "and b = " + b);

    if ( l <= 0 || b<=0){
        console.log("Rectangle dimension should be greater then zero: l = " + l + "and b = " + b);
    }
    else {
        console.log("the area of rectangle is "+ rect.area(l,b));
        console.log("The perameter of rectangle is " + rect.perameter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);