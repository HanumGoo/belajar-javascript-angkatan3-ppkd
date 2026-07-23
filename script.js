// // "use strict";

// // const obj = {
// //   name: "Sheehan",
// //   division: "Web Programming",
// //   age: 20,
// //   status: "Alive",
// // };

// // console.log(obj);

// // document.getElementById("demo").innerHTML = JSON.stringify(obj);

// // let minimumAge = 18;

// // if (obj.age >= 18) {
// //   console.log(obj.name + " telah mencukupi umur");
// // } else {
// //   console.log(obj.name + " tidak mencukupi umur");
// // }

// // const myArray = ["first", "second", "third", "fourth"];

// // myArray.forEach(consoleFunction);

// // function consoleFunction(value, index) {
// //   console.log(value);
// //   return;
// // }
// // console.log("success");

// // myArray.filter(filterFunction);

// // function filterFunction(value, index) {
// //   console.log(value.length > 5);
// //   return;
// // }

// // try sort the arrays
// const myArrayInt = [2, 3, 1, 10];
// const myAnotherArrayInt = [11, 14, 19, 30, 20, 21, 4, 40];
// const myArrayCombineInt = [...myArrayInt, ...myAnotherArrayInt];

// // myArrayCombineInt.sort((a, b) => a - b);

// // console.log(myArrayCombineInt.toString());
// // console.log("this is the smallest number of the arrays! " + Math.max.apply(null, myArrayCombineInt));

// // console.log("this is the smallest in the array! : " + smallestArrayValue(myArrayCombineInt));
// // console.log("and this is the highest in the array! : " + highestArrayValue(myArrayCombineInt));
// // console.log("this is the data that is above 18 : " + myArrayCombineInt.filter((x) => x >= 18));
// // console.log("this is the data that is below 18 : " + myArrayCombineInt.filter((x) => x < 18));

// // function smallestArrayValue(array) {
// //   let arrayLength = array.length;
// //   let min = Infinity;
// //   while (arrayLength--) {
// //     if (array[arrayLength] < min) {
// //       min = array[arrayLength];
// //     }
// //   }
// //   return min;
// // }

// // function highestArrayValue(array) {
// //   let arrayLength = array.length;
// //   let max = -Infinity;
// //   while (arrayLength--) {
// //     if (array[arrayLength] > max) {
// //       max = array[arrayLength];
// //     }
// //   }

// //   return max;
// // }

// // const car = ["Car 1", "Car 2", "Car 3", "Car 4", "Car 5", "Car 6"];

// // let stringConcat = "";
// // for (let x in car) {
// //   stringConcat += x + ",";
// //   console.log(x);
// // }
// // for (let x of car) {
// //   stringConcat += x + ",";
// //   console.log(x);
// // }

// // console.log(stringConcat);

// // const anotherObj = {
// //   name: "HanumGoo",
// //   age: 30,
// //   city: "Jakarta",
// // };

// // for (const x in anotherObj) {
// //   console.log(x + ": " + anotherObj[x]);
// // }

// let stringTest = "";
// myArrayCombineInt.forEach(MyFunction);
// console.log(stringTest);
// stringTest = "";
// myArrayCombineInt.forEach((value, index) => {
//   stringTest += `\nthis is the index using anony: ${index} | this is the value anony: ${value}`;
// });
// console.log(stringTest);

// function MyFunction(value, index) {
//   stringTest += `this is the index: ${index} | this is the value ${value}\n`;
// }

// // test column

// const aLiterallyNewArray = myArrayCombineInt.map((value, index) => value * 2);
// const aLiterallyNewArray1 = myArrayCombineInt.map((value, index) => value / 2);
// const aLiterallyNewArray2 = myArrayCombineInt.map((value, index) => value % 2);
// const aLiterallyNewArray3 = myArrayCombineInt.flatMap((x) => x * 2);
// const aLiterallyNewArray4 = myArrayCombineInt.flatMap((value, index) => [value * 1, value * 2, value * 3]);
// console.log(myArrayCombineInt + "\n\n" + aLiterallyNewArray + "\n\n" + aLiterallyNewArray1 + "\n\n" + aLiterallyNewArray2);

// console.log(`\n\n ${aLiterallyNewArray3} ${aLiterallyNewArray4}`);

// console.log(
//   myArrayCombineInt.filter(function (value, index) {
//     return value > 18;
//   }),
// );

// console.log(
//   myArrayCombineInt.reduce((total, value) => {
//     return total + value;
//   }),
// );

// console.log(
//   myArrayCombineInt.reduceRight((total, value) => {
//     return total + value;
//   }),
// );

// console.log(myArrayCombineInt.every((x) => x >= 1));

const daftarBuku = [
  {
    id: 1,
    judul: "Hari-hari belajar",
    stock: 5,
  },
  {
    id: 2,
    judul: "Mari Belajar Coding",
    stock: 6,
  },
];

daftarBuku.push({
  id: 3,
  judul: "Komik Sinchan",
  stock: 7,
});

for (let i = 1; i <= daftarBuku.length; i++) {
  console.log("nama buku: " + daftarBuku[i - 1].judul + "\nsisa stock buku: " + daftarBuku[i - 1].stock);
  console.log();
}

console.log("ada beberapa buku yang punya stock lebih dari 6 : " + daftarBuku.some((x) => x.stock > 6));
for (const i of daftarBuku.entries()) {
  console.log(i);
}

let angka1 = 15;
let angka2 = "50.5";
const angka3 = Number(angka2);
console.log(angka3);
let hasilKali = angka1 * angka2;
let hasilBagi = angka1 / angka2;
console.log(`hasil perkalian dari ${angka1} dan ${angka2} adalah : ` + hasilKali);
console.log(`hasil pembagian dari ${angka1} dan ${angka2} adalah : ` + hasilBagi);

const jsonData = `[{"nama": "sheehan","umur": "30"}, {"nama": "sheehan","umur": "30"}]`;
const convert = JSON.parse(jsonData);
console.log(convert[0].nama);

const button = document.getElementById("demo1");
const heading = document.getElementById("demo");
const input = document.getElementById("demo2");
const heading1 = document.getElementById("demo4");

const fruits = new Map([["banana", 200]]);
fruits.set("apple", 500);
console.log(fruits.delete("apple"));

let myint = 1;
button.addEventListener("click", () => {
  heading1.innerHTML = input.value;
});

input.addEventListener("input", () => {
  heading1.innerHTML = input.value;
});

const tombolTambah = document.getElementById("demonology-button-tambah");
const tombolKali = document.getElementById("demonology-button-kali");
const tombolKurang = document.getElementById("demonology-button-kurang");
const tombolBagi = document.getElementById("demonology-button-bagi");
const inputAngka1 = document.getElementById("angka1");
const inputAngka2 = document.getElementById("angka2");
const jawaban = document.getElementById("demonology");

tombolTambah.addEventListener("click", () => {
  const angkaPertama = inputAngka1.value;
  const angkaKedua = inputAngka2.value;
  if (angkaPertama == "" || angkaKedua == "") {
    jawaban.innerHTML = "Jawaban : (angka tidak boleh kosong!)";
    console.log("failed");
    return;
  } else {
    jawaban.innerHTML = "Jawaban : " + (Number.parseFloat(angkaPertama) + Number.parseFloat(angkaKedua));
    console.log("success");
  }
});

tombolKali.addEventListener("click", () => {
  const angkaPertama = inputAngka1.value;
  const angkaKedua = inputAngka2.value;
  if (angkaPertama == "" || angkaKedua == "") {
    jawaban.innerHTML = "Jawaban : (angka tidak boleh kosong!)";
    console.log("failed");
    return;
  } else {
    jawaban.innerHTML = "Jawaban : " + Number.parseFloat(angkaPertama) * Number.parseFloat(angkaKedua);
    console.log("success");
  }
});

tombolKurang.addEventListener("click", () => {
  const angkaPertama = inputAngka1.value;
  const angkaKedua = inputAngka2.value;
  if (angkaPertama == "" || angkaKedua == "") {
    jawaban.innerHTML = "Jawaban : (angka tidak boleh kosong!)";
    console.log("failed");
    return;
  } else {
    jawaban.innerHTML = "Jawaban : " + (Number.parseFloat(angkaPertama) - Number.parseFloat(angkaKedua));
    console.log("success");
  }
});

tombolBagi.addEventListener("click", () => {
  const angkaPertama = inputAngka1.value;
  const angkaKedua = inputAngka2.value;
  if (angkaPertama == "" || angkaKedua == "") {
    jawaban.innerHTML = "Jawaban : (angka tidak boleh kosong!)";
    console.log("failed");
    return;
  } else {
    jawaban.innerHTML = "Jawaban : " + Number.parseFloat(angkaPertama) / Number.parseFloat(angkaKedua);
    console.log("success");
  }
});

const inputFormat = document.getElementById("format-input");
const buttonFormat = document.getElementById("format-kalkulasi");
const answerFormat = document.getElementById("format-jawaban");

buttonFormat.addEventListener("click", () => {
  const inputer = inputFormat.value;
  if (inputer == "") {
    answerFormat.innerHTML = "Jawaban : (format tidak boleh kosong!)";
    console.log("failed");
    return;
  } else {
    answerFormat.innerHTML = "Jawaban : " + eval(inputer);
    console.log("success");
  }
});

const tipe3Select = document.getElementById("tipe3-select");
const tipe3Input1 = document.getElementById("tipe3-input1");
const tipe3Input2 = document.getElementById("tipe3-input2");
const tipe3Button = document.getElementById("tipe3-button");
const tipe3Answer = document.getElementById("tipe3-jawaban");

tipe3Button.addEventListener("click", () => {
  const firstInput = tipe3Input1.value;
  const secondInput = tipe3Input2.value;
  if (firstInput == "" || secondInput == "") {
    tipe3Answer.innerHTML = "Jawaban : (format tidak boleh kosong!)";
    console.log("failed");
  } else if (isNaN(firstInput) || isNaN(secondInput)) {
    console.log("come here");
  } else {
    if (tipe3Select.value == "none") {
      tipe3Answer.innerHTML = "Jawaban : " + (Number(firstInput) + Number(secondInput));
    } else if (tipe3Select.value == "+") {
      tipe3Answer.innerHTML = "Jawaban : " + (Number(firstInput) + Number(secondInput));
    } else if (tipe3Select.value == "x") {
      tipe3Answer.innerHTML = "Jawaban : " + Number(firstInput) * Number(secondInput);
    } else if (tipe3Select.value == "-") {
      tipe3Answer.innerHTML = "Jawaban : " + (Number(firstInput) - Number(secondInput));
    } else if (tipe3Select.value == ":") {
      if (!isFinite(Number(firstInput) / Number(secondInput))) {
        tipe3Answer.innerHTML = "Jawaban : tidak terhingga";
      } else {
        tipe3Answer.innerHTML = "Jawaban : " + Number(firstInput) / Number(secondInput);
      }
    } else {
    }
  }
});
