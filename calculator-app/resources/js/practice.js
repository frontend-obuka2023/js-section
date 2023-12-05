// 1. cas JS-a (19. cas) - 05.12.2023.

/**
 * In this function
 * My goals was to bla bla
 * Params are needed.
 */

console.log('----------- 1. cas JS-a -----------');

// ! var nacin definisanja varijable se koristio ranije (pre ES 6 sintakse)
var myVar = 5;    // znakom = (u ovom slucaju on se naziva operator dodele vrednosti), odvajamo levu stranu (deklaraciju varijable) i desnu stranu (inicijalizaciju varijable)


// * Cesto pitanje na intervjuima - razlike izmedju ES5 i ES6 sintakse
// * Takodje cesto pitanje - razlike izmedju LET, CONST i VAR 
let myNumber = 5;
let myString = 'This is our test variable.';

// let myNumber = 555; // ! LET varijable se ne mogu re-deklarisati
myNumber = 33; // * LET varijable se mogu re-inicijalizovati

console.log(myNumber);

const myFixedNumber = 10;
// const myFixedNumber = 100; // ! CONST varijable se ne mogu re-deklarisati
// myFixedNumber = 111; // ! CONST varijable se ne mogu re-inicijalizovati

let myRandomValue; // ! LET varijable se mogu u jednoj liniji koda deklarisati, a inicijalizovati u nekoj drugoj

myRandomValue = 50.5;

// const myPlaceholderValue; // ! CONST varijable se MORAJU u istoj liniji koda i deklarisati i inicijalizovati

// myPlaceholderValue = 100.95;


// * Imenovanje varijabli

// TODO Dobra praksa:

const camelCaseVar = 'My good variable.';
let variable1 = 6;

// ! Losa praksa:
let snake_case_var = 1;
// let 3var = 5;
// let kebab-case-var = 10;
// let const; // ! ne mogu se koristiti rezervisane reci za imenovanje varijabli
// const let;

/**
 * ZADATAK ZA VEZBU:
 * 
   1. U practice.js fajlu kreirati varijable proizvoljnog naziva uz svaku od mogucih naming sintaksi i 
      dodeliti im ili neki string ili number vrednost (npr. let myTop1 = ‘Audi A6’ ili npr. let age = ‘27’).
   2. Varijable kreirati i uz let i const, proizvoljnim rasporedom.
   3. Pokusati redefinisanje vrednosti svake od varijabli (i let i const). 
   4. Ispisati vrednosti varijabli na konzoli uz console.log() funkciju.
   5. Obratiti paznju na pokusaj redefiinisanja CONST varijabli i gresku koja se dobija u konzoli Web Browser-a.
*/

let myHomeAddress = 'Bul. Osl. 1, Novi Sad, 21000';
const country = 'Serbia';

// * DOSADASNJI TIPOVI PODATAKA:
/**
 * 1. String (npr 'Hello World!', 'Bul. Osl. 1, Novi Sad, 21000', 'b')
 * 2. Number (npr 5, 105, 500.5, 1, 0, 0.32, -87, -98.1)
 *      - Integer (celobrojne vrednosti) : 5, 105, 1, 0, -87
 *      - Float (decimalne vrednosti) (500.5, 0.32, -98.1)
 */


// * OPERATORI
/**
 *  =  (operator dodele vrednosti)
 *  +  (sabiranje ili konkatinacija)
 *  -  (oduzimanje)
 *  *  (mnozenje)
 *  /  (deljenje)
 *  ** (eksponencijalni operator)
 *  %  (remainder operator)
 */

let num1 = 20;
const fixedNum = 140;
let num2;

num1 = num1 + 50;

num1 = fixedNum / num1;

num1 = num1 + fixedNum * 5 - 1;

num2 = num1 - 1;

console.log(num1, num2);

console.log('Moj dobijeni rezultat = ',num2);
console.log('Moj dobijeni rezultat = ' + num2);
console.log("Moj dobijeni rezultat je = " + num2);

console.log(`Moj dobijeni rezultat je = ${num2}`); // * preporuka


// TODO 1. cas JS-a (domaci):
/**ZADATAK ZA VEZBU:
 * 
 * 1. Napraviti dve varijable.
   2. Smisleno odabrati LET ili CONST.
   3. Prva varijabla neka cuva rezultat neke matematicke operacije po izboru.
   4. Druga varijabla neka opise matematicku operaciju koju ste za prvu varijablu koristili (u STRING formatu ispisete samu operaciju).
*/

let someNumber = 4;

let description;

someNumber = (someNumber / 2) + (10 - 4) * 3;

console.log(`Rezultat je ${someNumber}`);

description = `(4 / 2) + (10 - 4) * 3`;

console.log(description);