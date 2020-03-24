const fetch = require('node-fetch')
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
        let url = `https://newsapi.org/v2/top-headlines?&apiKey=${NEWS_TK}`

        // url = country ? url += `&country=${country}` : url
        // url = category ? url += `&category=${category}` : url
        // url = sources ? url += `&sources=${sources}` : url
        // url = keyword ? url += `&q=${keyword}` : url
        // console.log(`The modified url is ${url}`)

        if(args) {
            fetch(url)
                .then(res => res.json())
                .then(json => {
                    console.log(json)
                })
        } else {
            
        }


    }
}