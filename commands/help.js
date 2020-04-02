module.exports = {
    name: 'help',
    description: 'Information About the Bot',
    execute(message, args) {
        message.channel.send(
            `The Bot accepts commands in the form of -news [command] [options]
                COMMAND OPTIONS = top, search, help
                OPTIONS for TOP = country, category, sources, search query
            `
        )
    }
}