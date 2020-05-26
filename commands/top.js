const fetch = require('node-fetch')
const Discord = require('discord.js')
const NEWS_TK = process.env.NEWS_TK

const countries = require('../options/countries')           //options of supported countries
const categories = require('../options/categories')

const NewsAPI = require('newsapi')
const newsapi = new NewsAPI(NEWS_TK)

/*
The structure for this argument will be

-news top [country] [category(COUNTRY REQUIRED)] [keyword(COUNTRY AND CATEGORY REQUIRED)]

    DEFAULTS: The default country will be the US, the default category will be TECHNOLOGY
*/

module.exports = {
    name: 'top',
    description: 'Get Top News',
    execute(message, args) {
        let url = `https://newsapi.org/v2/top-headlines?pageSize=5`

        let countryList = Object.keys(countries.allowedCountries)               //parsing the incoming args to find a valid country
        let categoryList = Object.keys(categories.categories)

        let country = ''
        let category = ''
        let query = ''

        args.forEach(el => {
            if(country == '') {
                country = countryList.find(element => element = el)
            }
            if(category == '') {
                category = categoryList.find(element => element = el)
            }
            if(args.indexOf(el) === 2) {
                query = el
            }
        })


        country !== '' ? url += `&country=${country}` : url += `&country=us`
        category !== '' ? url += `&category=${category}` : url = url
        query !== '' ? url += `&q=${query}` : url = url

        console.log(`the country is ${country}, the category is ${category} and the query is ${query}`)
        console.log(`the current url looks like ${url}`)

        if(args) {
            var articlesToBeEmbed = []
            fetch(url, { method: 'GET', headers: {'X-Api-Key': NEWS_TK} })
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
                            .setImage(urlToImage)
                        articlesToBeEmbed.push(articleEmbed)
                    }

                    //SENDS ARTICLE EMBEDS THEN DELETES THEM AFTER SET PERIOD OF TIME..CURRENTLY TWO MINS
                    articlesToBeEmbed.forEach(element => {
                        message.channel.send(element)
                        .then((message) => {
                            setTimeout(() => {
                                // console.log(`${message.delete()}`)
                                message.delete();
                            }, 120000)
                        })
                        .catch(console.error)
                    })
                })
                .catch(console.error)
        } else {
            message.channel.send(`Please provide a correctly formatted query check the help page for guidance`)
        }
    }
}