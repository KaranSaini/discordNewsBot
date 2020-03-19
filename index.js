//setting up stuff here
const express = require('express')
const fetch = require('node-fetch')
const btoa = require('btoa')
const NewsAPI = require('newsapi')

const { prefix } = require('./config.json')              //config file with prefix

//rxjs imports
const Rx = require('rxjs')

const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

const app = express()

//environment variables
const PORT = process.env.PORT
const GEN_TK = process.env.GEN_TK                       //for discord
const NEWS_TK = process.env.NEWS_TK        
const newsapi = new NewsAPI(NEWS_TK)
let titleMap = new Map()

/* NEWS API CONFIGURATION FOR QUERIES */
// newsapi.v2.topHeadlines({
//     language: 'en',
//     country: 'us'
// }).then(response => {
//     console.log(response)
// })

fetch(`https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${NEWS_TK}`)
    .then(res => res.json())
    .then(json => {
        let len = json.articles.length
        let arr = json.articles
        for(element of arr) {
            titleMap.set(arr.indexOf(element), element.title)
        }
    })
    
client.once('ready', () => {
    console.log('im ready')
})

client.on('message', msg => {
    if(msg.content.startsWith(`${prefix}news list`)) {
        msg.channel.send(`HELLO HERE IS YOUR DAILY NEWS...`)
    }

    if(!msg.content.startsWith(prefix) || msg.author.bot) return

                
    const args = msg.content.slice(prefix.length).split(' ')            //slicing the prefix off and splitting by space
    const command = args.shift().toLowerCase()                          //this removes the command from args array
})

client.login(GEN_TK)