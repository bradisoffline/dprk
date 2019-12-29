const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const colours = require("./colours.json");
const client = new Discord.Client();

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online`)
    bot.user.setActivity("Watching over America! 👀!", {type: "STREAMING"});
})


bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;
    
    const banned = [ '55', '456', '789' ]

if(banned.includes(message.author.id))
        if(message.content.startsWith('!')){
        message.channel.send("You are currently banned from doing commands!");
        return;
    }

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let used = false


    if(cmd === `${prefix}serverinfo`){
        let sEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Server Information")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Guild Name:**", `${message.guild.name}`, true)
        .addField("**Member Count:**", `${message.guild.memberCount}`, true)
        .addField("**Role Count:**", `${message.guild.roles.size}`, true)
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: sEmbed}); 
    }


    if(cmd === `${prefix}userinfo`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.white)
        .setTitle("User Information")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Username:**", `${message.author.username}`, true)
        .addField("**Discriminator:**", `${message.author.discriminator}`, true)
        .addField("**ID:**", `${message.author.id}`, true)
        .addField("**Status:**", `${message.author.presence.status}`, true)
        .addField("**Created at:**", `${message.author.createdAt}`, true)
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}administration`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Administration")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Founder:**", `${"<@277170747104034817>"}`, false)
        .addField("**President:**", `${"<@" + bot.channels.get("645050955158781971").topic + ">"}`, false)
        .addField("**Vice President:**", `${"<@" + bot.channels.get("645051112256176149").topic + ">"}`, false)
        .addField("**WHCOS:**", `${"<@" + bot.channels.get("645051422207115265").topic + ">"}`, false)
        .addField("**DWHCOS:**", `${"<@" + bot.channels.get("645051687177945098").topic + ">"}`, false)
        .addField("**Secretary of State:**", `${"<@" + bot.channels.get("645051800080220163").topic + ">"}`, false)
        .addField("**Secretary of Defense:**", `${"<@" + bot.channels.get("645051842321055745").topic + ">"}`, false)
        .addField("**Secretary of the Treasury:**", `${"<@" + bot.channels.get("645051885329580042").topic + ">"}`, false)
        .addField("**Attorney General:**", `${"<@" + bot.channels.get("645051934104879120").topic + ">"}`, false)
        .addField("**Sec. HLS:**", `${"<@" + bot.channels.get("645051977654337548").topic + ">"}`, false)
        .addField("**UN Ambassador:**", `${"<@" + bot.channels.get("645052028036448256").topic + ">"}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}warrants`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Warrant Database")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Current Arrest Warrants:**", `${bot.channels.get("645033281242529792").topic}`, false)
        .addField("**Current Search Warrants:**", `${bot.channels.get("645033303220420620").topic}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

     if(cmd === `${prefix}pq`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Presidential Quotes")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Quotes:**", `${bot.channels.get("645845875511394314").topic}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}defcon`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("**Defcon Level**")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Current Defcon Level:**", `${bot.channels.get("645072758853599232").topic}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}house`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("House of Representatives")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Speaker:**", `${"<@" + bot.channels.get("645035698109546519").topic + ">"}`, false)
        .addField("**Speaker Pro Tempore:**", `${"<@" + bot.channels.get("645036025294356491").topic + ">"}`, false)
        .addField("**House Majority Leader:**", `${"<@" + bot.channels.get("645037552511877131").topic + ">"}`, false)
        .addField("**House Minority Leader:**", `${"<@" + bot.channels.get("645037643549376512").topic + ">"}`, false)
        .addField("**House Members:**", `${bot.channels.get("645046774465298482").topic}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }
    
    if(cmd === `${prefix}senate`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("United States Senate")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**President Pro Tempore:**", `${"<@" + bot.channels.get("645044843315200080").topic + ">"}`, false)
        .addField("**Senate Majority Leader:**", `${"<@" + bot.channels.get("645044872792899584").topic + ">"}`, false)
        .addField("**Senate Minority Leader:**", `${"<@" + bot.channels.get("645044892569174018").topic + ">"}`, false)
        .addField("**Senate Members:**", `${bot.channels.get("645044952115576844").topic}`, false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}rules`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Discord Rules and Guidelines")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**Rule 1:**", "Keep the chat family-friendly. Do not post NSFW.", false)
        .addField("**Rule 2:**","Be respectful to your peers and their privacy.", false)
        .addField("**Rule 3:**","Harassing any member of this community is NOT tolerated.", false)
        .addField("**Rule 4:**","Do not spam the chat.**", false)
        .addField("**Rule 5:**","Asking for personal information is not allowed.", false)
        .addField("**Rule 6:**","Follow the orders set by Discord Staff. Any command given by a moderator or discord staff will result in punishment.", false)
        .addField("**Rule 7:**","Advertising non-community related discords,links etc.. is not allowed.", false)
        .addField("**Rule 8:**","ROBLOX and Discord Terms of Service apply to this discord and will be enforced.", false)
        .addField("**Rule 9:**","Keep channels on-topic, any messages not on-topic to that chatroom will be deleted.", false)
        .addField("**Rule 10:**","Pinging must be kept to a minimum. Any spam-pinging will not be tolerated.", false)
        .addField("**Rule 11:**","Toxicity will not be allowed in this discord.", false)
        .addField("**Rule 12:**","Threats regarding real-life will not be tolerated and will result in punishment and reported to Discord.", false)
        .addField("**Rule 13:**","Any discrimination against any user will not be allowed..", false)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}elections`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Federal Elections")
        .setThumbnail(message.guild.iconURL)
        .addField("**Upcoming Election:**", "The next election is" + ' ' + bot.channels.get("645047565129351188").topic, true)
        .addField("**Ongoing Election:**", "The current ongoing election is" + ' ' + bot.channels.get("645047640270307331").topic, true)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}primaries`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Party Primaries")
        .setThumbnail(message.guild.iconURL)
        .addField("**Democratic Primaries:**", "The democratic primaries are on" + ' ' + bot.channels.get("648726067288342559").topic, true)
        .addField("**Federalist Primaries:**", "The federalist primaries are on" + '' + 'N/A', true)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}prescandidates`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.red)
        .setTitle("Presidential Candidates")
        .setThumbnail(message.guild.iconURL)
        .addField("**Democratic Candidate:**", bot.channels.get("649081979979169802").topic, true)
        .addField("**Federalist Candidate:**", bot.channels.get("649082031749201931").topic, true)
        .addField("**Republican Candidate:**", bot.channels.get("649082365448028179").topic, true)
        
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }

    if(cmd === `${prefix}help`){
        let uEmbed = new Discord.RichEmbed()
        .setColor(colours.cyan)
        .setTitle("Help Guide")
        .setThumbnail(bot.user.displayAvatarURL)
        .addField("**!serverinfo**", "Shows the server statistics", false)
        .addField("**!userinfo**", "Shows the user statistics", false)
        .addField("**!administration**", "Shows the current administration", false)
        .addField("**!rules**", "Shows the rules and guideines for the Discord and Server", false)
        .addField("**!help**", "Shows this manual", false)
        .setFooter(`United States of America | Footer`, bot.user.displayAvatarURL);
        message.channel.send({embed: uEmbed}); 
    }
    if(cmd === `${prefix}apply`){
        message.channel.send("Your interest in" + ' ' + message.content.slice(6) + ' ' + "has been recorded and noted, thank you!");
        bot.channels.get('642955216949608468').send('<@' + message.author.id + '>' + ' ' + 'is interested to become the following position:' + ' ' + message.content.slice(6))
    }
    if(cmd === `${prefix}enlist`){
        message.channel.send("You have successfuly requested enlistment into the" + message.content.slice(7));
        bot.channels.get('643128283671560202').send('<@' + message.author.id + '>' + ' ' + 'has requested to enlist into the' + message.content.slice(7))
}



if(message.member.roles.find(r => r.name === "announcer") || message.member.roles.find(r => rname === "Holder")){
    if(cmd === `${prefix}ssu`){
        console.log("starting")
        bot.channels.get('650751625299755077').send("> Server is online! @everyone")

}}

dmention = message.mentions.users.first();

if(message.member.roles.find(r => r.name === "🛡️")){
    if(cmd === `${prefix}accept`){
        console.log("starting")
        if (dmention == null) { return; }
        mentionMessage = ('You have been accepted!')
        dmention.sendMessage(mentionMessage);
        message.channel.send(message.mentions.users.first() + ' ' + "has successfuly been accepted!")
    }
    if(cmd === `${prefix}deny`){
        console.log("starting")
        if (dmention == null) { return; }
        mentionMessage = ('You have failed, please try another position.')
        dmention.sendMessage(mentionMessage);
        message.channel.send("User has successfuly been denied!")
    }
    
}}










)  
    
    

bot.login(botconfig.token);
