const fetch = require('node-fetch')
const Discord = require('discord.js')
const NEWS_TK = process.env.NEWS_TK

/*

The structure for this argument will be 

-news top [country] [category(optional)] [sources] [keyword]

*/

module.exports = {
    name: 'top',
    description: 'Get Top News',
    execute(message, args) {
        

        console.log(`The first argument received by top command is ${args[0]}`)
        let url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_TK}`
        let argLength = args.length

        let country = args[0]
        let category = args[1]
        let sources = args[2]
        let q = args[3]

        url = country ? url += `&country=${country}` : url
        url = category ? url += `&category=${category}` : url
        url = sources ? url += `&sources=${sources}` : url
        url = q ? url += `&q=${keyword}` : url
        url += `&pageSize=5`
        console.log(`The modified url is ${url}`) 

        if(args) {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    for(article of json.articles) {
                        //destructuring the article object
                        let { source, author, title, description, url, urlToImage, content } = article

                        let articleEmbed = new Discord.MessageEmbed()
                            .setColor('#0099ff')
                            .setTitle(title)
                            .setURL(url)
                            .setDescription(description)
                            .setImage(urlToImage);
                        
                        console.log(articleEmbed.length)
                        message.channel.send(articleEmbed)
                    }

                })
        } else {
            
        }


    }
}