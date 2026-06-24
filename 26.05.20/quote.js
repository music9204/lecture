const quote = document.querySelector("#quote span:first-child")
const from = document.querySelector("#quote span:last-child")

const quotes = [ 
    { quote: 'I just wanted to take another look at you', from: 'A star is born' }, 
    { quote: "The greatest thing you'll ever learn is just to love and be loved in return", from: 'Moulin Rouge' }, 
    { quote: "It's only after we've lost everything that we're free to do anything", from: 'Fight Club, Tyler Durben' }, 
    { quote: 'It is not our abilities that show what we truly are, it is our choices', from: 'Dumbledore, Harry Potter' }, 
    { quote: 'The past can hurt, but you can either run from it, or learn from it', from: 'Lion King' }, 
    { quote: "If we didn't do what we loved, we wouldn't exist", from: 'Adonis' }, 
    { quote: "At some point you've got to decide for yourself who you gonna be. Can't let nobody make that decision for you", from: 'Juan, Moonlight' }, 
    { quote: 'Every man dies, not every man really lives', from: 'Braveheart' }, 
    { quote: 'Ideals are peaceful, history is violent', from: 'Don Collier, Fury' }, 
    { quote: "A boy's best friend is his mother", from: 'Anthony Perkins, Psycho' }, 
    { quote: 'Carpe Diem, Seize the day. Make your lives extraordinary.', from: 'Robin Williams, Dead Poets Society' }, 
    { quote: "There's no place like home", from: 'The Wizard of Oz' }, 
    { quote: "I don't regret the things I've done, but those I did not do", from: 'Empire Records' }, 
    { quote: 'All we have to decide is what to do with the time that is given to us', from: 'Gandalf, Lord of the rings' }, 
    { quote: 'What we do in life echoes in eternity', from: 'Maximus, Gladiator' }, 
    { quote: 'Being Human is a condition which requires an anesthetic', from: 'Freddie, Bohemian Rhapsody' }, 
    { quote: "Just because something works doesn't mean it can't be improved", from: 'Shuri, Black Panther' }, 
    { quote: "If I'm black enough and if I'm not white enough then tell me what am I", from: 'Don Shirley, Green Book' }, 
    { quote: 'The best way to guarantee a loss is to quit', from: 'Morgan Freeman' }, 
    { quote: 'Good words, good thoughts and good deeds', from: 'Bomi Bulsara, Bohemian Rhapsody' }, 
    { quote: "We need to fail. We need to fail down here so we don't fail up there", from: 'Neil Armstrong, First man' }, 
];

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)]

// 반올림 round
// 올림 ceil
// 내림 floor

quote.innerText = todaysQuotes.quote
from.innerText = todaysQuotes.from

//일정시간이 지나면 이미지 랜덤으로 바뀌는거 숙제