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

var kuraliSaglamayanSayi = 0;

function sayiAsalMi(sayi){
    if (sayi === 1){
        return false;
    }
    if (sayi === 2){
        return true;
    }else{
        for (let i = 2; i < sayi; i++) {
            if(sayi % i === 0){
                return false;
            }
        }
        return true;
    }
}

function kuralSaglaniyorMu(sayi){
    //let sonuc = "";
    let sonuc = false;
    if (sayiAsalMi(sayi) === false){
        for (let i = 1; i < sayi; i++){
            if (sayiAsalMi(i)){
                for (let j = 1; j < sayi; j++) {
                    let sayi2 = i + (2 * (j**2));
                    //console.log("kural sağlandı " + sayi.toString() + " = " + i.toString() + " + (2 * " + j.toString() + "^2)");
                    if (sayi === sayi2){
                        //sonuc = "kural sağlandı " + sayi.toString() + " = " + i.toString() + " + (2 * " + j.toString() + "^2)";
                        //console.log("kural sağlandı " + sayi.toString() + " = " + i.toString() + " + (2 * " + j.toString() + "^2)");
                        sonuc = true;
                        break;
                    }else{
                        //sonuc = "kural sağlanmıyor";
                        sonuc = false;
                    }
                }
            }
            if(sonuc) break;
        }
        return sonuc;
    }
}

for (let i = 3; i < 10000; i+=2) {
    if (kuralSaglaniyorMu(i) === false){
        kuraliSaglamayanSayi = i;
        break;
    }
}

console.log(kuraliSaglamayanSayi);
//console.log(kuralSaglaniyorMu(11));