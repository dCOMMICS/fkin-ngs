var message = "hello";
var i = 0, j = 0, k = 0;

// 

for(var i = 0; i < 10; i++) console.log(i);
for(var i = 0, j=10; i < 10; i++,j--) console.log(i*j);

// 
function f() {
    var scope; // Local variable is declared at the top of the function
    console.log(scope); // It exists here, but still has "undefined" value
    scope = "local"; // Now we initialize it and give it a value
    console.log(scope); // And here it has the value we expect
   }
   