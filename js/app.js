/*Use the following data below to create cards for each Game of Thrones house (and if you aren't watching GOT, then you are missing out on half of life!) that will display in the browswer. Each card should have the following information:

image of the crest
House: House of Arryn
Region: The Vale of Arryn
Lord: Robin Arryn
Allegiance: House Stark
Slogan: As High as Honor

Please also use CSS to style up your work 

*/

var kingdoms = [{ crest: "https://vignette4.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153", house: "House Arryn",region: "The Vale of Arryn",lord: "Robin Arryn", allegiance: "House Stark", words: "As High As Honor"},{ crest: "https://vignette1.wikia.nocookie.net/gameofthrones/images/e/e6/House-Frey-Main-Shield.PNG/revision/latest?cb=20170523011255", house: "House Frey",region: "The Riverlands",lord: "Unknown", allegiance: "House Lanister", words: "We Stand Together"},{ crest: "https://vignette3.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest?cb=20170523015836", house: "House Greyjoy",region: "Iron Islands",lord: "King Euron Greyjoy", allegiance: "Sovereign", words: "We Do Not Sow"},{ crest: "http://awoiaf.westeros.org/images/thumb/d/d5/House_Lannister.svg/250px-House_Lannister.svg.png", house: "House Lannister",region: "The Crownlands",lord: "Queen Cersei", allegiance: "House Targaryen", words: "Hear Me Roar!"}, { crest: "http://vignette4.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest?cb=20170101103142", house: "House Stark",region: "The North",lord: "King Jon Snow", allegiance: "Sovereign", words: "Winter Is Coming"},{ crest: "https://vignette2.wikia.nocookie.net/gameofthrones/images/4/43/House-Targaryen-Main-Shield.PNG/revision/latest?cb=20170510235320", house: "House Targaryen",region: "Dragonstone",lord: "Queen Daenerys", allegiance: "Sovereign", words: "Fire And Blood"}];

	var menuElem = document.createElement("div");
	menuElem.className = "menu";
	document.body.appendChild(menuElem);	

// console.log(kingdoms);
for (var i=0; i<kingdoms.length; i++){

	var listElem = document.createElement("div");
	listElem.className = "houseList";
	menuElem.appendChild(listElem);

	var divElem = document.createElement("div");
	divElem.className = "kingdom";
	listElem.appendChild(divElem);
	divElem.addEventListener("click", imageFocus);

	var crestElem = document.createElement("IMG");
	crestElem.className = "crest";
	crestElem.setAttribute("src", kingdoms[i].crest);
	// console.log(crestElem);
	divElem.appendChild(crestElem);


	var houseElem = document.createElement("div");
	houseElem.className = "house";
	houseElem.innerHTML = kingdoms[i].house;
	divElem.appendChild(houseElem);

	var regionElem = document.createElement("div");
	regionElem.className = "region";
	regionElem.innerHTML = kingdoms[i].region;
	divElem.appendChild(regionElem);

	var lordElem = document.createElement("div");
	lordElem.className = "lord";
	lordElem.innerHTML = kingdoms[i].lord;
	divElem.appendChild(lordElem);

	var allegianceElem = document.createElement("div");
	allegianceElem.className = "allegiance";
	allegianceElem.innerHTML = kingdoms[i].allegiance;
	divElem.appendChild(allegianceElem);

	var wordsElem = document.createElement("div");
	wordsElem.className = "words";
	wordsElem.innerHTML = kingdoms[i].words;
	divElem.appendChild(wordsElem);

	// console.log(kingdoms[i]);
}

function imageFocus() {
	// console.log("openNav test");
	var selectPic = this.querySelector(".kingdom");
	console.log("test");
}

