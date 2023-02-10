const string = require('@hapi/joi/lib/types/string')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: string,
        required: true,
        max: 255
    },
    apaterno: {
        type: string,
        required: true,
        max: 255
    },
    amaterno: {
        type: string,
        required: true,
        max: 255
    },
    email: {
        type: string,
        required: true,
        max: 255
    },
    password: {
        type: string,
        required: true,
        minlenght: 6,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)
