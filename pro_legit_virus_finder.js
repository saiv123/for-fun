var legit = ["Bruh, you need this antivirus program","Your computer will die if you don't do it","Don't worry, you only need to go to www.virus.com","Lol m8, spam ok","Our pro_legit_definately_real virus detectors have detectified crud in ur comp, and it will die soon if u don't spam ok","Come OOOOOONNNNNN. SPAM IT FASTER", "the slower you spam, the more viruses we download-I mean DELETE...","spam the button to remove viruses", "STOP READING AND SPAM MORE","Buy the new edition for onyl 50 small payments of $9.99, now with more pirated content and viruses","KANSUR"]


window.alert("Hello, and wealcome to pro_legit_denfinately_real_virus_finder_exe. We have found at least 9001 viruses on ur computer. Also, only we can remove them, and we will only remove it IF u spam OK. SO DO IT. get started now...");

for (i = 0; i < 5; i++){
	var rand = Math.floor(Math.random()* (((legit.length-1) - 0) + 0));
	window.alert(legit[rand])
}

// window.alert(legit[4]);
// window.alert(legit[1]);
// window.alert(legit[2]);
// window.alert(legit[3]);
// window.alert(legit[9]);

var bool = true;
var times = 0;
while(bool){
	window.alert(legit[rand]);

	times++;
	if(times >= 20){
		var rand2 = Math.floor(Math.random()*15);
		if(rand2 == 8){
			bool = false;
		}
	}
}

const exampleEmbed = new Discord.MessageEmbed()
	.setColor("#ffffff")
	.Author("Help")
	.addField('queen usercount', 'to see how many users are currently in the server', false)
	.addField('queen buff[name]', 'for buff [name]', false)
	.addField('queen hackathon', 'to get the done with hackathons picture', false)
	.addField('queen gc', 'to get the Facebook group screenshot', false)
	.addField('queen head', 'to get the Mater screenshot', false)
	.addField('queen rat','to post this rat',false)
	.addField('queen no anime','to get the no anime picture',false)
	.addField('queen contribute','to get a like to the GitHub repo',false)
	.addField('queen waitwhen','to get the when did I ask screenshot',false)
	.addField('queen corn','to get a corn video',false)
	.addField('queen illinois','to get a map of Illinois',false)
	.addField('queen catgirl','to see a catgirl',false)
	.addField('queen gwagwa','to get the gwagwa video',false)
	.addField('queen quote','to get a random image from #quotes',false)
	.addField('queen brownout','to get a random attachment from #brownoutposting (only works in #brownoutposting)',false)
	.addField('queen soup','to get soup',false)
	.addField('queen 8ball [message]','to get an 8ball reply (only works in #spam)',false)
	.addField('queen thirst','to get water messages',false)
	.addField('queen lofi','to get a good lofi playlist',false)
	.addField('queen ping','to get your ping',false)
	.addField('queen brasil','to get the Ronaldinho Soccer 64 video',false)
	.addField('queen earring','to see a nice earring',false)
