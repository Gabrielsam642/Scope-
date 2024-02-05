// // .root scope

// var fun = 5;

// function funfuncton() {
//     // childscope
//     var fun = "helloo";
//     console.log(1, fun);
// }

// function funerfuncton() {
//     // childscope
//     var fun = "how are doing";
//     console.log(2, fun);
// }

// function funestfuncton() {
//     // childscope
//     var fun = "how are doing";
//     console.log(3, fun);
// }

// alert("fun");
// funfuncton()
// funerfuncton()
// funestfuncton()

function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}


var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}


//#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

//#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);