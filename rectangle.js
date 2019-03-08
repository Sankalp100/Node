module.exports = (x,y,callback) => {
    if ( x <= 0 || y <= 0){
        setTimeout(() => 
            callback(new Error("Rectangle dimension should be greater then zero: l = " + x + "and b = " + y),
            null) , 
        2000 );
    }
    else {
        setTimeout(() => 
        callback(null,
        {
            perameter : () => (2*(x+y)),
            area : () => (x*y)
        }) , 
        2000 );
    }
}



