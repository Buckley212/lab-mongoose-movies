const mongoose = require("mongoose");
const Celebrity = require('../models/celebrity');
require('../app')

let celebrities = [
    { name: 'Kim Kardashian', occupation: 'Famous person', catchPhrase: 'I am Kim' },
    {name : 'Beyonce', occupation: 'Musician', catchPhrase: 'All the single ladies'},
    {name : 'Kanye West', occupation: 'Musician', catchPhrase: 'We the rockstars'}
]

Celebrity.insertMany(celebrities).then(res => console.log(res))

