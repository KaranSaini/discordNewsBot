const fetch = require('node-fetch')
const Discord = require('discord.js')
const NEWS_TK = process.env.NEWS_TK

/*
    The structure for this command will be 
    
    -news search [query]
*/


module.exports = {
    name: 'search',
    description: 'Search for News',
    execute(message, ...args) {
        
    }
}