

function myMultiplier(m){
    return m * 3;
};
var mul2 = myMultiplier(5);

console.log(mul2);
console.log("my second module");

module.exports = {myMultiplier};