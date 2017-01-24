var legit = ["Bruh, you need this antivirus program","Your computer will die if you don't do it","Don't worry, you only need to go to www.virus.com","Lol m8, spam ok","Our pro_legit_definately_real virus detectors have detectified crud in ur comp, and it will die soon if u don't spam ok","Come OOOOOONNNNNN. SPAM IT FASTER", "the slower you spam, the more viruses we download-I mean DELETE...","spam the button to remove viruses", "STOP READING AND SPAM MORE","Buy the new edition for onyl 50 small payments of $9.99, now with more pirated content and viruses","KANSUR"]

var rand = Math.floor(Math.random()*legit.length);

window.alert("Hello, and wealcome to pro_legit_denfinately_real_virus_finder_exe. We have found at least 9001 viruses on ur computer. Also, only we can remove them, and we will only remove it IF u spam OK. SO DO IT. get started now...");

window.alert(legit[4]);
window.alert(legit[1]);
window.alert(legit[2]);
window.alert(legit[3]);
window.alert(legit[9]);

var bool = true;
var times = 0;
while(bool)
{
	rand = Math.floor(Math.random()*legit.length);
	window.alert(legtit[rand]);
	
	times++;
	if(times >= 20)
	{
		var rand2 = Math.floor(Math.random()*15);
		if(rand2 === 8)
		{
			bool = false;
		}
	}
}