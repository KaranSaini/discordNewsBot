# NEWS BOT
Discord news bot that will serve news which can be filtered by a variety of arguments

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
