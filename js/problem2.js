var x = 2,
    fns = [];

(fns = function() {
    var x = 5;
    for (var i = 0; i < x; i++) {
        return i
    }
    console.log(fns)
})();

console.log(fns[x * 2])
    // DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());