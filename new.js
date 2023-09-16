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
   

   // 

   myObj = {
    favoriteNumber: 42,
    isDeveloper: true,
    firstName: "Kyle"
};

function twenty() { return 20; }

myObj = {
    favoriteNumber: (twenty() + 1) * 2,
};

anotherObj = {
    "greet-4"() { console.log("Hello, audience!"); },

    // concise computed name
    [ "gr" + "eet 5" ]() { console.log("Hello, audience!"); },

    // concise computed generator name
    *[ "ok, greet 6".toUpperCase() ]() { yield "Hello, audience!"; }
};
