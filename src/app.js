console.log('Hello world!');

import unitJson from './units3.json'; //with path

console.log(unitJson);
//console.log(unitJson['length']);
//console.log(unitJson[0]);

console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');

//console.log(words);

//document.text = 'Hello world!';
var unitInfoText = document.getElementById('unitInfo');
unitInfoText.innerHTML = 'Hello world!';
var deckStatsText = document.getElementById('deckStats');
deckStatsText.innerHTML = 'Deck Stats:';
var coreP = document.getElementById('Core');
coreP.appendChild(document.createElement('br'));
var foundryP = document.getElementById('Foundry');
foundryP.appendChild(document.createElement('br'));
var advFoundryP = document.getElementById('AdvFoundry');
advFoundryP.appendChild(document.createElement('br'));
var starforgeP = document.getElementById('Starforge');
starforgeP.appendChild(document.createElement('br'));
var advStarforgeP = document.getElementById('AdvStarforge');
advStarforgeP.appendChild(document.createElement('br'));
document.getElementById('mainTable').appendChild(coreP);
document.getElementById('mainTable').appendChild(foundryP);
document.getElementById('mainTable').appendChild(advFoundryP);
document.getElementById('mainTable').appendChild(starforgeP);
document.getElementById('mainTable').appendChild(advStarforgeP);
document.getElementById('mainTable').appendChild(unitInfoText);

var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');
var deckCells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8];

function updateDeckCells(deckSlot, unitName) {
	//console.log(deckSlot);
	//console.log(unitName);
	//console.log(deckCells[deckSlot]);
	//console.log(deckCells[deckSlot].innerHTML);
	//console.log(deckCells[deckSlot].innerHTML.indexOf(unitName));
	if (deckCells[deckSlot].innerHTML.indexOf(unitName) == -1) {
		deckCells[deckSlot].innerHTML += unitName + '<br>';
	}
}

//turn this into a function below
//for each unit in json append a child containing its name
/*
Object.keys(json).forEach((key) => {
	console.log(json[key].Name);
	text.innerHTML += json[key].Name + '<br>';
});
 */
//write the function from here:
function addUnitNames() {
	Object.keys(unitJson).forEach((key) => {
		console.log(unitJson[key].Name);
		unitInfoText.innerHTML += unitJson[key].Name + '<br>';
	});
}

/*
//repeat the function to add all other properties of units

properties:
		"Health": 4,
		"Damage": 5,
		"Speed": 3,
		"Range": 3,
		"Matter": 125,
		"Energy": 125,
		"Bandwidth": 5,
		"Building": "Advanced Starforge",
		"Attack Type": "Anti-Air",
		"Attack Type 2": "",
		"Unit Type": "Air",
		"Ability": "",
		"Image": "valkyrie.png"
*/

function addUnitProperties() {
	Object.keys(unitJson).forEach((key) => {
		unitInfoText.innerHTML += '<br>';
		Object.keys(unitJson[key]).forEach((prop) => {
			unitInfoText.innerHTML += prop + ': ' + unitJson[key][prop] + '<br>';
		});
	});
}

//addUnitProperties();

//only add the unit properties for the name passed to the function
function addUnitPropertiesByName(name) {
	Object.keys(unitJson).forEach((key) => {
		if (unitJson[key].Name == name) {
			unitInfoText.innerHTML = '';
			unitInfoText.innerHTML += '<br>';
			Object.keys(unitJson[key]).forEach((prop) => {
				unitInfoText.innerHTML += prop + ': ' + unitJson[key][prop] + '<br>';
				//if prop is Image, show the image instead of text
				if (prop == 'Image') {
					unitInfoText.innerHTML += `<img src="images/${unitJson[key][prop]}" class="img">`;
				}
			});
		}
	});
}

//make an array to store each button so they can be iterated upon
var buttonStore = [];

//create a button for each unit
function addButton(name, onClickFunc, buildingElement, mouseOverFunc) {
	//look the unit up in json by its name and check the confirmed value
	//if the value is true, then add the button to the buildingElement
	//if the value is false, then do not add the button
	//if the value is not present, then add the button
	console.log('boo!');

	var button = document.createElement('button');
	var unitName = name;
	Object.keys(unitJson).forEach((key) => {
		if (unitJson[key].Name == name) {
			console.log('foundkey');
			if (unitJson[key].Confirmed == 'y') {
				console.log('confirmed');
				buttonStore.push(button);
				if (buildingElement.appendChild) buildingElement.appendChild(button);
				console.log(name);
				button.innerHTML = `<table><tr><td><img src="images/${unitJson[key].Image}.png" class="buttonImg"></td><td id="buttonStats">${unitJson[key].Name}</td><tr></table>`;
				button.classList.add('unitButton');
				button.onclick = onClickFunc;
				button.addEventListener('mouseover', mouseOverFunc);
				buttonStore.push(button);

				return button;
			}
		}
	});
	//button.innerHTML = name;
	//set button.innerHTML to image file from json, if the values exists
	//if (json[name].Image != undefined) button.innerHTML = `<img src="images/${json[name].Image}" class="img">`;
	//button class
	//button.classList.add('unitButton');
	//document.body.appendChild(button);

	//addbutton to array for iteration
}

//addUnitPropertiesByName('Valkyrie');

var currentDeckList = [];

//write a function to get the total matter of the current deck list
function getDeckMatter() {
	var totalMatter = 0;
	currentDeckList.forEach((unit) => {
		Object.keys(unitJson).forEach((key) => {
			if (unitJson[key].Name == unit) {
				totalMatter += unitJson[key].Matter;
			}
		});
	});
	return totalMatter;
}

function getDeckEnergy() {
	var totalEnergy = 0;
	currentDeckList.forEach((unit) => {
		Object.keys(unitJson).forEach((key) => {
			if (unitJson[key].Name == unit) {
				totalEnergy += unitJson[key].Energy;
			}
		});
	});
	return totalEnergy;
}

function getDeckSpeed() {
	var totalSpeed = 0;
	currentDeckList.forEach((unit) => {
		Object.keys(unitJson).forEach((key) => {
			if (unitJson[key].Name == unit) {
				totalSpeed += unitJson[key].Speed;
			}
		});
	});
	return totalSpeed;
}
function getDeckDamage() {
	var totalDamage = 0;
	currentDeckList.forEach((unit) => {
		Object.keys(unitJson).forEach((key) => {
			if (unitJson[key].Name == unit) {
				totalDamage += unitJson[key].Damage;
			}
		});
	});
	return totalDamage;
}
function getDeckHealth() {
	var totalHealth = 0;
	currentDeckList.forEach((unit) => {
		Object.keys(unitJson).forEach((key) => {
			if (unitJson[key].Name == unit) {
				totalHealth += unitJson[key].Health;
			}
		});
	});
	return totalHealth;
}

//write a function to get the total matter of the current deck list

//handle when a deck unit is added to the current Deck list

var remCoreUnits = 2;
var remFoundryUnits = 3;
var remStarforgeUnits = 3;
var remAdvFoundryUnits = 3;
var remAdvStarforgeUnits = 3;

function updateDeckStats() {
	deckStatsText.innerHTML = 'Deck Stats: ';
	deckStatsText.innerHTML = 'Warning: Missing Anti-Ground Core';
	deckStatsText.innerHTML += '<br> ';
	deckStatsText.innerHTML += 'Warning: Missing Anti-Air Core';
	deckStatsText.innerHTML += '<br> ';
	deckStatsText.innerHTML += 'Units: ' + currentDeckList.length + '<br> ';
	deckStatsText.innerHTML += 'Remaining units: ' + (8 - currentDeckList.length) + ' ';
	deckStatsText.innerHTML += 'Remaining Core Units: ' + (2 - currentDeckList.filter((unit) => unit.includes('Core')).length) + ' ';
	deckStatsText.innerHTML += 'Remaining Foundry Units: ' + (3 - currentDeckList.filter((unit) => unit.includes('Foundry')).length) + ' ';
	deckStatsText.innerHTML += 'Remaining Starforge Units: ' + (3 - currentDeckList.filter((unit) => unit.includes('Starforge')).length) + ' ';
	deckStatsText.innerHTML += 'Remaining Adv. Foundry Units: ' + (3 - currentDeckList.filter((unit) => unit.includes('AdvFoundry')).length) + ' ';
	deckStatsText.innerHTML += 'Remaining Adv. Starforge Units: ' + (3 - currentDeckList.filter((unit) => unit.includes('AdvStarforge')).length) + '<br> ';
	deckStatsText.innerHTML += 'Matter: ' + getDeckMatter() + '<br> ';
	deckStatsText.innerHTML += 'Energy: ' + getDeckEnergy() + '<br> ';
	deckStatsText.innerHTML += 'Speed: ' + getDeckSpeed() + '<br> ';
	deckStatsText.innerHTML += 'Damage: ' + getDeckDamage() + '<br> ';
	deckStatsText.innerHTML += 'Health: ' + getDeckHealth() + '<br> ';
}

//addDeckUnit is called by the onClickFunction for the deck, it is passed it's name, so it's a good place to update things when a unit is added to the deck
addDeckUnit = (name) => {
	//check if the unit is already in the deck
	if (currentDeckList.includes(name)) {
		console.log('Unit already in deck');
	} else {
		currentDeckList.push(name);
		updateDeckStats();
		console.log('Added ' + name + ' to the deck');
	}
	console.log(currentDeckList);
	//update the deck stats text
	//update the deck cells
	updateDeckCells(currentDeckList.length - 1, name);
	//<div class="testingclass"><img src="images/${imageFile}.png" class="buttonImg">${name}</p>
	//add the name of each unit in the deck
	//for each unit in the deck, add a button to the deckStatsText
	currentDeckList.forEach((unit) => {
		deckStatsText.innerHTML += unit + ' ';
	});
};

//for each unit's name, add a button
Object.keys(unitJson).forEach((key) => {
	//create alocal onClickFunction that gets passed to the addButton function
	var onClickFunction = () => {
		console.log(unitJson[key].Name);

		addDeckUnit(unitJson[key].Name);
		//iterate through the currentDeckList, if the unit is in the deck, add a class to the button
		buttonStore.forEach((button) => {
			if (button.innerHTML.includes(unitJson[key].Name)) {
				button.classList.add('inDeck');
			}
		});
		//call the updateDeckCellsFunction on the highest index of the currentDeckList
		updateDeckCells(currentDeckList.length - 1, unitJson[key].Name);
	};
	var mouseOverFunction = () => {
		console.log('Mouse over ' + unitJson[key].Name);
		addUnitPropertiesByName(unitJson[key].Name);
		updateDeckStats();
	};
	if (unitJson[key].Name != '') {
		if (unitJson[key].Building == 'Core') {
			addButton(unitJson[key].Name, onClickFunction, coreP, mouseOverFunction);
		} else if (unitJson[key].Building == 'Foundry') {
			addButton(unitJson[key].Name, onClickFunction, foundryP, mouseOverFunction);
		} else if (unitJson[key].Building == 'Starforge') {
			addButton(unitJson[key].Name, onClickFunction, starforgeP, mouseOverFunction);
		} else if (unitJson[key].Building == 'Advanced Foundry') {
			addButton(unitJson[key].Name, onClickFunction, advFoundryP, mouseOverFunction);
		} else if (unitJson[key].Building == 'Advanced Starforge') {
			addButton(unitJson[key].Name, onClickFunction, advStarforgeP, mouseOverFunction);
		} else {
			//addButton(unitJson[key].Name, onClickFunction, advStarforgeP, mouseOverFunction);
		}
	} else console.log('No name for ' + unitJson[key].Name);
});

deckStatsText.appendChild(document.createElement('br'));
deckStatsText.classList.add('deckStatsText');

//console.log(text);
