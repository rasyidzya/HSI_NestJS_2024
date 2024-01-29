"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1_fungsi_minimal_1 = require("./1_fungsi_minimal");
var _1_fungsi_minimal_2 = require("./1_fungsi_minimal");
var _1_fungsi_minimal_3 = require("./1_fungsi_minimal");
var _2_fungsi_power_1 = require("./2_fungsi_power");
var _3_fungsi_penjumlahan_1 = require("./3_fungsi_penjumlahan");
var _4_class_animal_construct_1 = require("./4_class_animal_construct");
var _5_class_rabit_ext_animal_1 = require("./5_class_rabit_ext_animal");
var _6_class_eagle_ext_animal_1 = require("./6_class_eagle_ext_animal");
var _7_class_eagleRun_ext_eagle_1 = require("./7_class_eagleRun_ext_eagle");
var _8_myRabbit_1 = require("./8_myRabbit");
// import { myEagle } from "./9_myEagle";
var _10_speedTest_1 = require("./10_speedTest");
console.log("FUNGSI 1 SESUAI SOAL");
var aLebihKecil = (0, _1_fungsi_minimal_1.minimal)(5, 3); // a > b
console.log("Hasil:", aLebihKecil);
var hasilSama = (0, _1_fungsi_minimal_1.minimal)(4, 4); // a = b
console.log("Hasil:", hasilSama);
var aLebihBesar = (0, _1_fungsi_minimal_1.minimal)(5, 7); //a < b
console.log("Hasil:", aLebihBesar);
console.log("FUNGSI 2 DENGAN METHOD math.Min()");
var resultMinCheck = (0, _1_fungsi_minimal_2.minimalWithCheck)(5, 5); // Mengembalikan 5
console.log("Hasil:", resultMinCheck);
console.log("FUNGSI 3 DENGAN METHOD math.Min()");
var resultMinCheck2 = (0, _1_fungsi_minimal_3.minimalWithCheck2)(5, 5); // Mengembalikan 5
console.log("Hasil:", resultMinCheck2);
console.log("----------------------------------------------------------------");
console.log("SOAL KE 2");
var resultSoalDua = (0, _2_fungsi_power_1.powerOf)(7, 3);
console.log("7^3 = " + resultSoalDua);
console.log("3^3 = " + (0, _2_fungsi_power_1.powerOf)(3, 3));
console.log("4^0.5 = " + (0, _2_fungsi_power_1.powerOf)(4, 0.5));
console.log("----------------------------------------------------------------");
console.log("SOAL KE 3");
var arrayBilangan = [1, 2, 3, 4, 5, 6];
var hasilGanjil = (0, _3_fungsi_penjumlahan_1.penjumlahanBilangan)(arrayBilangan, "ganjil"); // Jumlahkan bilangan ganjil: 1 + 3 + 5 = 9
console.log("Hasil penjumlahan bilangan ganjil:", hasilGanjil);
var hasilGenap = (0, _3_fungsi_penjumlahan_1.penjumlahanBilangan)(arrayBilangan, "genap"); // Jumlahkan bilangan genap: 2 + 4 + 6 = 12
console.log("Hasil penjumlahan bilangan genap:", hasilGenap);
console.log("----------------------------------------------------------------");
console.log("SOAL KE 4");
var cat = new _4_class_animal_construct_1.Animal("Kupit", 1.5, true);
console.log("Name:", cat.name);
console.log("Age:", cat.age);
console.log("Is Mammal:", cat.isMammal);
console.log("----------------------------------------------------------------");
console.log("SOAL KE 5");
var rabbit = new _5_class_rabit_ext_animal_1.Rabbit("Bugs", 1);
console.log(rabbit.eat());
console.log("----------------------------------------------------------------");
console.log("SOAL KE 6");
var eagle = new _6_class_eagle_ext_animal_1.Eagle("Thunder", 2);
console.log(eagle.fly());
console.log(eagle.run(eagle.speed));
console.log("----------------------------------------------------------------");
console.log("SOAL KE 7");
var eagleRun = new _7_class_eagleRun_ext_eagle_1.EagleRun("Gledek", 3);
console.log(eagleRun.fly());
// console.log(eagleRun.runEagle(300));
console.log(eagleRun.runEagle(eagle.speed));
console.log("----------------------------------------------------------------");
console.log("SOAL KE 8");
console.log(_8_myRabbit_1.myRabbit.eat());
console.log("----------------------------------------------------------------");
console.log("SOAL KE 9");
// console.log(myEagle.fly());
console.log("----------------------------------------------------------------");
console.log("SOAL KE 10");
console.log(_10_speedTest_1.speedTest.runEagle());
