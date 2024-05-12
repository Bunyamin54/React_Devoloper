
console.log("Hello World")

// // const x = 3

// let x = 3

// //! x = false     bu ozelligi kullanirsak  hata olursa cikti vermez   // "noEmitOnError": true,    katilik seviyesi  ts de 

// let y = false
// // let y = false

// // let z : any

// //?   "removeComments": true,       bu ozellik product asamasinda yorumlarin gosterilmemesini saglar.  musteriye cikacak olan urunde yorumlar bu sekilde kaldirilmis olur


// //?  root dir ve "outDir": "./",   

// const button = document.getElementById('submit');
// const a = document.getElementById('input1')! as HTMLInputElement;
// const b = document.getElementById('input2')! as HTMLInputElement;
// const result = document.getElementById('result');

// function add(a: number , b: number) {
//     return a + b;
// }
// button.addEventListener('click', function () {
//     result.innerText = `${add(+a.value, +b.value)}`;
// });


//? Type annotation

// let x = " hello world"

//! x= 5  // x burda string integer atayamayiz

// ! Data Types

//? Array

// let num : any [] =[ 1, "string"]  //? any olarak tanimlarsak int ve  string atayabiliriz
// let number : number [] =[ 1, "string"]   //? yoksa altini cizer hatayi gosterir. 

// let a : string [] = []

// a.push(5)  //?  bu bir numberdir string atayamazsin diyor ts
// a.push("5")  //?  bu sekilde string oldugu icin gecerli parantez icinde 

// let b = []  // ? bos array any tpinde kabul ediyor


//! Tuples


// ? Declare a tuple type

// let x: [string, number] 

// let myTuple: [number, boolean, string]  // ? siralama onemli 
// myTuple = [13.4 , false, "Hello world", ]
 
//? Tuple Array

// let arrTuples: [number, string] []

// arrTuples = [[ 1, 'Mark'], [2, 'anthony']]

// arrTuples.push([3, 'Bunyamin'])

//! Enum friendly name sadece suslu ilk harfi Buyuk  enum un basina const yazdigimizda karmasik yapi gider

// const enum Color {
// Red,
// Green,
// Blue

// }

// console.log(Color.Green)
// console.log(Color.Red)


// const enum Thsirt {

//     XSmall = 'XS',
//     Small ='S',
//     Medium= 'M'

// }

// console.log(Thsirt.XSmall)

// const enum Mixed {
//     Red,
//     Blue= 'Mavi',
//     Magenta = 20
// }

//?= any hic bir hata vermez ts her tyrlu veri tutulur anlaminda

//? Unknown -- 

// let a: any = 'Hello'

// let b:number = a
// let c : unknown = 5

// let d : number = c as number

//? Void fonksioyn donus tipi

// function myFunction () : void {

//     console.log('Hello World')

//     return 3  // icerisinde return olmayan foknsiyonlari donusturur
// }

//? union birlesim  more than one data type birlestirabilir

// function checkNumber(n: (string | number)): string {
//     if (typeof n === 'number') {


          
//     } else {
    
//     }
//     return 'Hello'
// } 


// let xyz : string | boolean | number = '0'

// xyz = 'Hello'

// xyz = true

// xyz = 3

// ? Type Aliases

// type Check = string | number | boolean

// let f : Check = 0 

// f= 0

// f= 'Merhaba'

// f= false

// let g : string | number
// let h: string | number
// let i : Check

// ? String Literals  degiskenin alabilecegi tipleri degerleri belirliyoruz. 

type Car = 'BMW' | 'Audi'

let car1: Car = 'BMW'
let car2: Car = 'BMW'
let car3: Car= 'Fiat'
