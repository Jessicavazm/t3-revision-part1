console.log("Hello world");

const person = {
    name: 'Jess',
    age: 31,
    city: 'Melbourne',
    contact: {
        tel: 40304333,
        cel: 482282297,
        voiceMailMessage: function () {
            console.log("This message comes from a nested object.")
        }
    }
};

console.log(person.contact.voiceMailMessage);

console.log(Object.keys(person));