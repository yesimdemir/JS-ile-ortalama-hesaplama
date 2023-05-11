// ORTALAMA BULMA

let vize1 = Number(prompt("Vize1 notunuzu girin: "));
let vize2 = Number(prompt("Vize2 notunuzu girin: "));
let final = Number(prompt("Final notunuzu girin: "));

let ortalama = (vize1*0.3 + vize2*0.3 + final*0.4) 

if(ortalama >= 50){
    alert("Dersi geçtiniz, Tebrikler!");
}
else{
    alert("Dersten kaldınız, Üzgünüm!");
}