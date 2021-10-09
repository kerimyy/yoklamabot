const mesText = "Herkesle sohbet et";
const btnText = "Herkese mesaj gönderin"; 
const yazi = document.getElementsByTagName("textarea");
let count = 0;
let isFind = false;
let beklemeSuresi = 20;
let son = 0;
var dongu;

function bas(text){
	var divs = document.getElementsByTagName("button");
	var i = -1;
		while(true){
		i++;
		if(divs[i].ariaLabel == text){
			var btn=divs[i];
			break;
		}
	
	}
	btn.ariaDisabled = "false"
	btn.disabled = false
	if(btn.ariaPressed == "true"){
		return;
	}
	btn.click();
}

function burdayım(){
	bas(mesText);
	yazi[0].value = "burdayım"
	bas(btnText);
	console.log("yoklama başarılı bir şekilde atlatıldı");
}

function pusu(){
	isFind = false;
	count = 0;
	start();
}

function yoklama(){
	var allText = document.getElementsByClassName("oIy2qc")
	var tc = allText.length;
	var i = son;
	for(i;i<tc;i++){
		if(allText[i].textContent == "burdayım"||allText[i].textContent == "burda"||allText[i].textContent == "Burda"||allText[i].textContent == "burada"||allText[i].textContent == "Burada"||allText[i].textContent == "Burdayım"||allText[i].textContent == "buradayım"){
			count++;
			console.log("burdayım: "+count);
		}
		son = i;
	}
	son = tc;
	if(count > 4){
		isFind = true;
		burdayım();
		//setTimeout(pusu,5000);
		setTimeout(pusu,1000*60*beklemeSuresi);
		console.log("20 dk beklemeye alındı");
		clearInterval(dongu);
	}
}

function main(){
	if (isFind == false){
		bas(mesText);
		try {yoklama();}
		catch(err) {console.log("mesaj yok");}
	}
}

function start(){
	dongu = setInterval(main,1000);
	console.log("Uygulama başlatıldı");
}
function myClear(){
	clearInterval(dongu);
}

clear();

start();


