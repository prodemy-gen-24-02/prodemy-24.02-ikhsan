function square(s){
    result = s * s;
    return result;
}

function circle(r){
    result = Math.ceil(Math.PI * r * r);
    return result;
}

function triangle(a,t){
    result = a * t / 2;
    return result;
}

function trapezium(a,b,t){
    result = (a + b) * t / 2;
    return result;
}
function rectangle(p,l){
    result = p * l;
    return result;
}

let sisi = 3;
let luasSegiEmpat = square(sisi);
console.log(`luas segi empat dengan sisi ${sisi} adalah ${luasSegiEmpat}`);

let jari = 7;
let luasLingkaran = circle(jari);
console.log(`luas lingkaran dengan jari-jari ${jari} adalah ${luasLingkaran}`);

let alas = 3;
let tinggi = 4;
let luasSegitiga = triangle(alas,tinggi);
console.log(`luas segitiga dengan alas ${alas} dan tinggi ${tinggi} adalah ${luasSegitiga}`);

let atas = 4;
let bawah = 6;
let tinggi2 = 3;
let luasTrapesium = trapezium(4,6,3);
console.log(`luas trapesium dengan atas ${atas}, bawah ${bawah}, dan tinggi ${tinggi2} adalah ${luasTrapesium}`);

let panjang = 7;
let lebar = 3;
let luasPersegiPanjang = rectangle(panjang,lebar);
console.log(`luas persegi panjang dengan panjang ${panjang} dan lebar ${lebar} adalah ${luasPersegiPanjang}`);