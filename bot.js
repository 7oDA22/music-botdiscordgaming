const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("",{type: 'watching'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
//-----------------------------------------------------------------------------------------------------------------------------



 


client.on('message', DEL => {//By Mahmoud-QuaStyle
if(DEL.content === 'g!bot-owner') {
var embed = new Discord.RichEmbed()
.addField('صاْنع البوت : @༄ϻά𝔥𝔪𝔬𝔲𝓓-QuaStyle ≽ܫ≼#5661  ', `${client.user.tag}`, true)
.setColor("RANDOM")
DEL.channel.sendEmbed(embed);

}
});

 
 

   
             
	
			 
			 
			 
client.login("process.env.BOT_TOKEN");
