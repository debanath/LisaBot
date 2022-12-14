import dotenv from 'dotenv'
dotenv.config()

import { Client, GatewayIntentBits, Partials, ActivityType, Status, Activity, ActivityFlags } from 'discord.js'

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
    client.user.setPresence({ activities: [
    { 
        name: './about',
        type: ActivityType.Watching,
    },
],
    status: "idle",
 });
    console.log(`Logged in as ${client.user.username}!`);
});





// this respond to a message
client.on('messageCreate', async(message) => {
    //tests
        // console.log(message);
        // console.log(message.content);
        // console.log(message.guild.name);
        // console.log(message.author.id);
        // console.log(message.content);
        

    if (message.guildId === null ) {
        const channel = await client.channels.fetch('714420061091266621'/*inset channel id of your choice here*/);
        channel.send(`<@${message.author.id}>:\n \`\`\`\n${message.content}\n\`\`\``);
    }

    

    // if the message contains mention to the bot
    if (message.mentions.has(client.user)) {
        message.channel.send(`Hello <@${message.author.id}> did you mention me? <:lisauwu:1029699950528954438>`);
    } 

    if (message.content==='ping') {
        message.channel.send(`Pong! ${client.ws.ping}ms`);
    }

    if (message.content==='./about') {
        message.channel.send(`Hello <@${message.author.id}> I am a bot made by <@!${process.env.OWNER_ID}>`);
    }

});

//tests


client.login(process.env.TOKEN);