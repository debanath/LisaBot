import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.DirectMessages,
    ],
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

    // if the message contains mention to the bot
    if (message.mentions.has(client.user)) {
        message.channel.send(`Hello <@${message.author.id}> did you mention me? 😳`);
    } 

    // if(message.content. === '<@1029283042017169448>'){
    if (message.content==='ping') {
        message.channel.send('Pong! 🏓');
    }

});



client.login(process.env.TOKEN);