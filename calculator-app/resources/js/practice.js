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