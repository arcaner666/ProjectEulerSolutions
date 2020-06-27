/*
Concealed Square
 
Problem 206

Find the unique positive integer whose square has the form 1_2_3_4_5_6_7_8_9_0,
where each “_” is a single digit.
*/

// Solution 206

var ozelSayi = 0n;
for (let i = 100000000; i < 999999999; i++) {
    let sayi = BigInt(Math.pow(i, 2)).toString();
    if (sayi.slice(0,1) == 1 && sayi.slice(2,3) == 2 && sayi.slice(4,5) == 3 && sayi.slice(6,7) == 4 && sayi.slice(8,9) == 5 && sayi.slice(10,11) == 6 && sayi.slice(12,13) == 7 && sayi.slice(14,15) == 8 && sayi.slice(16,17) == 9 && sayi.slice(18,19) == 0){
        ozelSayi = BigInt(Math.pow(i, 2));
        break;
    }
}
console.log(ozelSayi);

/*
var sayi1 = 1020304050607080900n;
var sayi = sayi1.toString();
console.log(sayi.slice(0,1) + sayi.slice(2,3) + sayi.slice(4,5) + sayi.slice(6,7) + sayi.slice(8,9) + sayi.slice(10,11) + sayi.slice(12,13) + sayi.slice(14,15) + sayi.slice(16,17) + sayi.slice(18,19));
*/
/*
for (let i = 1; i < 100000; i++) {
    let sayi = BigInt(Math.pow(i, 2)).toString();
    console.log(sayi);
}
*/
//console.log(BigInt(Math.pow(100000000, 2)));
//console.log(BigInt(Math.pow(999999999, 2)));