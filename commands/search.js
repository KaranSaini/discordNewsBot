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
        let url = `https://newsapi.org/v2/everything?pageSize=5`
        var articlesToBeEmbed = []
        if(args) {
            url += `&q=${args[0]}`
            fetch(url, { method: 'GET', headers: {'X-Api-Key': NEWS_TK} })
                .then(res => res.json())
                .then(json => {
                    for(article of json.articles) {
                        let { source, author, title, description, url, urlToImage, content } = article

                        let articleEmbed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle(title)
                            .setURL(url)
                            .setDescription(description)
                            .setImage(urlToImage)
                        articlesToBeEmbed.push(articleEmbed)

                        articlesToBeEmbed.forEach(element => {
                            message.channel.send(element)
                            .then((message) => {
                                setTimeout(() => {
                                    message.delete();
                                }, 120000)
                            })
                            .catch(console.error)
                        })
                    }
                })
                .catch(console.error)
        }
        else {
            message.channel.send(`Please provide a correctly formatted query check the help page for guidance`)
        }
    }
}