console.log('Hello world!');

import json from './units2.json'; //with path

console.log(json);
console.log(json['length']);
console.log(json[0]);

console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');
console.log('--------------------------------------------------------------------------------------');

//console.log(words);

//document.text = 'Hello world!';
text = document.getElementById('idk');
text.innerHTML = 'Hello world!';
coreP = document.getElementById('Core');
coreP.appendChild(document.createElement('br'));
foundryP = document.getElementById('Foundry');
foundryP.appendChild(document.createElement('br'));
advFoundryP = document.getElementById('AdvFoundry');
advFoundryP.appendChild(document.createElement('br'));
starforgeP = document.getElementById('Starforge');
starforgeP.appendChild(document.createElement('br'));
advStarforgeP = document.getElementById('AdvStarforge');
advStarforgeP.appendChild(document.createElement('br'));
document.getElementById('mainTable').appendChild(coreP);
document.getElementById('mainTable').appendChild(foundryP);
document.getElementById('mainTable').appendChild(advFoundryP);
document.getElementById('mainTable').appendChild(starforgeP);
document.getElementById('mainTable').appendChild(advStarforgeP);
document.getElementById('mainTable').appendChild(text);

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
	Object.keys(json).forEach((key) => {
		console.log(json[key].Name);
		text.innerHTML += json[key].Name + '<br>';
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
	Object.keys(json).forEach((key) => {
		text.innerHTML += '<br>';
		Object.keys(json[key]).forEach((prop) => {
			text.innerHTML += prop + ': ' + json[key][prop] + '<br>';
		});
	});
}

//addUnitProperties();

//only add the unit properties for the name passed to the function
function addUnitPropertiesByName(name) {
	Object.keys(json).forEach((key) => {
		if (json[key].Name == name) {
			text.innerHTML = '';
			text.innerHTML += '<br>';
			Object.keys(json[key]).forEach((prop) => {
				text.innerHTML += prop + ': ' + json[key][prop] + '<br>';
				//if prop is Image, show the image instead of text
				if (prop == 'Image') {
					text.innerHTML += `<img src="images/${json[key][prop]}" class="img">`;
				}
			});
		}
	});
}

//make an array to store each button so they can be iterated upon
var buttonStore = [];

//create a button for each unit
function addButton(name, func, buildingElement) {
	button = document.createElement('button');
	//button.innerHTML = name;
	//set button.innerHTML to image file from json, if the values exist
	button.innerHTML = `<div class="testingclass"><img src="images/${name}.png" class="buttonImg">${name}</p>`;
	button.classList.add('test');
	button.onclick = func;
	button.addEventListener('mouseover', func);
	//button class
	button.classList.add('unitButton');
	//document.body.appendChild(button);
	buildingElement.appendChild(button);
	//addbutton to array for iteration
	buttonStore.push(button);
	return button;
}

//addUnitPropertiesByName('Valkyrie');

//for each unit's name, add a button
Object.keys(json).forEach((key) => {
	//create alocal onClickFunction that gets passed to the addButton function
	var onClickFunction = () => {
		console.log(json[key].Name);
		addUnitPropertiesByName(json[key].Name);
	};
	if (json[key].Building == 'Core') {
		addButton(json[key].Name, onClickFunction, coreP);
	} else if (json[key].Building == 'Foundry') {
		addButton(json[key].Name, onClickFunction, foundryP);
	} else if (json[key].Building == 'Starforge') {
		addButton(
			json[key].Name,
			() => {
				console.log(json[key].Name);
				addUnitPropertiesByName(json[key].Name);
			},
			starforgeP
		);
	} else if (json[key].Building == 'Advanced Foundry') {
		addButton(
			json[key].Name,
			() => {
				console.log(json[key].Name);
				addUnitPropertiesByName(json[key].Name);
			},
			advFoundryP
		);
	} else if (json[key].Building == 'Advanced Starforge') {
		addButton(
			json[key].Name,
			() => {
				console.log(json[key].Name);
				addUnitPropertiesByName(json[key].Name);
			},
			advStarforgeP
		);
	} else {
		addButton(
			json[key].Name,
			() => {
				console.log(json[key].Name);
				addUnitPropertiesByName(json[key].Name);
			},
			document.body
		);
	}
});

//console.log(text);
