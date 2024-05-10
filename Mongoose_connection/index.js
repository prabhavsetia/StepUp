// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/StepUp');

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log("We are connected....");


    const kittySchema = new mongoose.Schema({
        name: String
    });

    kittySchema.methods.speak = function speak() {
        const greeting = this.name
            ? 'Meow name is ' + this.name
            : 'I don\'t have a name';
        console.log(greeting);
    };

    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({ name: 'shiro' });
    const fluffy = new Kitten({ name: 'fluffy' });
    const churo = new Kitten({ name: 'churo' });
    // console.log(silence.name); // 'Silence'
    // silence.speak();

    //save them to db
    // await silence.save();
    // silence.speak();
    // await fluffy.save();
    // fluffy.speak();
    // await churo.save();
    // churo.speak();

    // const kittens = await Kitten.find();//to find all 
    // console.log(kittens);

    // const fluFind= await Kitten.find({ name: "fluffy" });//find specific kitten
    // console.log(fluFind);
}