# NEWS BOT
Discord news bot that will serve news which can be filtered by a variety of arguments

# ROUGH STRUCTURE (work in progress) 
    prefix: '-'
    command: 'news'
    possible arguments: [
        search (keyword or phrase),     
        lang,
        exclude (exclude certain sources),
        top [
            category,
            country,
            sources,
        ]
    ]

    Note: Multiple arguments can be chained