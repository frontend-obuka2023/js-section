// ! ASYNC JS

// ! Sinhrone operacije

console.log(1);

console.log(2);

console.log(3);



// ! Asinhrone operacije

console.log(1);

setTimeout(() => {
    console.log(2);
}, 2000);

console.log(3);



// ! NAPOMENA:
// ! Nije svaka funkcija koja koristi callback funkciju asinhrona

const numbers = [300,400,500,600];

console.log(1);

numbers.forEach(num => console.log(num)); // ! forEach nije asinhrona operacija iako koristi callback funkciju

console.log(3);



// * Na primer:

console.log('Started logging in');

// ovo bi bila asinhrona operacija
const loginUser = (email, password) => {
    setTimeout(() => {
        return {
            email,
            password
        }
    }, 1000);
};

const userCredentials = loginUser('marko@gmail.com', '1234');

console.log(userCredentials); // ! ispis je: undefined

console.log('Finished loggin in');



// * Nacini resavanja ovog problema (undefined vrednosti)

// * 1. Callback funkcije

const loginUserWithCallback = (email, password, callback) => {
    setTimeout(() => {
        callback({
            email,
            password
        })
    }, 2000);
}

const userCredentialsWithCallback = loginUserWithCallback('marko@gmail.com', '1234', (user) => {
    console.log(user);
});

const getPostsByUser = (email, callback) => {
    setTimeout(() => {
        callback(
            ['slika_1', 'slika_2']
        )
    }, 2000);
}

const postsByUser = loginUserWithCallback('petar@gmail.com', '1234', (user) => {
    getPostsByUser(user.email, (posts) => {
        console.log(posts);
    });
});

// ! Ovde moze nastati tzv CALLBACK HELL, npr:

// const postsByUser2 = loginUserWithCallback('petar@gmail.com', '1234', (user) => {
//     getPostsByUser(user.email, (posts) => {
//         getPostsByUser(user.email, (posts) => {
//             getPostsByUser(user.email, (posts) => {
//                 console.log(posts);
//             });
//         });
//     });
// });


// * 2. nacin - PROMISE - objekat koji ili vraca rezultat uspesno izvrsene operacije ili rezultat neuspesno izvrsene operacije.

// * Promise moze da bude u 3 stanja:
/**
 * 1. PENDING (stanje cekanja)
 * 2. RESOLVED (stanje razresenosti)
 * 3. REJECTED (stanje odbacenosti)
 */

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Marko Markovic',
        //     age: 30
        // });
        reject(new Error('Error occurred while fetching the data from the server!'));
    }, 7000);
});

promise
    .then(user => console.log(user))
    .catch(error => console.log(error.message));


