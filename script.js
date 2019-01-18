//ex1

let container = document.createElement("div");
document.body.appendChild(container);

let h1 = document.createElement("h1"); //creation of the h1
container.appendChild(h1); //h1 integration
h1.textContent = "Cinéma Le Dauphin"; //h1 text

let p = document.createElement("p"); //creation of the paragraph p
container.appendChild(p); //p integration
p.textContent = "Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi)." //text of my paragraph
let btnContinue = document.createElement("input"); //button generation
container.appendChild(btnContinue); //put the button in the bodysuit
btnContinue.type = "button"; //assigned him his type
btnContinue.value = "Voir les films à l’affiche cette semaine" //add text to the button


btnContinue.addEventListener("click", voir, false);

function voir() {
  container.hidden = true // hidden display
  container2.hidden = false // display
}

// 1.2

let array = [ //creation of the two-dimensional table
  ["titre du film", "realisateur", "nationalité", "année", "durée", "version"],
  ["IN MY ROOM", "Ulrich Köhler", "Allemagne", "2019", "2h", "vf"],
  ["UN VIOLENT DÉSIR DE BONHEUR", "Clément Schneider", "France", "2018", "1h15", "vf"],
  ["WHAT YOU GONNA DO WHEN THE WORLD'S ON FIRE ", "Roberto Minervini", "Etats-Unis/Italie", "2018", "2h03", "vostfr"],
  ["GRASS", "Hong Sang-Soo", "Corée du Sud", "2018", "1h06", "vostfr"]
];

// 1.3

let container2 = document.createElement("div");
container2.hidden = true;
document.body.appendChild(container2);

function arraydisplay(array) {


  let j; //declaration of the variable
  let currentElmt; //creation of the current element
  let currentElmt2; //creation of the current element
  let table; //table creation
  let tbody; //creation tbody
  let tr; //creation tr
  let td; //creation tb
  let thead; //creation thead


  table = document.createElement("table"); //creation of the table
  container2.appendChild(table); //set the table in the body

  thead = document.createElement("thead"); //creation of the thead
  table.appendChild(thead); //set the thead in the table

  tbody = document.createElement("tbody"); //creation of the tbody
  table.appendChild(tbody); //set the tbody in the table

  tr = document.createElement("tr"); // creation of the tr




  for (var i = 0; i < array[0].length; i++) 									// browse through the elements of the two dimensional array's first sub array
  {
    let currentElt = array[0][i]												// set the current element

    let newTH = document.createElement('th');									// create a new th with the current element as its text content
    newTH.textContent = currentElt;

    tr.appendChild(newTH);												// appends it to the table row (which is in the thead)
  }

  thead.appendChild(tr);

    i = 0;


  while (i < array.length) { //Condition of continuation
    currentElmt = array[i];
    let tr = document.createElement("tr");//generated a tr

    j = 0;

    while (j < currentElmt.length) { //sequence path
      currentElmt2 = currentElmt[j];//Recovery of the current element
      let td = document.createElement("td");//generated a tr
      td.textContent = currentElmt[j];
      tr.appendChild(td);//put the td in the tr
      j++
    }
    tbody.appendChild(tr)
    i++
  }
}
arraydisplay(array);

//ex2

//2.1
let substances =																	// creation of the two-dimensional array
[
	['SUBSTANCES', 'Température de fusion ou solidification en °C', 'Température d’ébullition en °C'],
	['acide acétique', '17', '118'],
	['acide nitrique', '-41', '86'],
	['acide sulfurique', '10', '290'],
	['alcool éthylique', '-114', '78'],
	['aluminium', '660', '2450']
];


//2.2

function substancesBoiling(sequence, degree)										// function which will return every substance name whose boiling point is below the degree parameter
{
	let returnedArray = [];															// creation of the returned array
	let currentElt;                                    // creation of the currentElt
	let substanceName;																// creation of substance name
	let substanceBoilingPoint;                        // creation substance boiling point

	for (var i = 1; i < sequence.length; i++) 										// loop through the sequence
	{
		currentElt = sequence[i];													// saves the current element
		substanceName = currentElt[0];												// save the first element of the current element
		substanceBoilingPoint = parseInt(currentElt[2]);							// transforms the last element of the current element into a number and keeps it in memory

		if (substanceBoilingPoint < degree) 										// if the current boiling point is below the degree
		{
			returnedArray.push(substanceName);										// returns the array
		}
	}

	return returnedArray;															// returns the array
}

console.log(substancesBoiling(substances,3000));
