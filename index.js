//setting up stuff here
const express = require('express')
const fetch = require('node-fetch')
const btoa = require('btoa')

const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

const app = express()

//environment variables
const PORT = process.env.PORT
const GEN_TK = process.env.GEN_TK           //for discord
const NEWS_TK = process.env.NEWS_TK        

fetch('http://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=bf7a9cc16ae2430baed2be53a05156a7')
    .then(res => res.json())
    .then(json => console.log(json))