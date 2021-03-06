//setting up stuff here
const fs = require('fs')
const { prefix } = require('./config.json')              //config file with prefix

require('dotenv').config()
//environment variable refs
const GEN_TK = process.env.GEN_TK                       //for discord
const NEWS_TK = process.env.NEWS_TK        

const Discord = require('discord.js')
const client = new Discord.Client()
client.commands = new Discord.Collection()

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))      //to get all available commands for the bot
for(const file of commandFiles) {
    const command = require(`./commands/${file}`)          
    client.commands.set(command.name, command) 
}


client.once('ready', () => {
    // console.log(permissions.has('MANAGE_MESSAGES'))
    console.log('im ready')
})

client.on('message', msg => {
    //if message doesnt start with prefix or the message is from the bot -> do nothing
    if(!msg.content.startsWith(prefix) || msg.author.bot) return

    //regex used below is to match one or more spaces            
    const args = msg.content.slice(prefix.length).split(/ +/)           //slicing the prefix off and splitting by space
    const botName = args.shift().toLowerCase()                          //this removes the command from args array
    const command = args.shift()                                        //this will be THE COMMAND 

    if(!client.commands.has(command)) return

    try {
        client.commands.get(command).execute(msg, args)            //here args is really the OPTIONS for the command
    }
    catch(error) {
        console.error(error)
        msg.reply('error occured')
    }


})

client.login(GEN_TK)