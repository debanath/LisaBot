import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits, Partials } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
    partials: [
        Partials.Message, 
        Partials.Channel, 
        Partials.Reaction
    ]
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});




// this respond to a message
client.on('messageCreate', async(message) => {
    console.log(message);
    // console.log(message.content);
    // console.log(message.guild.name);
    // console.log(message.author.id);
    // console.log(message.content);

    if (message.guildId === null ) {
        // console.log(`${message.author.tag}(${message.author.id}): ${message.content}`);
        // send the content of the message to the user to another channel
        const channel = await client.channels.fetch('714420061091266621');
        channel.send(`<@${message.author.id}>:\n \`\`\`\n${message.content}\n\`\`\``);
    }

    

    // if the message contains mention to the bot
    if (message.mentions.has(client.user)) {
        message.channel.send(`Hello <@${message.author.id}> did you mention me? <:lisauwu:1029699950528954438>`);
    } 

    if (message.content==='ping') {
        message.channel.send(`Pong! ${client.ws.ping}ms`);
    }

});



client.login(process.env.TOKEN);