
function myMultiplier(m){
    return m * 2;
} 
var mul = myMultiplier(4);

console.log(mul);

console.log("my first module");

module.exports = { myMultiplier };// exports the function so it can be used in other files
