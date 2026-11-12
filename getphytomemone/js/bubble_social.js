const productName = 'Phytomem One';

// List of mixed first names
 const firstNames = ['James','Robert','John','Michael','William','David','Richard','Joseph','Thomas','Charles','Christopher','Daniel','Matthew','Anthony','Mark','Donald','Steven','Paul','Andrew','Joshua','Kenneth','Kevin','Brian','George','Edward','Ronald','Timothy','Jason','Jeffrey','Ryan','Jacob','Gary','Nicholas','Eric','Jonathan','Stephen','Larry','Justin','Scott','Brandon','Benjamin','Samuel','Gregory','Frank','Alexander','Raymond','Patrick','Jack','Dennis','Jerry','Tyler','Aaron','Jose','Adam','Henry','Nathan','Douglas','Zachary','Peter','Kyle','Walter','Ethan','Jeremy','Harold','Keith','Christian','Roger','Noah','Gerald','Carl','Terry','Sean','Austin','Arthur','Lawrence','Jesse','Dylan','Bryan','Joe','Jordan','Billy','Bruce','Albert','Willie','Gabriel','Logan','Alan','Juan','Wayne','Roy','Ralph','Randy','Eugene','Vincent','Russell','Elijah','Louis','Bobby','Philip','Johnny','Mary','Patricia','Jennifer','Linda','Elizabeth','Barbara','Susan','Jessica','Sarah','Karen','Nancy','Lisa','Betty','Margaret','Sandra','Ashley','Kimberly','Emily','Donna','Michelle','Dorothy','Carol','Amanda','Melissa','Deborah','Stephanie','Rebecca','Sharon','Laura','Cynthia','Kathleen','Amy','Shirley','Angela','Helen','Anna','Brenda','Pamela','Nicole','Emma','Samantha','Katherine','Christine','Debra','Rachel','Catherine','Carolyn','Janet','Ruth','Maria','Heather','Diane','Virginia','Julie','Joyce','Victoria','Olivia','Kelly','Christina','Lauren','Joan','Evelyn','Judith','Megan','Cheryl','Andrea','Hannah','Martha','Jacqueline','Frances','Gloria','Ann','Teresa','Kathryn','Sara','Janice','Jean','Alice','Madison','Doris','Abigail','Julia','Judy','Grace','Denise','Amber','Marilyn','Beverly','Danielle','Theresa','Sophia','Marie','Diana','Brittany','Natalie','Isabella','Charlotte','Rose','Alexis','Kayla'];

// List of male first names
//const firstNames = ['James','Robert','John','Michael','William','David','Richard','Joseph','Thomas','Charles','Christopher','Daniel','Matthew','Anthony','Mark','Donald','Steven','Paul','Andrew','Joshua','Kenneth','Kevin','Brian','George','Edward','Ronald','Timothy','Jason','Jeffrey','Ryan','Jacob','Gary','Nicholas','Eric','Jonathan','Stephen','Larry','Justin','Scott','Brandon','Benjamin','Samuel','Gregory','Frank','Alexander','Raymond','Patrick','Jack','Dennis','Jerry','Tyler','Aaron','Jose','Adam','Henry','Nathan','Douglas','Zachary','Peter','Kyle','Walter','Ethan','Jeremy','Harold','Keith','Christian','Roger','Noah','Gerald','Carl','Terry','Sean','Austin','Arthur','Lawrence','Jesse','Dylan','Bryan','Joe','Jordan','Billy','Bruce','Albert','Willie','Gabriel','Logan','Alan','Juan','Wayne','Roy','Ralph','Randy','Eugene','Vincent','Russell','Elijah','Louis','Bobby','Philip','Johnny'];

// List of female first names
// const firstNames = ['Mary','Patricia','Jennifer','Linda','Elizabeth','Barbara','Susan','Jessica','Sarah','Karen','Nancy','Lisa','Betty','Margaret','Sandra','Ashley','Kimberly','Emily','Donna','Michelle','Dorothy','Carol','Amanda','Melissa','Deborah','Stephanie','Rebecca','Sharon','Laura','Cynthia','Kathleen','Amy','Shirley','Angela','Helen','Anna','Brenda','Pamela','Nicole','Emma','Samantha','Katherine','Christine','Debra','Rachel','Catherine','Carolyn','Janet','Ruth','Maria','Heather','Diane','Virginia','Julie','Joyce','Victoria','Olivia','Kelly','Christina','Lauren','Joan','Evelyn','Judith','Megan','Cheryl','Andrea','Hannah','Martha','Jacqueline','Frances','Gloria','Ann','Teresa','Kathryn','Sara','Janice','Jean','Alice','Madison','Doris','Abigail','Julia','Judy','Grace','Denise','Amber','Marilyn','Beverly','Danielle','Theresa','Sophia','Marie','Diana','Brittany','Natalie','Isabella','Charlotte','Rose','Alexis','Kayla'];

// List of last names
const lastNames = ['Smith','Johnson','Williams','Brown','Jones','Garcia','Miller','Davis','Rodriguez','Martinez','Hernandez','Lopez','Gonzales','Wilson','Anderson','Thomas','Taylor','Moore','Jackson','Martin','Lee','Perez','Thompson','White','Harris','Sanchez','Clark','Ramirez','Lewis','Robinson','Walker','Young','Allen','King','Wright','Scott','Torres','Nguyen','Hill','Flores','Green','Adams','Nelson','Baker','Hall','Rivera','Campbell','Mitchell','Carter','Roberts','Gomez','Phillips','Evans','Turner','Diaz','Parker','Cruz','Edwards','Collins','Reyes','Stewart','Morris','Morales','Murphy','Cook','Rogers','Gutierrez','Ortiz','Morgan','Cooper','Peterson','Bailey','Reed','Kelly','Howard','Ramos','Kim','Cox','Ward','Richardson','Watson','Brooks','Chavez','Wood','James','Bennet','Gray','Mendoza','Ruiz','Hughes','Price','Alvarez','Castillo','Sanders','Patel','Myers','Long','Ross','Foster','Jimenez'];

//List of US and Canada states
const states = ['Alabama, USA', 'Alaska, USA', 'Arizona, USA', 'Arkansas, USA', 'California, USA', 'Colorado, USA', 'Connecticut, USA', 'Delaware, USA', 'Florida, USA', 'Georgia, USA', 'Hawaii, USA', 'Idaho, USA', 'Illinois, USA', 'Indiana, USA', 'Iowa, USA', 'Kansas, USA', 'Kentucky, USA', 'Louisiana, USA', 'Maine, USA', 'Maryland, USA', 'Massachusetts, USA', 'Michigan, USA', 'Minnesota, USA', 'Mississippi, USA', 'Missouri, USA', 'Montana, USA', 'Nebraska, USA', 'Nevada, USA', 'New Hampshire, USA', 'New Jersey, USA', 'New Mexico, USA', 'New York, USA', 'North Carolina, USA', 'North Dakota, USA', 'Ohio, USA', 'Oklahoma, USA', 'Oregon, USA', 'Pennsylvania, USA', 'Rhode Island, USA', 'South Carolina, USA', 'South Dakota, USA', 'Tennessee, USA', 'Texas, USA', 'Utah, USA', 'Vermont, USA', 'Virginia, USA', 'Washington, USA', 'West Virginia, USA', 'Wisconsin, USA', 'Wyoming, USA', 'Alberta, Canada', 'British Columbia, Canada', 'Manitoba, Canada', 'New Brunswick, Canada', 'Nova Scotia, Canada', 'Ontario, Canada', 'Quebec, Canada', 'Saskatchewan, Canada', 'Australia', 'New Zealand', 'United Kingdom', 'Ireland'];

// Randomly select the number of bottles
const bottles = ['1 bottle', '3 bottles', '3 bottles', '3 bottles', '3 bottles', '3 bottles', '6 bottles', '6 bottles', '6 bottles'];

// Generate random first name, last name, state, number of bottles and minutes
let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
let state = states[Math.floor(Math.random() * states.length)];
let numBottles = bottles[Math.floor(Math.random() * bottles.length)];
let timeAgo = Math.floor(Math.random() * (15 - 3 + 1) + 3);

// Create social proof bubble
const bubble = document.createElement('div');
bubble.setAttribute("id", "bubble");
bubble.style.display = 'none';
bubble.style.position = 'fixed';
bubble.style.bottom = '10px';
bubble.style.left = '10px';
bubble.style.padding = '2px 15px 2px 0px';
bubble.style.background = '#eee';
bubble.style.border = '2px solid #b4b4b4';
bubble.style.color = '#000';
bubble.style.borderRadius = '25px';
bubble.style.boxShadow = 'rgba(0, 0, 0, 0.2) 5px 5px 9px 1px';
bubble.style.zIndex = '9999';
bubble.style.opacity = '0';
bubble.style.fontFamily = 'sans-serif';
bubble.style.fontSize = '13px';
bubble.style.textAlign = 'center';
bubble.style.opacity = '0';
bubble.style.scale = '0';
bubble.style.transition = 'opacity 1s linear 0.3s, scale 1s linear';
bubble.style.transformOrigin = 'left bottom';

// Add social proof bubble to the page
document.body.appendChild(bubble);

// Rotate bubble data and show bubble
setInterval(() => {
// Generate random first name, last name state, number of bottles and minutes
	firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
	lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
	state = states[Math.floor(Math.random() * states.length)];
	numBottles = bottles[Math.floor(Math.random() * bottles.length)];
	timeAgo = Math.floor(Math.random() * (15 - 3 + 1) + 3);

// Rotate name
	const name = `${firstName} ${lastName}`;

// Update social proof bubble text and show it
	bubble.innerHTML = `
	<img class="bubble__product" src="../includes/img/bubble_product_75.png">
	<div class="bubble__text">
	<p class="bubble__proof"><b>${name}</b> from <b>${state}</b><br>purchased <b>${numBottles} of Phytomem One</b></p>
	<p class="bubble__time">${timeAgo} minutes ago</p>
	<p class="bubble__verified"><img src="../includes/img/bubble_verified.png"><b><em>Verified Purchase</em></b></span></p>
	`;
	bubble.style.opacity = '1';
	bubble.style.scale = '1';

// Hide the bubble after 4 seconds with transition and show the next one after 12 seconds
	setTimeout(() => {
		bubble.style.opacity = '0';
		bubble.style.scale = '0';
		setTimeout(() => {
			bubble.style.opacity = '0';
			bubble.style.scale = '0';
		}, 500);
			}, 8000); //Set how many seconds the bubble will stay on screen
		}, 18000); //Set how many seconds will elapse before the next bubble instance (8s shown + 10s pause)