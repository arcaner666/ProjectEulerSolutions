/*
Powerful digit sum

Problem 56

A googol (10^100) is a massive number: one followed by one-hundred zeros; 100^100 is almost unimaginably large: 
one followed by two-hundred zeros. Despite their size, the sum of the digits in each number is only 1.

Considering natural numbers of the form, a^b, where a, b < 100, what is the maximum digital sum?
*/

// Solution 56
var a = 0;
var b = 0;
var enBuyukToplam = 0n;

for (let i = 100; i > 0; i--) {
    for (let j = 100; j > 0; j--) {
        let dizi = BigInt(Math.pow(i, j)).toString().split("");
        let toplam = 0n;
        
        for (let k = 0; k < dizi.length; k++) {
            toplam += BigInt(dizi[k]);
        }

        if (toplam > enBuyukToplam){
            a = i;
            b = j;
            enBuyukToplam = toplam;
        }

        toplam = 0n;
    }
}

console.log(a + "^" + b + " Rakamları Toplamı: " + enBuyukToplam);
// Sonuç yanlış çıkıyor. Bulduğum Sonuç: 88 ^ 99 = (978)