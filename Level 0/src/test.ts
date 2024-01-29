import { minimal } from "./1_fungsi_minimal";
import { minimalWithCheck } from "./1_fungsi_minimal";
import { minimalWithCheck2 } from "./1_fungsi_minimal";
import { powerOf } from "./2_fungsi_power";
import { penjumlahanBilangan } from "./3_fungsi_penjumlahan";
import { Animal } from "./4_class_animal_construct";
import { Rabbit } from "./5_class_rabit_ext_animal";
import { Eagle } from "./6_class_eagle_ext_animal";
import { EagleRun } from "./7_class_eagleRun_ext_eagle";
import { myRabbit } from "./8_myRabbit";
// import { myEagle } from "./9_myEagle";
import { speedTest } from "./10_speedTest";

console.log("FUNGSI 1 SESUAI SOAL");

const aLebihKecil = minimal(5, 3); // a > b
console.log("Hasil:", aLebihKecil);

const hasilSama = minimal(4, 4); // a = b
console.log("Hasil:", hasilSama);

const aLebihBesar = minimal(5, 7); //a < b
console.log("Hasil:", aLebihBesar);

console.log("FUNGSI 2 DENGAN METHOD math.Min()");

const resultMinCheck = minimalWithCheck(5, 5); // Mengembalikan 5
console.log("Hasil:", resultMinCheck);

console.log("FUNGSI 3 DENGAN METHOD math.Min()");

const resultMinCheck2 = minimalWithCheck2(5, 5); // Mengembalikan 5
console.log("Hasil:", resultMinCheck2);

console.log("----------------------------------------------------------------");

console.log("SOAL KE 2");

const resultSoalDua = powerOf(7, 3);
console.log("7^3 = " + resultSoalDua);

console.log("3^3 = " + powerOf(3, 3));

console.log("4^0.5 = " + powerOf(4, 0.5));

console.log("----------------------------------------------------------------");

console.log("SOAL KE 3");

const arrayBilangan = [1, 2, 3, 4, 5, 6];
const hasilGanjil = penjumlahanBilangan(arrayBilangan, "ganjil"); // Jumlahkan bilangan ganjil: 1 + 3 + 5 = 9
console.log("Hasil penjumlahan bilangan ganjil:", hasilGanjil);

const hasilGenap = penjumlahanBilangan(arrayBilangan, "genap"); // Jumlahkan bilangan genap: 2 + 4 + 6 = 12
console.log("Hasil penjumlahan bilangan genap:", hasilGenap);

console.log("----------------------------------------------------------------");

console.log("SOAL KE 4");

const cat = new Animal("Kupit", 1.5, true);
console.log("Name:", cat.name);
console.log("Age:", cat.age);
console.log("Is Mammal:", cat.isMammal);

console.log("----------------------------------------------------------------");

console.log("SOAL KE 5");

const rabbit = new Rabbit("Bugs", 1);
console.log(rabbit.eat());

console.log("----------------------------------------------------------------");

console.log("SOAL KE 6");

const eagle = new Eagle("Thunder", 2);
console.log(eagle.fly());
console.log(eagle.run(eagle.speed));

console.log("----------------------------------------------------------------");

console.log("SOAL KE 7");

const eagleRun = new EagleRun("Gledek", 3);
console.log(eagleRun.fly());
// console.log(eagleRun.runEagle(300));
console.log(eagleRun.runEagle(eagle.speed));

console.log("----------------------------------------------------------------");

console.log("SOAL KE 8");

console.log(myRabbit.eat());

console.log("----------------------------------------------------------------");

console.log("SOAL KE 9");

// console.log(myEagle.fly());

console.log("----------------------------------------------------------------");

console.log("SOAL KE 10");

console.log(speedTest.runEagle());
