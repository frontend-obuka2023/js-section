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

let someNumber = 104;

let description;

someNumber = (someNumber / 2) + (10 - 4) * 3;

console.log(`Rezultat je ${someNumber}`);

description = `(4 / 2) + (10 - 4) * 3`; // ! ovde smo hard-kodovali broj 4 (tj zakucali vrednost u string)

console.log(description);



// 2. cas JS-a (20. cas) - 07.12.2023.

console.log('----------- 2. cas JS-a -----------');

let operationDescription = '(' + someNumber + ' / 2) + (10 - 4) * 3'; // * a ovde smo dinamicki prosledili vrednost someNumber varijable (nebitno koja je to vrednost)

console.log(operationDescription);

let templLiterals = `(${someNumber} / 2) + (10 - 4) * 3`; // * bolji nacin ispisivanja vrednosti varijabli (uz pomocu template literala)

console.log(templLiterals);

const a = 5;
const b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);

let goToNewLine = `My string going \nto new line.`;

console.log(goToNewLine);


// TODO Zadatak za vezbu:
/**
 * 1. Kreirati dve varijable. Jedna neka bude tipa number i neka se zove 
 *    userInputEx (na koju god vrednost je postavite) i druga neka se naziva 
 *    result i nemojte je postaviti ni na kakvu vrednost.
 * 2. Postavite result varijablu na vrednost userInputEx plus neki broj (npr 20).
 * 3. U naredne 3 linije koda, varijablu result promenite u svakoj 
 *    narednoj liniji koda operacijama oduzimanja, mnozenja i deljenja 
 *    nad tom result varijablom i svaki put ispisati vrednost result varijable 
 *    na konzoli u formatu koji zelite s tim da pre toga stoji String 
 *    `Current result is: `
 * 4. Na kraju varijablu result ispisati u okviru alert prozora, 
 *    a userInputEx varijablu ispisati samo na konzoli.
*/

const userInputEx = 7;
let result;

result = userInputEx - 3; // 4
console.log(`Trenutni rezultat je = ${result}`);

result = result * 4; // stara vrednost result-a je 4, a posto je 4 * 4 = 16, onda je nova result vrednost 16
// result *= 4; // ! kracin nacin linije koda od gore
console.log(`Trenutni rezultat je = ${result}`);

result = result / 2; // stara vrednost result-a je 16, a posto je 16/2 = 8, onda je nova result vrednost 8
// result /= 2; // ! kraci nacin linije koda od gore
console.log(`Trenutni rezultat je = ${result}`);

// alert(result);
// console.log(userInputEx);



// ! kraci nacin za blok koda iz prethodnog zadatka

let aa = 5;
let bb = 3;

// aa = aa + 10; 
// console.log(aa); // 15

aa += 10; // ! kraci nacin linije koda od gore
console.log(aa); // 15

// bb = bb - 2;
bb -= 2; // ! kraci nacin linije koda od gore




// ! Funkcije

// * Funkcije predstavljaju odredjeni re-usable kod (kod koji mozete iznova koristiti) i prosledjivati joj parametre po zelji
// broj parametara moze biti od 0 do n 
function sayHi(name) { // name je parametar ove funkcije
    // alert('Welcome ' + name);
    alert(`Welcome ${name}`);
}

// sayHi('Marko Bojkic');  // argument je 'Marko Bojkic'

// sayHi('Nikola Nikolic');

// sayHi('Pera Peric');


// TODO Zadatak za vezbu:

/**
 * Deklarisati funkciju koja treba da sabere dva broja i kao svoj rezultat
 * vrati vrednost rezultata sabiranja u formatu: `Result is _RESULT_`
 * ! HINT: return je kljucna rec koju koristimo kad hocemo da funkcija vraca neku vrednost
 */

function adding(x, j) {
    const z = x + j; // 9
    return `Rezultat sabiranja je = ${z}`; // vracamo string vrednost
}

let firstResult = adding(3, 6); 

console.log(firstResult);
// console.log(adding(3,6));

firstResult = adding(100, 200);
console.log(firstResult);


// TODO Zadatak za vezbu

/**
 * 1. Napraviti funkciju square() koja ce broj prosledjen kao parametar
 *    podici na kvadrat
 * 2. Rezultat vratiti u formatu `Squared _number_ is _square-number_`
 * 3. Pozvati funkciju sa nekom vrednoscu (npr 5)
 * ! HINT: Ovde mozemo koristiti eksponencijalni operator (**)  -> npr: 2**2
 */

// ! 1. nacin - ispravan
// function square(c) {
//     const res = c**2;
//     return `Square number is = ${res}`;
// }

// ! 2. nacin - ispravan
function square(c) {
    return `Square number is = ${c**2}`;
}

console.log(square(2));

console.log(square(4));

console.log('Varijabla aa ima vrednost = ' + aa); // ! izvrsena je konkatinacija, gde smo sa stringom spojili broj i na taj nacin automatski i taj broj pretvorili u string 




// ! Konverzija tipova podataka (pretvaranje jednog tipa podatka u drugi (npr number u string, ili obrnuto))

// ! kada sabiramo broj i string (npr 33 (number) i '2' (string)) , onda se ne dogadja konkretno sabiranje zeljenih brojeva, vec konkatinacija stringova, pa je rezultat '332'
let t = 33 + '2'; 

console.log(t); // '332' (string)


// * eksplicitna konverzija (konverzija koju mi zeljeno navodimo)

// t = 50 + '2'; // zelim 52 a ne '502'

t = 50 + parseInt('2'); // parsiranje stringa u celobrojnu vrednost

console.log(t);

t = 100 + parseFloat('0.32'); // parsiranje stringa u decimalnu vrednost

console.log(t);

t = 5 + parseInt('neki random string');

console.log(t); // NaN  --> skraceno od Not a Number


// kraci nacin eksplicitne konverzije stringa u number

t = 50 + +'2'; // ! kraci nacin eksplicitne konverzije stringa u number jeste dodavalje plusa pred string (koji cuva neki broj)

console.log(t);

t = 100 + +'0.32';

console.log(t);


// ! obrnuti pravac - number u string

t = t.toString();

console.log(typeof t); // '100.32'




// 3. cas JS-a (21. cas) - 12.12.2023.

console.log('----------- 3. cas JS-a -----------');

// * Implicitna konverzija (konverzija koja se striktino ne navodi)

t = 3 * '3';

console.log(t); // 9

t = 10 -'4';

console.log(t); // 6

t = '20' / 5; // 4

t = 2**'3'; // 8


// ! Jos jednom kraci nacin pisanja operatora

t = 0;

// t = t + 6; // ! duzi nacin
t += 6; // * kraci nacin

t /= 2; // 3

t -= 1; // 2

t *= 2; // 4


// * Increment (++) i Decrement (--) operatori

let j = 1;
let i = j++; // ! i varijabla samo uzima trenutnu vrednost j varijable (1) , ALI istovremeno se potom j varijabla uvecava za 1

console.log(`j = ${j}`); // 2
console.log(`i = ${i}`); // 1

j = 3;
i = ++j;

console.log(`j = ${j}`); // 4
console.log(`i = ${i}`); // 4

let m = 5;
let k = m+=2;

console.log(m); // 7
console.log(k); // 7

j = 10;
i = j--;

console.log(`j = ${j}`); // 9
console.log(`i = ${i}`); // 10

j = 10;
i = --j;

console.log(`j = ${j}`); // 9
console.log(`i = ${i}`); // 9



// ! Boolean - najcesce se koristi za proveru nekih logickih uslova (npr uz IF metodu ili slicno)  => moze imati ili TRUE ili FALSE vrednost

let myBool = true;

console.log(myBool);

myBool = false;

console.log(myBool);



// ! Object - slozeni tip podatka koji sluzi za grupisanje podataka

const githubUser = {
    email: 'test.acc@gmail.com',
    password: 'test1234'
};

// alert(`You have succesfully logged in ${githubUser.email}`); // ! ovde smo pristupili property-u email iz objekta githubUser



// ! Array (Niz) - slozeni tip podatka koji sluzi kao kolekcija podataka

// const myArray = []; // ! deklaracija praznog niza

const myArray = [1,'Hello World',true];

console.log(myArray);

console.log(`Duzina niza je ${myArray.length}`);  // niz.length je kako mozemo pristupiti duzini niza

myArray.push(4);

myArray.push(5,6); // ! PUSH metoda dodaje novi element (ili vise njih) na KRAJ niza

console.log(myArray);

console.log(myArray[2]); 

console.log(myArray[myArray.length-1]); // ! OVO UVEK mozete koristiti za pristupanje poslednjem elementu niza BEZ da znate njegovu duzinu

console.log(myArray[0]);

console.log(myArray[myArray.length-2]);



// ! Kombinacija Objekata i Nizova

const myStudent = {
    firstName: 'Petar',
    lastName: 'Petrovic',
    age: 25,
    gender: 'male',
    isBudgetStudent: true,
    favoriteBooks: ['LOTR', 'Misery', 'Deca Zla']
};

// Favorite books of IME_PREZIME (GODINE) are NIZ_KNJIGA
console.log(`Favorite books of ${myStudent.firstName} ${myStudent.lastName} (${myStudent.age}) are ${myStudent.favoriteBooks}`);

// Student IME_PREZIME is budget student: TRUE/FALSE
console.log(`Student ${myStudent.firstName} ${myStudent.lastName} is budget student: ${myStudent.isBudgetStudent}`);



// ! UNDEFINED i NULL 

let someVar;

console.log(someVar); // undefined je vrednost npr ne-inicijalizovanih varijabli


someVar = 50;

someVar = null; // null je nepostojeca vrednost, i cesto se dodeljuje varijabli ako hocemo da tu varijablu reset-ujemo (tj obrisemo njenu trenutnu vrednost)

console.log(someVar);




// ! Typeof operator

console.log(typeof(6));  // number (primitivni tip podatka)

console.log(typeof(100.42)); // number 

console.log(typeof(NaN)); // number

console.log(typeof('Welcome!')); // string (primitivni tip podatka)

console.log(typeof(true)); // boolean (primitivni tip podatka)

console.log(typeof(undefined)); // undefined (primitivni tip podatka)

console.log(typeof(null)); // object (slozeni tip podatka)

console.log(typeof(myArray)); // object (slozeni tip podatka (I dalje je Array))

console.log(typeof(myStudent)); // object



// TODO Homework (3. cas)

/**
 * DOMACI 3. cas:
   1. Kreirati varijablu proizvoljnog naziva. U varijablu dodati vrednost koja se dobije tako sto saberu vrednosti 33 (tipa number) i ‘27’ (tipa string). 
        Obezbediti konverziju (parsiranje) string-a u number kako bi se matematicka operacija uspesno izvrsila. Na kraju napraviti novu varijablu u koju cete dodati vrednost 
        koja se dobija parsiranjem dobijenog number-a u string.
   2. Prvu varijablu (tipa number) uvecati za 10 koristeci skraceni tip operatora. Nakon toga istu varijablu dekrementovati za jedan i ispisati konacnu vrednost na konzoli 
        uz ispis ‘Current value is vrednost_varijable’.
   3. Kreirati niz sa od sledecih elemenata: ‘hello’ , ‘planet’ , ‘Jupiter’. Na kraju izvrsiti konkatinaciju ovih stringova i rezultat ispisati na konzoli. (HINT: pogledati concate za nizove)
   4. Kreirati objekat course i u njega dodati property-je: courseName (tipa string) i proizvoljnu vrednost, courseTeacher (tipa string) i proizvoljnu vrednost, duration (tipa number) 
        i proizvoljnu vrednost i languages (tipa array) i proizvoljan niz elemenata.
   5. Ispisati na konzoli kompletan niz elemenata (languages property) iz course objekta.
   6. Ispisati poslednji element istog tog niza na konzoli uz ispis 'Last language is LAST_LANGUAGE'.
   7. Resetovati vrednost varijable iz prvog zadatka na praznu vrednost uz odgovarajuci tip podatka.
   8. Proveriti tip podatka varijable iz prvog zadatka i ispisati na konzoli u formatu 'Type of first variable is TYPE_OF_VARIABLE'.
*/

let randomVar = 33 + +'27';

let randomVarStr = randomVar.toString();

randomVar += 10;

randomVar--;

console.log(`Current value is ${randomVar}`); // 69

let testArray = ['Hello', 'planet', 'Jupiter'];

console.log(`${testArray[0]} ${testArray[1]} ${testArray[2]}!`); // Hello planet Jupiter (DUZI NACIN)

console.log(`Joined strings from array: ${testArray.join(' ')}!`);

const course = {
   courseName: 'Frontend Programming',
   courseTeacher: 'Petar Petrovic',
   duration: 1.5,
   languages: ['JavaScript', 'HTML5', 'CSS3']
}

console.log(course.languages);

// course['languages'];

console.log(`Last language is ${course.languages[course.languages.length-1]}`); // 'CSS3'

randomVar = null;

console.log(`Type of first variable is ${typeof(randomVar)}`); // null jer smo u prethodnoj liniji koda resetovali na null (a to je object tip)




// 5. cas JS-a (23. cas 19.12.2023.)

console.log('------- 5. cas JS-a ---------');

// ! OPERATORI POREDJENJA - vracaju boolean (true ili false)
/*
 1. Loose operator (operator koji labavo poredi vrednosti - poredi samo vrednosti)
 2. Strict operator (operator koji striktno poredi vrednosti - pored i tip podatak i vrednosti)
 3. Operatori poredjenja 'vece manje'
 4. NOT operator
*/

// * Loose operator

console.log(10 == 10); // true

console.log('world' == 'world'); // true

const ex1 = '44';
const ex2 = 44;

console.log(ex1 == ex2); // true, jer poredi samo vrednosti, a ne i tip podatka (jedan je string, drugi je number)

console.log(true == 'true'); // false

console.log(5 != 5); // false


// * Strict operator (! u praksi UVEK treba koristiti ovaj operator)

console.log(10.5 === 10.5); // true

console.log(10.5 === '10.5'); // false

console.log('hello' === 'hello'); // true

console.log(3 !== 3); // false


// *   > , < , >= , <=

console.log(25 > 3); // true
console.log(-15.5 < 0); // true
console.log(5 >= 5); // true
console.log(9 <= 9); // true
console.log(99 < 1); // false 
console.log('4' > 3); // true (! Dakle, radi i kad poredite npr string i number ili string i string)



// * NOT operator (!)

console.log(!false); // true (jer je true suprotno od false)
console.log(!true); // false (jer je false suprotno od true)
console.log(!20 > 10); // false (prvo jer 20 > 10 jeste true, ali negacija od true je false i zato vraca false)


// * Poredjenje stringova

console.log('b' > 'a'); // true
console.log('ab' > 'aa'); // true



// ! STATEMENTI (klauzule)

// 1. IF
// 2. IF - ELSE
// 3. IF - ELSE IF - ELSE

// * IF 

// U IF blok koda upadamo SAMO ako zadati parametar poredjenja vraca truthy vrednost
if (8 > 5) {
    console.log('Broj 8 je veci od broja 5!');
}

if (1 !== 1) {  // ovaj logicki uslov nije tacan i zato ne upada u IF
    console.log('kecevi nisu jednaki');
}



// * IF - ELSE

let myNumb = 100/100 - 1 - 9; // 0

if (myNumb > 0) {
    console.log(`${myNumb} je veci od 0!`);
} else { // ! U else blok upadamo uvek ako u IF blok nismo
    console.log(`${myNumb} nije veci od 0!`);
}



// * IF - ELSE IF - ELSE

if (myNumb > 0) {
    console.log('Broj je veci od 0!');
} else if (myNumb < 0) {
    console.log('Broj je manji od 0!');
} else {
    console.log('Broj je jednak nuli!');
}


// TODO Krzo prompt prozor ukucati neki broj i proveriti da li je taj broj veci/manji/jednak nuli i ispisati odgovarajucu poruku

// const myEnteredNumb = prompt('Please enter your number:'); // ovo vraca uvek STRING, pa za svaki slucaj radimo konvertovanje (cast) u Number
const myEnteredNumb = 10;

if (+myEnteredNumb > 0) {
    console.log(`${myEnteredNumb} je broj veci od nule!`);
} else if (+myEnteredNumb < 0) {
    console.log(`${myEnteredNumb} je broj manji od nule!`);
} else {
    console.log(`${myEnteredNumb} je broj jednak nuli!`);
}


if (myEnteredNumb >= 0) { // ovde ulazimo ako je broj veci od nule ili nula
    if (myEnteredNumb > 0) {
        console.log('Broj je pozitivan');
    } else {
        console.log('Broj je nula');
    }
} else {
    console.log('Broj je negativan');
}



// ! Poredjenje slozenih tipova podataka (objekata i nizova)

const ob1 = {
    name: 'test'
}

const ob2 = {
    name: 'test'
}

console.log(ob1 === ob2); // false (false je jer se slozeni tipovi uvek porede po REFERENCI a ne po vrednosti)

const arr1 = [
    1,2,3
];

const arr2 = [
    1,2,3
];

console.log(arr1 === arr2); // false

const osoba1 = {
    ime: 'Petar',
    prz: 'Petrovic'
}

const osoba2 = {
    ime: 'Petar',
    prz: 'Petrovic'
}

console.log(osoba1 === osoba2); // false


// TODO 5. cas domaci
 /**
  * 1. Kreirati dve varijable tipa number sa vrednostima 30 i 50
  * 2. Uporediti varijable koristeci == i === i rezultate poredjenja ispisati na konzoli
  * 3. Uporediti varijable koristeci != i !== i rezultate poredjenja ispisati na konzoli
  * 4. Rezultat poredjenja iz 2. zadatka invert-ovati uz NOT operator i ispisati na konzoli
  * 5. Kreirati 3. varijablu sa vrednoscu '30' (tipa string)
  * 6. Uporediti varijablu sa vrednoscu 30 (number) i '30' (string) pomocu oba tipa equality operatora
  *    (== i ===), uporediti razlike rezultata poredjenja
  * 7. Kreirati 4. varijablu (npr. promptAnswer) cija se vrednost dobija kroz prompt prozor browser-a (!napomena: ovde se uvek vraca string)
  * 8. Vrednost varijable proveriti kroz if - else if - else uslove i shodno tome ispisati status o varijabli u formatu
  *    `Value ${promptAnswer} is ________`
 */

const v1 = 30;
const v2 = 50;

console.log(`variable1 is equal to variable 2: ${v1 == v2}`); // false
console.log(`variable1 is equal to variable 2: ${v1 === v2}`); // false
console.log(`variable1 is not equal to variable 2: ${v1 != v2}`); // true
console.log(`variable1 is not equal to variable 2: ${v1 !== v2}`); // true

const compareOfVars = v1 === v2; // boolean vrednost smestamo u compareOfVars

console.log(compareOfVars); // false
console.log(!compareOfVars); // true  // ! Revert-ovan false u true pomocu ! znaka (NOT operatora)

const v3 = '30';

console.log(`variable3 is equal to number 30: ${v3 === 30}`); // false
console.log(`variable3 is equal to number 30: ${v3 == 30}`); // true

// const promptAnswer = prompt('Enter your value:');
const promptAnswer = 5;

if (promptAnswer > 0) {
    console.log(`Value ${promptAnswer} is positive.`);
} else if (promptAnswer < 0) {
    console.log(`Value ${promptAnswer} is negative.`);
} else {
    console.log(`Value is zero.`);
}



// 6. cas JS (24. cas) - 21.12.2023.

console.log('---------- 6. cas JS-a (24. cas) -----------');

// ! Visestruki logicki uslovi

// * 1. logicko AND (logicko i) -> && -> ovaj operator kaze da SVI zadati logicki uslovi moraju biti zadovoljeni

    // true && true -> daju true
    // true && false -> daju false
    // false && false -> daju false

// * 2. logicko OR (logicko ili) -> || -> ovaj operator kaze da BAR jedan logicki uslov bude zadovoljen (bar 1 logicki operator mora dati true)

    // true || true -> daju true
    // true || false -> daju true 
    // false || false -> daju false


let t1 = -5;

if (t1 < 0 && t1 === -5) {
    console.log(`Broj ${t1} je ${t1}`);
    t1 = 100;
}

if (t1 > 0 || t1 === 0) {
    console.log(`Broj ${t1} je ili veci od 0 ili jednak nuli.`);
}

// * kombinacija && i ||  -> u ovom slucaju && ima prednost provere

if (t1 > 0 && t1 === 2 || t1 === 9) {
    console.log(`Upao sam u ovaj combo blok 1`);
}

if (t1 > 0 && (t1 === 2 || t1 === 9)) { // ! nacin ako hocete da prvo || proverite , pa tek onda rezultat tog poredjenja da poredite sa &&
    console.log(`Upao sam u ovaj combo blok 2`);
}



// ! Ternarni (kondicioni) operator

// let a1 = t1 < 0; // ! false

// 't1 je manji od 0'
// 't1 je ili veci ili jednak 0'


// ! duzi nacin
// let a1;

// if (t1 < 0) {
//     a1 = 't1 je manji od 0';
// } else {
//     a1 = 't1 je ili veci ili jednak 0';
// }

// ! kraci nacin (uz ternarni operator)
// t1 = -3;

let a1 = t1 < 0
    ? 't1 je manji od 0' 
    : 't1 je ili veci ili jednak 0';

console.log(a1);


// * Kombinacija IF - ELSE blokova i ternarnog operatora

if (t1 < 0) {
    a1 = 't1 je manji od 0';
} else {
    a1 = t1 === 0 
        ? 't1 je 0'
        : 't1 je veci od nule';
}

console.log(a1);



// ! Truty i Falsy vrednostima

/**
 * Falsy vrednosti su: '', ``, "", 0, NaN, false, null, undefined, [], {}
 * Truty vrednosti su: 'sdfhsdajklfh', `a`, 23, -12, true, [1,2,3], {name: 'Marko Markovic'}
 */

let val2 = '';
let val3 = '6. cas JS-a';
let val4 = 15;

if (val2) {
    console.log('prosao falsy test');
    // alert('prosao');
}

if (val3) {
    console.log('prosao truty test');
    // alert('prosao 2');
}

if(val4) {
    console.log('prosao drugi truty test');
}

let val5 = val4 > 0 && val4 === 0
    ? val4
    : '';

console.log(val5);


// ! Tips:

// * 1. truty ili falsy vrednost mozemo da bukvalno pretvorimo u TRUE ili FALSE

let val5E = !!val5;

console.log(val5E); // FALSE 


// * 2. dobijanje vrednosti varijable na osnovu operatora

let uName = 'test@gmail.com';

let myName = uName || 'not-defined@gmail.com';

console.log(myName);

let registeredUser = true;

myName = registeredUser && 'marko@gmail.com';

console.log(myName); // 'marko@gmail.com'



// ! SWITCH CASE

const grade = 10;

switch(grade) {
    case 1:
        console.log('Ocena je 1. 😥');
        break;
    case 2:
        console.log('Ocena je 2. 😣');
        break;
    case 3: 
        console.log('Ocena je 3. 😑');
        break;
    case 4: 
        console.log('Ocena je 4. 😊');
        break;
    case 5:
        console.log('Ocena je 5. 😁');
        break;
    default:
        console.log('Ocena nije u rangu od 1 do 5.');
        break;
}


// TODO Domaci 6. cas

// 1. Prepraviti IF - ELSE IF - ELSE deo u kalkulatoru koristeci SWITCH - CASE
// 2. Kreirati varijablu score i postaviti je na vrednost unetu u prompt prozoru. Potom napraviti scoreRating varijablu
//  - scoreRating varijablu postaviti na 'Excellent' vrednost ako je vrednost score varijable >= od 80
//  - u suprotnom, scoreRating postaviti na 'You can do better' vrednost
//  - KORISTITI TERNARNI OPERATOR ZA OVAJ ZADATAK
// 3. Za prethodni zadatak napraviti IF blok, i proveriti sledece:
//  - Proveriti da li je score >= 80 ILI da li je scoreRating jednak 'You can do better'
//  - U oba ova slucaja (ako je bilo koji zadovoljen) ispisati konzol poruku 'You have passed.'
//  - U suprotnom ispisati konzol poruku 'Try again.'
// 4. Napraviti novu proveru i proveriti sledece:
//  - Da li je score truty vrednost I da li je score >= 80 ILI da li je scoreRating jednak 'Excellent'
//  - Ako je uslov pomenuti tacan ispisati konzol poruku: 'You took and passed the test.'
//  - U suprotnom opet ispisati 'Try again.'

// let score = prompt('Please enter your score');
let score = 80;

let scoreRating = +score >= 80 ? 'Excellent' : 'You can do better';


if (score >= 80 || scoreRating === 'Excellent') {
    console.log('You have passed.')
} else {
    console.log('Try again');
}

if (score && score >= 80 || scoreRating === 'Excellent') {
    console.log('You took and passed the test.');
} else {
    console.log('Try again.');
}


// 7. cas JS-a (24. cas) 28.12.2023.

console.log('--------- 7. cas JS-a (24. cas) ----------');

// ! Petlje (loops)

/**
 * 1. FOR petlja (sluzi za pozivanje nekog koda nekoliko puta u zavisnosti od npr nekog brojaca)
 * 2. FOR OF petlja (sluzi za pozivanje nekog koda nad svakim elementom nekog niza)
 * 3. FOR IN petlja (sluzi za vracanje svih KEY-eva (naziva property-a) nekog objekta i eventualno vrednosti vezane za te kljuceve)
 * 4. WHILE petlja (sluzi za izvrsavanje nekog koda dokle god je odredjeni logicki uslov zadovoljen)
 * 5. DO WHILE petlja
 */


// * 1. FOR petlja

for (let counter = 1; counter <= 5; counter++) {
    console.log(`Counter of current iteration is ${counter}`);
}

// Primer --> program koji racuna zbir prvih 100 prirodnih brojeva

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`Suma prvih 100 prirodnih brojeva je ${sum}`);


// * FOR OF petlja

const programmingLangs = ['Java', 'C#', 'Python', 'JS', 'Ruby']; // length = 5

// 1. nacin - standardan FOR loop

// for (let j = 0; j < programmingLangs.length; j++) {
//     console.log(programmingLangs[j]);
// }

// 2. nacin - uz FOR OF loop

for (let lang of programmingLangs) {
    console.log(lang);
}


const greeting = 'Welcome'; // STRING je NIZ karaktera --> ovaj string ima 7 karaktera (elemenata)

for (let ch of greeting) {
    console.log(ch);
}

// ! pristupanje vrednostima property-a nekog objekta

const testOb = {
    name: 'Test'
};

// console.log(testOb.name);  ! prvi nacin uz DOT sintaksu

console.log(testOb['name']); // ! drugi nacin uz SQUARE BRACKET sintaksu

// * FOR IN petlja

const someUser = {
    name: 'Pera Peric',
    email: 'pera@gmail.com',
    gender: 'male',
    age: 34,
    isStudent: false
};

// for (let prop in someUser) {
//     console.log(prop);
// }

for (let prop in someUser) {
    console.log(`${prop}: ${someUser[prop]}`); // name: 'Pera Peric' , email: 'pera@gmail.com'
}


// * Kombinacija FOR OF i FOR IN petlje

const bankAccTest = {
    owner: 'Petar Petrovic',
    pin: 4444,
    contactPhone: '063333333',
    transactions: [300, -150, 500, -250, 1000]
};

for (let key in bankAccTest) {
    console.log(`${key} : ${bankAccTest[key]}`); // ! DINAMICKO PROLAZENJE KROZ OBJEKAT tj njegove property-e i njihove vrednosti
    if (key === 'transactions') {
        const accTransactionsArray = bankAccTest.transactions;
        for (let i = 0; i < accTransactionsArray.length; i++) {
            let orderNumber = i + 1;
            console.log(`Tvoja transakcija ${orderNumber}. = ${accTransactionsArray[i]}`)
        }
    }
}


// * WHILE petlja

// ! Primer BESKONACNE petlje - beskonacna je jer logicki uslov je uvek zadovoljen (vrednost provere uvek spada u Truty grupu vrednosti)
// let isUserLoggedIn = true;
let m2 = 0;

// while (isUserLoggedIn) {
//     console.log(m2);
//     m2++;
// }

while (m2 < 5) {
    console.log(m2);
    m2++;
}

// * DO - WHILE petlja

m2 = 0;

do {
    console.log(m2);
    m2++;
} while (m2 < 5);



// * CONTINUE - sluzi ako hocemo da preskocimo odredjenu iteraciju neke petlje

for (let u = 0; u <= 5; u++) {
    if (u % 2 !== 0 || u === 0) {
        continue;
    }
    console.log(`u = ${u}`);
}



// * TRY - CATCH - FINALLY sintaksa (blokovi)
let isDataLoaded = false; // npr ova varijabla utice na vrtenje spinner-a dok cekamo podatke (trenutno se vrti jer podaci nisu ucitani)

try {
    // npr neki async poziv ka bekendu (dobavljanje podataka sa servera)
    console.log('marko');
    // console.log(adsfsd);
} catch (error) {
    console.log(error.name + ' --> ' + error.message);   // npr ispisemo gresku ako nam server iz nekog razloga ne vraca ili ne da podatke
} finally {
    isDataLoaded = true; // ovde bez obzira na to da li su podaci ucitani ili smo uhvatili neku gresku u catch bloku, nas spinner svakako staje sa vrtenjem
}


// TODO 7. cas JS-a domaci:

// 1. Uporediti vrednost kreirane varijable (const someNum = prompt('Please enter your number')) pomocu ternarnog operatora tako da se ispise da li je broj pozitivan ili negativan
// 2. Dodati OR (||) logicki operator kako bi se proverilo da li je someNum vrednost nula ili veca od nule i rezultat ispisati na konzoli zajedno
// 3. Dodati breakpoint u prethodnom izvrsavanju if bloka i utvrditi potencijalnu gresku na osnovu iscitavanja vrednosti

// 4. za svaku liniju koda u nastavku ispisati sta vraca:
// 
//     const userEmail = 'marko@gmail.com';
//     const backupEmail = '';
//     console.log(userEmail === 'marko@gmail.com');
//     console.log(userEmail);

//     console.log(userEmail || null);
//     console.log(backupEmail || 'milan@gmail.com');
//     console.log(backupEmail || '');
//     console.log(backupEmail || null || 'petar@gmail.com');

//     console.log(userEmail && 'petar@gmail.com');
//     console.log(backupEmail && 'petar@gmail.com');
//     console.log(userEmail && ''); 
//  
//

// 5. Kreirati varijablu "dayOfTheWeek" i postaviti na danasnji dan (hardkodovati, npr: 'tuesday'). Promeniti case-ove switch opcijom i u skladu sa tim ispisati vrednost na konzoli.

// 6. Ispisati proizvod svih brojeva od 1 do 10

// 7. Kreirati niz "foreignLanguages" i 3 jezika dodati u njega. Svaki jezik treba da ima svoj naziv i recenicu na tom jeziku. 

// 8. Nakon toga, proci kroz niz jezika i ispisati svaki element u formatu:
//    'Here is a sentence on LANGUAGE_NAME : LANGUAGE_SENTENCE'

// 9. Za PRVI jezik iz foreignLanguages dodati (nalepiti) jos jedan property -> teachers niz nastavnika koji predaju jezik (3). 
// Za svakog od nastavnika napraviti property firstName i lastName i dodeliti neke vrednosti.

// 10. Ispisati redni broj nastavnika te njegovo ime i prezime i taj jezik koji predaje u formatu:
// Teacher number BROJ : IME PREZIME is teaching JEZIK

// 1. zadatak

// const someNum = prompt('Please enter your number:');
const someNum = 50;

let answerSomeNum = someNum > 0 ? `${someNum} is positive!` : `${someNum} is negative!`;

console.log(`1. zadatak: ${answerSomeNum}`);

// 2. i 3. zadatak

if(someNum === 0 || someNum > 0) {
  console.log(`${someNum} is either equal to 0 or positive value!`);
}

// 4. zadatak

const userEmail = 'marko@gmail.com';
const backupEmail = '';
console.log(userEmail === 'marko@gmail.com'); // ! vraca -> true
console.log(userEmail); // ! vraca -> 'marko@gmail.com'

console.log(userEmail || null); // ! vraca -> 'marko@gmail.com'
console.log(backupEmail || 'milan@gmail.com'); // ! vraca -> 'milan@gmail.com'
console.log(backupEmail || ''); // ! vraca -> ''
console.log(backupEmail || null || 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'

console.log(userEmail && 'petar@gmail.com'); // ! vraca -> 'petar@gmail.com'
console.log(backupEmail && 'petar@gmail.com'); // ! vraca -> ''
console.log(userEmail && ''); // ! vraca -> ''



// 5. zadatak

const dayOfTheWeek = 'tuesday';

switch(dayOfTheWeek) {
  case 'monday':
      console.log(`Today is Monday!`);
      break;
  case 'tuesday':
      console.log(`Today is Tuesday!`);
      break;
  case 'wednesday':
      console.log(`Today is Wednesday!`);
      break;
  case 'thursday':
      console.log(`Today is Thursday!`);
      break;
  case 'friday':
      console.log(`Today is Friday!`);
      break;
  case 'saturday':
      console.log(`Today is Saturday!`);
      break;
  case 'sunday':
      console.log(`Today is Sunday!`);
      break;
}

// 6. zadatak

let multiplyResult = 1;

for(let j = 1; j <= 10; j++) {
  multiplyResult *= j;
}

console.log(`Result of multiplying first 10 numbers ${multiplyResult}`); // Result of multiplying first 10 numbers 3628800


// 7. zadatak
const foreignLanguages = [
  {name: 'English', sentence: 'This is some sentence on English.'},
  {name: 'German', sentence: 'JS ist sehr gut.'},
  {name: 'Latin', sentence: 'Lorem ipsum dolor sit amet.'}
];

// 8. zadatak
for(let language of foreignLanguages) {
  console.log(`Here is a sentence on ${language.name} : ${language.sentence}`);
}

// 9. zadatak
foreignLanguages[0].teachers = [
  {firstName: 'Marko', lastName: 'Markovic'},
  {firstName: 'Petar', lastName: 'Petrovic'},
  {firstName: 'Sara', lastName: 'Saric'}
]

// 10. zadatak
const teachersArr = foreignLanguages[0].teachers;
for(let i=0; i < teachersArr.length; i++) {
  console.log(`Teacher number ${i+1}: ${teachersArr[i].firstName} ${teachersArr[i].lastName} is teaching ${foreignLanguages[0].name}`);
}


// ! 8. cas JS-a (26. cas)

console.log('-------------- 8. cas JS-a (26. cas) -------------');

// * Primitivni (vrednosni) tipovi podataka:
/*
    1. Number
    2. String
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
*/

let testBool = true;
let testBool2 = testBool;

// * Slozeni (referentni) tipovi podataka:
/*
    1. Funkcije
    2. Nizovi
    3. Objekti
*/

let testObj = {
    name: 'Petar Petrovic',
    age: 30
}

let testObj2 = testObj;

testObj.age = 40;

console.log(testObj);
console.log(testObj2);

// ! Funkcije

const personObj = {
    name: 'Marko Markovic',
    sayHello: function() {
        console.log('Hello !'); // Ova funkcija jeste METODA objekta personObj
    }
}

personObj.sayHello();


// * Function declaration (deklarisanje funkcija)

function myFunc(x) {
    return `Kvadratni koren broja ${x} je ${Math.sqrt(x)}`;
}

console.log(myFunc(9));

// * Function expression (ekspresija funkcija) - dozvoljava smestanje funkcija u varijable

const myFunc2 = function(x, y) {
    return x*y;
}

console.log(myFunc2(5,2));


// * Hoisting (podizanje koda) :
/**
 * 1. Kod deklarisanih funkcija funkcionise tako sto funkcije bivaju podignute na nivou svog scope-a, 
 *      a to znaci da funkcija kreiranu na ovaj nacin mozete pozvati i PRE nego sto je deklarisete.
 * 2. Kod izrazenih funkcija hoisting ne radi. To znaci da ne mozete pozvati neku funkciju (kreiranu na ovaj nacin)
 *      pre nego sto je ona definisana u kodu.
*/

helloW();

function helloW() {
    console.log('Hello WOrld');
}

// helloS(); // ! Cannot access 'helloS' before initialization

const helloS = function() {
    console.log('Zdravo!');
}


const getCurrentYear = function() {
    const date = new Date(); // pravimo instancu Date klase
    return date.getFullYear();
}

console.log(getCurrentYear());


// ! Anonimne funkcije - su funkcije koje nemaju naziv, i najcesce se koriste kao callback funkcije drugih funkcija
// Primeri: setTimeout, setInterval, za neki listener

setTimeout(function() {
    console.log('Pozivam se nakon 2 sekunde.')
},2000);

// setInterval(function() {
//     console.log('Testing set interval')
// }, 3000);

const btnMultiplyTest = document.getElementById('btn-multiply');

btnMultiplyTest.addEventListener('click', function() {
    alert('Your button is working!');
});


// ! Arrow funkcije ( (x,y) => {x*y} )

const myFirstArrowFunc = (s,v) => {
    return s+v;
}

console.log(myFirstArrowFunc(20,30));

const addNumbers = (s,v) => s+v;
const divideNumbers = (s,v) => s/v;

console.log(addNumbers(10,5));
console.log(divideNumbers(10,5));

const noParamFunc = () => {
    console.log('Nemam parametre, a opet radim :)');
}

noParamFunc();

const oneParamFunc1 = (z) => {
    if (typeof z !== 'number') {
        alert('You must pass a number!');
        return;
    }
    return Math.sqrt(z);
}

console.log(oneParamFunc1(25));

const oneParamFunc2 = (z) => Math.sqrt(z);

console.log(oneParamFunc2(36));

const oneParamFunc3 = z => Math.sqrt(z); // ! ovo moze bez oblastih zagrada SAMO ako imate 1 parametar

console.log(oneParamFunc3(100));

// TODO 8. cas JS-a ZADATAK ZA VEZBU:
/*
    1. Prepraviti sledecu funkciju:
 * 
 *          function sumUp(a, b) {
 *              return a + b;
 *          } 
 * 
 *     u format ARROW funkcije.
 * 
 *  2. U istu funkciju (sumUp) za parametar b dodati default vrednost, koja ce biti koriscena u slucaju da se vrednost
 *      ne prosledi (npr 0).
 * 
 *  3. Kreirati u DOM-u dva button-a (Start Counting i Stop Counting).
 *  4. Kreirati po jedan event za ta oba button-a.
 *  5. Kada se klikne start counting button, na svaki sekund neka se na konzoli ispise trenutna vrednost counter-a.
 *  6. U momentu kada se klikne na stop counting button, ispisivanje na konzoli counter-a treba da prestane.
*/

// * 1. nacin
const sumUpArrow = (a,b) => {
    return a+b;
}

// * 2. nacin
const sumUpArrow2 = (a,b) => a+b;

console.log(sumUpArrow(3,4));
console.log(sumUpArrow2(6,5));


const sumUp2 = (a=0,b=0) => a+b;

console.log(sumUp2());


const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
let myCounter = 0;
let isStopCounting = false;

btnStart.addEventListener('click', () => {
    setInterval(() => {
        if (!isStopCounting) {
            ++myCounter;
            console.log(`Counter is ${myCounter}`);
        }
    }, 1000);
});

btnStop.addEventListener('click', () => {
    isStopCounting = true;
});



// ! 9. cas (JS-a) (27. cas) 09.01.2024.

console.log('-------------- 9. cas JS (27. cas) ----------------');

// ! Nizovi

// 1. nacin kreiranja niza u JS-u
const arrOfNums = [1,2,3];

// 2. nacin kreiranja niza (uz pomocu konstruktora klase Array)
const arrOfNums2 = new Array(4,5,6);

// 3. nacin kreiranja niza
// npr neka FileList (myFileList)

// const myFileListArr = Array.from(myFileList);

const mixedExampleArr = [
    1, 'Hello', false, {name: 'Test'}, [10,15,20]
]

for (let el of mixedExampleArr) {
    if (Array.isArray(el)) { // ! Nacin kako da proverite da li je neka vrednost tipa Array
        for (let underEl of el) {
            console.log(underEl);
        }
    }
}


// ! Array metode

// ! 1. PUSH - dodaje element na KRAJ niza i vraca novu duzinu niza

const pushExampleArr = [1,2,3];

let pushExampleArrLength = pushExampleArr.push(4);

console.log(`Nova duzina push example niza je ${pushExampleArrLength}`);


// ! 2. UNSHIFT - dodaje element na POCETAK niza i vraca novu duzinu niza

const unshiftExampleArr = [1,2,3];

let unshiftExampleArrLength = unshiftExampleArr.unshift(0);

console.log(`Nova duzina unshift example niza je ${unshiftExampleArrLength}`);


// ! 3. POP - uklanja element sa KRAJA niza, ali i vraca sam element koji je izbacen

const popExampleArr = [10,11,12];

let popedEl = popExampleArr.pop();

console.log(popedEl); // 12 dobijamo jer je on izbacen pozivom POP metode nad nasim nizom


// ! 4. SHIFT - uklanja element sa POCETKA niza, i vraca element koji je uklonjen

let shiftedEl = popExampleArr.shift();

console.log(shiftedEl);

console.log(popExampleArr); // [11]


// * Dodavanje elementa na tacno odredjeno mesto

popExampleArr[1] = 30;

console.log(popExampleArr);


popExampleArr[1] = 40; // sada broj 40 POTPUNO menja broj 30 koji je do ovog momenta bio na indeksu 1 (tj na poziciji 2 u nizu)

console.log(popExampleArr);


popExampleArr[10] = 111;

console.log(popExampleArr); // u ovom slucaju, JS pravi 8 praznih placeholder-a izmedju poslednjeg indeksa i onog koji smo dodali


popExampleArr[6] = 'hi';

console.log(popExampleArr); // (11) [11, 40, empty × 4, 50, empty × 3, 111]


// ! SPLICE - koristi se za nekoliko stvari:

// a) uklanja odredjeni broj elemenata iz niza OD odredjenog indeksa i kreira novi niz od tih obrisanih elemenata

const langs = ['English', 'Serbian', 'Japanese', 'Korean', 'German'];

console.log('Original array of langs -> ' + langs);

const extractedLangs = langs.splice(2, 2);

console.log(langs); // ['English', 'Serbian', 'German']

console.log(extractedLangs); // ['Japanese', 'Korean']


// b) moze da se koristi i za dodavanje elemenata na tacno odredjeno mesto

langs.splice(2, 0, 'Norwegian');

console.log(langs); // ovo ne brise 'German' element, veca ga gurne u desno pa je rezultat -> ['English', 'Serbian', 'Norwegian', 'German']


// c) moze da se koristi i za brisanje svih elemenata nekog niza

extractedLangs.splice(0); // brisemo SVE elemente pocevsi od prvog (posto je on na indeksu 0)

console.log(extractedLangs); // []



// d) moze se korisitti i za brisanje elemanta sa kraja niza prosledjivanje negativnog indeksa

langs.splice(-1, 1); // brise samo poslednji element (jer od njega krecemo zbog indeksa -1, a deleteCount je 1)

console.log(langs); // ['English','Serbian', 'Norwegian']


// ! SLICE - vraca kopiju odredjenog dela niza ili celog niza

const sliceArrExample = [1,2,3,4,5,6,7,8,9,10];

// a) vracanje kopije dela niza

const portionOfSliceArr = sliceArrExample.slice(0, 2);

console.log(sliceArrExample); // [1,2,3,4,5,6,7,8,9,10] ostaje isti

console.log(portionOfSliceArr); // [1,2] -> jer slice radi kopiranje od indeksa do indeksa (bez tog DO indeksa)


// b) vracanje kopije celog niza (ali shallow kopije):

const portionOfSliceArr2 = sliceArrExample.slice();

sliceArrExample.push(100);

console.log(sliceArrExample); // length je 11 (kod originala)
 
console.log(portionOfSliceArr2); // length je 10 (kod kopije)


const arrOfObjects = [
    {
        name: 'Petar'
    }, {
        name: 'Marko'
    }
];

const arrOfObjectsCopy = arrOfObjects.slice();

arrOfObjects.push({
    name: 'Nikola'
});

console.log(arrOfObjects); // length je 3
 
console.log(arrOfObjectsCopy); // length je 2



// ! CONCAT - metoda koja spaja elemente nizova

const allArray = arrOfObjects.concat(sliceArrExample, langs);

console.log(allArray);



// ! INDEX_OF i LAST_INDEX_OF metode - metode koje vracaju indekse elemenata

// najcesce se koristi kada hocete da dobijete indeks elementa koji potom hocete da obrisete iz nekoga niza

const indexOf100 = sliceArrExample.indexOf(100);

console.log(`Index broja 100 u nizu brojeva je ${indexOf100}`);

sliceArrExample.splice(indexOf100, 1);

sliceArrExample.splice(4, 0, 10);

console.log(sliceArrExample);

const lastIndexOf10 = sliceArrExample.lastIndexOf(10);

console.log(lastIndexOf10); // 10 (jer je to indeks POSLEDNJE pojave broja 10 u ovom nizu)

console.log(sliceArrExample.indexOf(999)); // -1 vraca jer 999 nemamo kao element u nasem nizu

if (sliceArrExample.indexOf(50) !== -1) {
    alert('broj 50 postoji u nizu'); // ! ovde nikada ne ulazimo jer broj 50 NE POSTOJI u nizu, odnosno njegov indexOf je -1
}



// ! u slucaju referentnih tipova podataka indexOf i lastIndexOf ne funkcionisu

const myStudents = [
    {
        name: 'Sara',
        age: 25
    },
    {
        name: 'Petar',
        age: 25
    },
    {
        name: 'Milan',
        age: 28
    }
];

console.log(myStudents.indexOf({
    name: 'Petar',
    age: 22
})); // -1 , jer indexOf ne funkcionise nad referentnim tipovima podataka



// ! FIND i FIND_INDEX metode

// ! FIND - metoda vraca PRVI element koji zadovoljava uslov pretrage

const femaleStudent = myStudents.find((s) => {
    return s.age === 25;
});

console.log(femaleStudent);


const milan = myStudents.find(student => student.name === 'Milan'); // dobar primer da FIND mozete korisitit i u 1 liniji koda

console.log(milan);


// ! FIND_INDEX - vraca indeks elementa koji trazimo na osnovu nekog uslova pretrage

const idxOfPetar = myStudents.findIndex(student => student.name === 'Petar');

console.log(`Petrov index je ${idxOfPetar}`);


// ! INCLUDES - metoda proverava da li odredjeni element postoji u nizu

const is100 = allArray.includes(100);

const isWorld = allArray.includes('World');

console.log(is100);

console.log(isWorld);


// * Provera da li odredjeni element postoji u nizu:
// a) includes()
// b) indexOf ili findIndex


// TODO Domaci

/**
 *  1. Kreirati niz sa artiklima u radnji (svaki artikl ima svoj naziv i svoju cenu)
 *  2. Dodati u niz artikala jos 2 elementa, jedan na pocetak, a drugi na kraj niza 
 *  3. Na trece mesto u nizu dodati novi artikl, ali tako da se trenutno treci element NE OBRISE, vec samo pomeri za jedno mesto udesno
 *  4. Obrisati poslednji element iz niza
 *  5. Kreirati novi niz na osnovu samo poslednja tri elementa iz artikala
 *  6. Iz tog novog niza, odvojiti samo prva dva elementa u novi niz
*/

const articles = [
    {
        name: 'Bread',
        price: 50
    },
    {
        name: 'Bannanas',
        price: 30
    },
    {
        name: 'Yogurt',
        price: 10
    }
 ]
 
 // 2.
 articles.push({
    name: 'Milk',
    price: 6
 });
 
 articles.unshift({
    name: 'Chocolate',
    price: 12.55
 });
 
 
 // 3.
 articles.splice(2,0, {
    name: 'Orange Juice',
    price: 50
 });
 
 console.log('articles', articles);
 
 
 // 4.
 
 // articles.pop();
 
 articles.splice(-1,1);
 
 console.log('articles', articles);
 
 
 // 5.
 
 const lastThreeArticles = articles.slice(-3);
 
 console.log(lastThreeArticles);
 
 // 6.
 
 const firstTwoArticles = lastThreeArticles.slice(0,2);
 
 console.log(firstTwoArticles);



 // ! 10. cas (JS-a) (28. cas) 11.01.2024.

console.log('-------------- 10. cas JS (28. cas) ----------------');

// ! ForEach --> metoda koja se poziva nad svakim elementom nekog niza

const myTransactions = [150, -500, 600, -250, -100];

// * 1. nacin

for (let tr of myTransactions) {
    console.log(`${tr} $`);
}

console.log('drugi nacin ispod');

// * 2. nacin

for (let i = 0; i < myTransactions.length; i++) {
    console.log(`${myTransactions[i]} $`);
}

console.log('treci nacin ispod');

// * 3. nacin

myTransactions.forEach((transaction, i) => {
    console.log(`${++i}. = ${transaction} $`);
});


// TODO Na svaku transakciju iz myTransactions niza ukalkulisemo proviziju bankomata od 5 % i te transakcije sa provizijom dodamo u novi niz

const provision = 0.05;
const myTransactionsWithProvision = [];

myTransactions.forEach(tr => {
    // const provisionVal = Math.abs(tr * provision); // ! Math.abs() za prosledjeni argument (broj) vraca ABSOLUTNU vrednost (tj uvek pozitivni broj)
    const provisionVal = tr * provision;
    const trWithProvision = provisionVal + tr;
    myTransactionsWithProvision.push(trWithProvision);
});

console.log('Transakcije sa uracunatim provizijama (od 5 %)');

myTransactionsWithProvision.forEach((tr, i) => {
    console.log(`${++i}. = ${tr} $`);
});

// TODO Svaku transakciju sa provizijom zabelezimo njenu poziciju i iznos i to sve dodamo u novi niz

const myTransactionsRecords = [];

myTransactionsWithProvision.forEach((tr, i) => {
    const trObj = {
        position: i+1,
        value: `${tr} $`
    }
    myTransactionsRecords.push(trObj);
});

console.log(myTransactionsRecords);



// ! MAP - metoda koja prihvata kao svoj argument callback funkciju koja transformise svaki element niza i vraca novi transofrmisani niz elemenata

const letters = ['a', 'b', 'c', 'd', 'e'];
// hint : za transformaciju mozete korisiti toUpperCAse() metodu -> 'a'.toUpperCase()

const upperCaseLetters = letters.map(letter => {
    return letter.toUpperCase();
});
console.log(letters); // ovaj niz ostaje netaknut
console.log(upperCaseLetters) // ovaj niz sadrzi velika slova prethodnog niza

const myNumbers = [40,30,100,90];

const transformedNumbers = myNumbers.map(br => br * 3);

console.log(transformedNumbers);

console.log('Normalne cene');

const normalPrices = [100, 200, 150, 500, 77.4];
console.log(normalPrices);

const taxVal = 0.08;

// * duzi nacin
// const pricesWithTax = normalPrices.map(price => {
//     const taxToAdd = taxVal + 1;
//     const priceCalculated = price * taxToAdd;
//     return priceCalculated;
// });

// * kraci nacin
const pricesWithTax = normalPrices.map(price => +(price * (1 + taxVal)).toFixed(2)); // * toFixed() metoda zaokruzuje na zadati broj decimala i vraca String zapis tog broj

console.log(pricesWithTax);


const basketItems = [
    {
        name: 'IKEA Chair',
        price: 50.0,
        color: 'black'
    },
    {
        name: 'IKEA Table',
        price: 150.50,
        color: 'white'
    },
    {
        name: 'IKEA glass',
        price: 23.00,
        color: 'transparent'
    }
];


const basketNamesArray = basketItems.map(item => item.name);

console.log(`Dodali ste u korpu: ${basketNamesArray}`);



// ! SORT - metoda koja sortira i mutira (menja) niz nad kojim je sort metoda i pozvana

const myNums = [10, 23, 11, 4.2, 5, 123, 0, 55];

// * 1. nacin sortiranja (rastuce - ascending)

myNums.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});

console.log(myNums);

// * 2. nacin sortiranja (rastuce - ascending)

myNums.sort((a, b) => {
    return a-b;
});

console.log(myNums);

// * descending - opadajuci sort

myNums.sort((a,b) => {
    return b-a;
})

console.log(myNums);


// ! REVERSE - metoda koja revers-uje niz

myNums.reverse();

console.log(myNums);


// ! FILTER - metoda koju mozete koristiti za potrebe filtriranja niza vracajuci samo elemente koji zadovoljavaju odredjeni postavljeni logicki uslov

const areBiggerThenTen = myNums.filter(num => num > 10);

console.log(areBiggerThenTen);


// TODO Sabrati sve elemente u nizu areBiggerThenTen

// ! stari nacin - uz for petlju
// let sumOfNums = 0;

// for (let n of areBiggerThenTen) {
//     sumOfNums += n;
// }

// console.log(`Zbir brojeva je ${sumOfNums}`)


// ! REDUCE - metoda koja redukuje niz na jednu vrednost na osnovu uslova koji napisemo

let sumOfNums = areBiggerThenTen.reduce((prevVal, currVal) => {
    return prevVal += currVal;
}, 0);

console.log(`Zbir brojeva je ${sumOfNums}`);



// ! FLAT - metoda koja na povrsinu niza PRVOG reda izvlaci elemente podnizova

const arrWithArrays = [
    [4,5,1],
    [10,20,30],
    ['Str', 'Hello', 5]
];

const flatArray = arrWithArrays.flat();

console.log(flatArray); // [4,5,1,10,20,30,'Str','Hello',5]

const arrWithArrays2 = [
    [4,5,1],
    [10,20,30],
    ['Str', 'Hello', 5, [100,200]]
];

const flatArray2 = arrWithArrays2.flat(2);

console.log(flatArray2);


// TODO Domaci 10. cas JS-a (28. cas)
/**
 *  1. Kreirati poseban niz koji je spoj poslednja dva niza dobijena (iz 5. i 6. zadatka iz PRETHODNOG domaceg)
 *  2. U nizu artikala, pronaci artikl koji se naziva 'Yogurt' i smestiti ga u varijablu 'yogurt'
 *  3. Pronaci indeks artikla koji ima cenu 30
 *  4. Nad svakim artiklom dodeliti novi property 'formatedPrice' koji ce sadrzati prefiks '$' i cenu tog artikla
 *  5. Kreirati novi niz koji ce sadrzati sve cene svakog artikla.
 *  6. Proveriti da li se u novom nizu svih cena nalazi ijedna cena koja iznosi 7 i ispisati odgovor u formatu 'cena 7 postoji' ili 'cena 7 ne postoji'
 *  7. Za svaku cenu obracunati dodatan PDV (npr. od 8 %) i dodati ga na postojecu cenu i za svaku cenu dodati njen redni broj u nizu
*/

// 1.

const concatedArticles = lastThreeArticles.concat(firstTwoArticles);

console.log('Concated articles', concatedArticles);


// 2.

const yogurt = articles.find(article => article.name === 'Yogurt');

console.log('Yogurt', yogurt);


// 3.

const ofPrice30 = articles.findIndex(article => article.price === 30);

console.log('Off price 30', ofPrice30);

articles.splice(ofPrice30, 1);

console.log(articles);


// 4.

articles.forEach(article => article.formattedPrice = `$ ${article.price}`);

console.log(articles);



// 5.

const allPrices = [];
articles.forEach(article => allPrices.push(article.price));

console.log(allPrices);


// 6.

const isPrice7 = allPrices.includes(7) ? 'cena 7 postoji' : 'cena 7 ne postoji';

console.log(isPrice7);


// 7.

const pricesWithPDV = [];

allPrices.forEach((price, idx) => {
    const priceObj = {
        number: idx+1,
        price: price * (1+0.08)
    }
    pricesWithPDV.push(priceObj);
})

console.log(pricesWithPDV);