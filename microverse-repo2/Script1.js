function minimumDistances(a) {
a = [7, 1, 3, 4, 1, 7];
var n = 6;
var d;
for (let i = 0; i < n; i++) {
    for (let j = 1; j <= i; j++) {
        if (a[i] == a[j]) {
            d = Math.abs(a[i] - a[j]);
            return Math.min(d);
        } else {
            return -1;
        }
    }
}
    
}

function main() {
    var result = minimumDistances(7, 1, 3, 4, 1, 7);
    console.log(result);
}
