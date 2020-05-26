# NEWS BOT
Discord news bot that will serve news which can be filtered by a variety of arguments

# USAGE
    To use this bot for your own server...
        1. Clone this repo
        2. npm install in root
        3. Go to newsapi.org and get an api key
        4. Create a .env file in the root folder and set your api key here
        5. Go to Discord Developer website ... create a bot
        6. Add bot token to .env
        7. Invite bot to your Discord Server
        8. In terminal type "nodemon index.js" ... your bot should be live

# STRUCTURE (IN DEVELOPMENT) 
    prefix: '-'
    command: 'news'
    possible arguments: [
        search (keyword or phrase),     
        top [
            country (default: US),
            category (default: technology),
            query (will only work if country and category are provided by user),
        ],
        help (help command that will give user info about the bot)
    ]