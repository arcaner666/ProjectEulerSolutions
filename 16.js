/*
Power digit sum
 
Problem 16

2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000?
*/

// Solution 16
var sayi = String(BigInt(Math.pow(2, 1000)));
var toplam = 0;
sayi = sayi.split("");
for (rakam of sayi){
    toplam += parseInt(rakam);
}
console.log(toplam);