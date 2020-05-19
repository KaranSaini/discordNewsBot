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

# TODO / ISSUES TO WORK ON 
    - Biggest Issue -- using NewApi.org so limited to 500 api calls a day ... need to come up with database solution

    - Develop Search Command
    - Develop Help Command