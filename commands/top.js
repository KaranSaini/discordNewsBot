const NEWSAPI = require('newsapi')
const newsapi = new NEWSAPI(process.env.NEWS_TK)

module.exports = {
    name: 'top',
    description: 'Get Top News',
    execute(message, ...args) {
        newsapi.v2.topHeadlines({
            language: 'en',
            country: 'us'
        }).then(response => {
            message.channel.send(response.articles)
            console.log(response)
        })
    }
}