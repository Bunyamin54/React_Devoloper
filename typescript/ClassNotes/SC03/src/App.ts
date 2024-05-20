//? Interface


interface Person {
     name:string;
}

const person1: Person = {
    name : 'Mark'
}

//? Interface
// const person1 = {
//     name: 'Mark'
// };


// interface Calender {

//     events: string [];
//     addEvents(event: string) : void;
// }

// class LMSCalender implements Calender {

//     constructor(public events: string[]) {}

//     addEvents(events: string) :void {
//         this.events.push(events);
//     }
// }


// const cohort14= new LMSCalender(['HTML', 'JS'])

// cohort14.addEvents('React')

// console.log(cohort14)

//? Interface 

// interface Color {

//     color: { r: number, g: number, b: number}
// }

// const red:Color = { color: {r:255, g:0, b:0}}

// interface Shape {

//     area: number;
// }

// let shape1 : Shape = {area:255}

// class Square implements Color, Shape {

//     constructor (public color: {r: number, g: number, b:number} public area:number) {

//     }
// }

// const sq = new Square({r: 255, g:0, b:0}  ,255)
// const sq = new Square(red.color  ,255)
// const sq = new Square(red.color  ,shape1.area)

// console.log(sq)

//? Generics  smilar C#


