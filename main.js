/* let people = ['Antonio', 'Dani', 'Harry'];

// Ausloggen aller Namen in die Konsole.
for (let i = 0; i < people.length; i++) {
    let name = people[i];
    console.log(name);
}
// Kürzere, verdichtete Schreibweise
people.forEach(function(name) {
    console.log(name);
});
// Oder mit personObject als {} Object.
people.forEach(function(personObject) {
    console.log(personObject.name);
}); */

var people = [ 
    { name: "John Doe", age: 28, occupation: "Developer", city: "New York" }, 
    { name: "Jane Smith", age: 34, occupation: "Designer", city: "Los Angeles" }, 
    { name: "Sam Brown", age: 22, occupation: "Developer", city: "Chicago" }, 
    { name: "Lisa White", age: 30, occupation: "Manager", city: "Miami" }, 
    { name: "Paul Green", age: 45, occupation: "Developer", city: "New York" }, 
    { name: "Emily Johnson", age: 26, occupation: "Developer", city: "Los Angeles" }, 
    { name: "James Black", age: 39, occupation: "Designer", city: "New York" }, 
    { name: "Lucy Blue", age: 29, occupation: "Manager", city: "Chicago" }, 
    { name: "Michael Brown", age: 23, occupation: "Intern", city: "Miami" }, 
    { name: "Anna Davis", age: 32, occupation: "Developer", city: "Los Angeles" }
  ];
/* 
  JavaScript Array forEach()

  The forEach() method calls a function for each element in an array.

  Syntax
array.forEach(function(currentValue, index, arr), thisValue)

function()	  Required    A function to run for each array element.
currentValue	Required    The value of the current element.
index	        Optional    The index of the current element.
arr	          Optional    The array of the current element.
thisValue	    Optional    A value passed to the function as its this value.
 */


  // Übung 1: Verwenden Sie `forEach()`, um alle Namen zu protokollieren
  function logNames(arr) {
    arr.forEach(function(person) {
      console.log(person.name);
    });
  }
logNames(people);

function displayNames(arr) {
    let names;  
    arr.forEach(function(person) {
      names += person.name + "<br>";  // Füge jeden Namen hinzu und trenne sie mit einem Zeilenumbruch
    });
    document.getElementById("demo").innerHTML = names;  // Setze den HTML-Inhalt des Elements auf die Namen
  }
displayNames(people);


// Übung 2: Verwenden Sie `find()`, um den ersten Entwickler zu finden

/* JavaScript Array find()

The find() method returns the value of the first element that passes a test.

Array Find Methods:

  Method	        Finds
  indexOf()	      The index of the first element with a specified value
  lastIndexOf()	  The index of the last element with a specified value
  find()	        The value of the first element that passes a test
  findIndex()	    The index of the first element that passes a test
  findLast()	    The value of the last element that passes a test
  findLastIndex()	The index of the last element that passes a test */


  function findFirstDev(arr) {
    return arr.find(function(person) {
      return person.occupation === "Developer";
    });
  }

let firstDev = findFirstDev(people);
//-----------------------------------------------------------------------

document.getElementById("demo_2").innerHTML = people.find(checkJob).name;

function checkJob(person) {
  return person.occupation === "Developer";
}

//-----------------------------------------------------------------------
console.log(firstDev);

document.getElementById("demo_3").innerHTML = "The first developer is: " + firstDev.name
+ " " + "from" + " " + firstDev.city;


// Übung 3: Verwenden Sie `filter()`, um alle Entwickler zu erhalten

/* JavaScript Array filter()

The filter() method creates a new array filled with elements that pass a test provided by a function.

Syntax
array.filter(function(currentValue, index, arr), thisValue)

function()	  Required    A function to run for each array element.
currentValue	Required    The value of the current element.
index	        Optional    The index of the current element.
arr	          Optional    The array of the current element.
thisValue	    Optional     Default undefined, A value passed to the function as its this value.
 */

/* function checkAge(age) {
    return age > document.getElementById("ageToCheck").value;
  }
  
  function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter(checkAge);
  } */

    function getAllDevelopers(arr) {
        return arr.filter(function(person) {
          return person.occupation === "Developer";
        });
      }
      
      let developers = getAllDevelopers(people);

      console.log(developers);

    if (developers.length > 0) {
        let names = developers.map(function(dev) {
          return dev.name;
        }).join("<br>");
      document.getElementById("demo_4").innerHTML = "Developers:<br>" + names;
    }

// map(function(dev) { return dev.name; }) erstellt ein Array der Namen aller Entwickler.

// join("<br>") verbindet diese Namen zu einer Zeichenkette, wobei jeder Name in einer neuen Zeile angezeigt wird.


// Übung 4: Verwenden Sie `filter()`, um Personen über 30 zu erhalten

function getAllDevsAge(arr) {
    return arr.filter(function(person) {
      return person.age > 30;
    });
  }
  
  let devsAge = getAllDevsAge(people);

  console.log(devsAge);

if (developers.length > 0) {
    let names = devsAge.map(function(dev) {
      return dev.name;
    }).join("<br>");
  document.getElementById("demo_5").innerHTML = "Developers over 30:<br>" + names;
}


// Übung 5: Verwenden Sie `filter()` mit komplexer Logik


function getAllDevsCity(arr) {
    return arr.filter(function(person) {
      return person.occupation === "Developer" && person.age > 30 && person.city === "New York";
    });
  }

  let devsAllCity = getAllDevsCity(people);

  console.log(devsAllCity);

  if (developers.length > 0) {
    let names = devsAllCity.map(function(dev) {
      return dev.name;
    }).join("<br>");
  document.getElementById("demo_6").innerHTML = "Developers over 30 living in New York:<br>" + names;
}


// Übung 6: Verwende reduce()

/* Syntax
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

function()    Required    A function to be run for each element in the array.
total	        Required    The initialValue, or the previously returned value of the function.
currentValue	Required    The value of the current element.
currentIndex	Optional    The index of the current element.
arr	          Optional    The array the current element belongs to.
initialValue	Optional    A value to be passed to the function as the initial value.

The reduceRight() method works from right to left.
 */

function calculateAverageAge(arr) {
    let totalAge = arr.reduce(function(sum, person) {
      return sum + person.age;
    }, 0);  // 0 ist der initiale Wert von sum
    
    return totalAge / arr.length;
  }
  
  let averageAge = calculateAverageAge(people);
  console.log("Average age:", averageAge);

  document.getElementById("demo_6").innerHTML = "Average age: " + averageAge.toFixed(2);

// averageAge.toFixed(2) formatiert das Ergebnis auf zwei Dezimalstellen (gerundet).

/* toString() ist eine Methode, die auf Objekten aufgerufen werden kann, um eine Zeichenfolgendarstellung 
(String-Repräsentation) des Objekts zu erhalten.

Bei Arrays gibt toString() eine durch Kommas getrennte Zeichenfolge der Elemente zurück.
Bei Zahlen gibt es eine Zeichenfolge der Zahl zurück.
Bei Boolean-Werten gibt toString() "true" oder "false" zurück.
Bei Funktionen gibt toString() den gesamten Quellcode der Funktion als Zeichenkette zurück.
bsp. console.log(person.toString()); // gibt "Name: Alice, Age: 25" zurück */
/* 
Zahlen in ihre binäre Darstellung umwandeln

var num = 42;
var binaryString = num.toString(2);
console.log(binaryString);  // Ausgabe: "101010"

Du kannst toString() auch verwenden, um Zahlen in andere Basen umzuwandeln:
Hexadezimal (Basis 16):
var hexString = num.toString(16);
 */


// Übung 7: Verwende join() und  map()

// The join() method returns an array as a string.

/* Syntax
array.join(separator) 

separator	Optional
The separator to be used. Default is a comma.


map()

// map() creates a new array from calling a function for every array element.

/* Syntax
array.map(function(currentValue, index, arr), thisValue)

currentValue	Required
index	        Optional
arr	          Optional
thisValue	    Optional
*/

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text_3 = fruits.join(" and ");

document.getElementById("demo_7").innerHTML = text_3;


let text = people.map(function(dev) {
    return dev.city;
    }).join("<br>");


let text_2 = people.map(function(dev) {
    return dev.age;
}).join(" and ");

document.getElementById("demo_8").innerHTML = text;

document.getElementById("demo_9").innerHTML = text_2;


// Übung 8: Verwende sort()

/* The sort() method sorts the elements of an array.

The sort() method sorts the elements as strings in alphabetical and ascending order.

The sort() method overwrites the original array. 

sorting numbers can produce incorrect results. fix this by providing a "compare function"

Syntax
array.sort(compareFunction)

compareFunction	-> Optional. A function that defines a sort order. 
*/

// Sort the Array
fruits.sort();

// Reverse the Array
fruits.reverse();

/* The reverse() method reverses the order of the elements in an array.

The reverse() method overwrites the original array. 

Syntax
array.reverse()*/

//Sort an Array of Numbers Ascending
//array.sort(function(a, b){return a-b});

// Sort an Array of Numbers Descending
//array.sort(function(a, b){return b-a});


function sortByAge(arr) {
    return arr.sort(function(a, b) {
      return a.city - b.city; // Auf-/ Absteigende Sortierung
    });
  }
  
  let sortedPeople = sortByAge(people);
  console.log(sortedPeople);

  let text_5 = people.map(function(dev) {
    return dev.city;
    }).join("<br>");

document.getElementById("demo_10").innerHTML = text_5;