import { createInterface } from 'readline';

let car = {
    type: "sedan",
    color: "red",
    doors: 4,
    engineType: "gas",
    cylinders: 4,
    capacity:"2000cc"
    };

    console.log(car);

    let rl = createInterface(process.stdin, process.stdout);

    rl.question(`Property's name? `, (propertyName) => {
        rl.question(`${propertyName} value? `, (newValue) => {
            car[propertyName] = newValue;
            console.log(car);
            rl.close();
        })
    }
    );