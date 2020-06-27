/*
Sum square difference
 
Problem 6
The sum of the squares of the first ten natural numbers is,

1^2+2^2+...+10^2=385
The square of the sum of the first ten natural numbers is,

(1+2+...+10)^2=55^2=3025
Hence the difference between the sum of the squares of the first ten natural 
numbers and the square of the sum is 3025−385=2640.

Find the difference between the sum of the squares of the first one hundred 
natural numbers and the square of the sum.
*/

// Solution 6
var toplam1 = 0;
var toplam2 = 0;
var sontoplam = 0; 
for (a = 1; a < 101; a++){
    toplam1 += Math.pow(a,2);
}
for (b = 1; b < 101; b++){
    toplam2 += b;
}
toplam2 = Math.pow(toplam2,2);
sontoplam = toplam2 - toplam1;
console.log(sontoplam);