const fetch = require('node-fetch')
const Discord = require('discord.js')
const NEWS_TK = process.env.NEWS_TK

const countries = require('../options/countries')           //options of supported countries
const categories = require('../options/categories')

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(NEWS_TK)

/*
The structure for this argument will be 

-news top [country] [category(optional)] [sources] [keyword]
*/

module.exports = {
    name: 'top',
    description: 'Get Top News',
    execute(message, args) {
        // let url = `https://newsapi.org/v2/top-headlines?apiKey=${NEWS_TK}`

        let countryList = Object.keys(countries.allowedCountries)               //parsing the incoming args to find a valid country
        
        let categoryList = Object.keys(categories.categories)

        //sources
        //queries

        let country = ''
        let category = ''

        args.forEach(el => {
            country = countryList.find(element => {
                if(element === el) {
                    return element
                } 
                else {
                    country = ''
                }
            })
            category = categoryList.find(element => {
                if(element === el) {
                    return element
                }
            })
        })

        console.log(`the country is ${country} and the category is ${category}`)

        // if(args) {
        //     fetch(url)
        //         .then(res => res.json())
        //         .then(json => {
        //             for(article of json.articles) {
        //                 //destructuring the article object
        //                 let { source, author, title, description, url, urlToImage, content } = article

        //                 let articleEmbed = new Discord.MessageEmbed()
        //                     .setColor('#0099ff')
        //                     .setTitle(title)
        //                     .setURL(url)
        //                     .setDescription(description)
        //                     .setImage(urlToImage)
                        
        //                 console.log(articleEmbed.length)
        //                 message.channel.send(articleEmbed)
        //             }

        //         })
        // } else {
            
        // }


    }
}