/*
Goldbach's other conjecture

Problem 46

It was proposed by Christian Goldbach that every odd composite number can be written as 
the sum of a prime and twice a square.

9 = 7 + 2×1^2
15 = 7 + 2×2^2
21 = 3 + 2×3^2
25 = 7 + 2×3^2
27 = 19 + 2×2^2
33 = 31 + 2×1^2

It turns out that the conjecture was false.

What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

// Solution 46

var sayi = 5777;
var kuraliSaglamayanSayi = 0;

function kuralSaglaniyorMu(sayi){
    let sonuc = "";
    for (let i = 1; i < sayi; i += 2) {
        for (let j = 1; j < sayi; j++) {
            let sayi2 = i + (2 * Math.pow(j, 2));

            if (sayi == sayi2){
                sonuc = "kural sağlandı " + sayi.toString() + " = " + i.toString() + "(2 * " + j.toString() + "^2)";
                break;
            }else{
                sonuc = "kural sağlanmıyor";
            }
        }
    }
    return sonuc;
}
console.log(kuralSaglaniyorMu(sayi));
/*
for (let i = 1; i < 5775; i += 2) {
    if (kuralSaglaniyorMu(i) === "kural sağlanmıyor"){
        kuraliSaglamayanSayi = i;
        break;
    }else{
        kuraliSaglamayanSayi = 0;
    }
}
console.log(kuraliSaglamayanSayi);*/