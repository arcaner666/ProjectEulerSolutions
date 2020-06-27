/*
Double-base palindromes
 
Problem 36

The decimal number, 585 = 1001001001(2) (binary), is palindromic in both bases.

Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

(Please note that the palindromic number, in either base, may not include leading zeros.)
*/

//Solution 36

const limit = 1000000;
var sayi = 0;
var toplam = 0;

function sayiPalindromikMi(sayi,taban){
    let dizi1 = sayi.toString(taban).split("");
    let dizi2 = dizi1.slice().reverse();
    let sayac = 0;

    for (let i = 0; i < dizi1.length; i++) {
        if (dizi1[i] == dizi2[i]) sayac++;
    }

    if(sayac == dizi1.length){
        sayac = 0;
        return sayi;
    }else{
        sayac = 0;
    }
}

for (let i = 0; i < limit; i++) {
    if (sayiPalindromikMi(i,10) && sayiPalindromikMi(i,2)){
        toplam += i; 
    }
}

console.log(toplam);