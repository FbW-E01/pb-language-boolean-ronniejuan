// # True or False? 


// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 


console.log("3. ","3" == 3);
console.log("3. ","3" === 3);


// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 

// yes it is ,   with 3 === outputs false.


// * Which comparison operator should we generally use? Why?

// why should use === not sure  but Joel Reomend it.



// * What would happen if we were to use `=`?

//we use it just for assign a value 





// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

let firstVa = true,
    secondVa = false,
    access = secondVa ? "HTML" : "CSS";

console.log( access + secondVa );  

// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

// ```javascript
// let firstName, givenName;

// firstName = 'Stacey';
// let name = givenName || firstName || 'John'; 

// console.log(name);
// ```


//it will print Stacey 
 
