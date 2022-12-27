const objectToTest = {
  name: "nameValue",
  surname: "surnameValue",
  address: "addressValue",
};

//1. Wyświetl wszystkie klucze w obiekcie
console.log(Object.keys(objectToTest));

//2. Wyświetl wszystkie wartości w obiekcie
console.log(Object.values(objectToTest));

//3. Wyświetl wszystkie pary klucz wartość w jednym stringu
for (const [key, value] of Object.entries(objectToTest)) {
  console.log(`${key}: ${value}`);
}

//4. Zmień wartość na polu surname na inną dowolną
objectToTest.surname = "changed Surname";

//5. Dodaj klucz wartości do obiektu data:10.11
objectToTest.data = 10.11;
console.log(objectToTest);

//6. Usuń nieistniejącą wartość
delete objectToTest.age;

//7. Odczytaj nieistniejącą wartość + obsługa błędu
function checkIfPropertyExistsAndLogIt(object, property) {
  if (object[property] != undefined) {
    console.log(object[property]);
  } else {
    console.log(`The property '${property}' doesn't exist`);
  }
}
checkIfPropertyExistsAndLogIt(objectToTest, "age");

//8. Odczytaj wartość name.surname + obsługa błędu
try {
  if ("surname" in objectToTest.name === true) {
    console.log(objectToTest.name.surname);
  }
} catch (er) {
  console.log(`Value doesn't exist`);
}

//9. Odczytaj wartość test.test + obsługa błędu
if (
  objectToTest.test &&
  typeof objectToTest.test === "object" &&
  objectToTest.test.test
) {
  console.log(objectToTest.test.test);
} else if (objectToTest.test && typeof objectToTest.test !== "object") {
  console.log("objectToTest.test is not an object.");
} else if (!objectToTest.test) {
  console.log(`There's no 'test' key in objectToTest`);
} else {
  console.error("There's no 'test' key inside objectToTest.test");
}
//10. Wyświetl wszystkie klucze w obiekcie iteracyjnie

for (const key in objectToTest) {
  console.log(key);
}
//11. Wyświetl wszystkie wartości w obiekcie iteracyjnie
for (const key in objectToTest) {
  console.log(objectToTest[key]);
}
//12. Wyświetl wszystkie wartości klucz wartość w jednym stringu iteracyjnie (pętla)
for (const key in objectToTest) {
  console.log(`${key}: ${objectToTest[key]}`);
}
//13. Zamień klucze z obiektu na tablicę tabKeys
const tabKeys = Object.keys(objectToTest);
console.log(tabKeys);
//14. Do każdej wartości tabKeys dodaj suffix 'suffix' za pomocą array.map
console.log(tabKeys.map((item) => item + "suffix"));
//15. Wyfiltruj wartości z tabKeys których długość jest większa niż 5 (jako pętla oraz jako array.filter)
const longItems = [];
for (const item of tabKeys) {
  if (item.length > 5) {
    longItems.push(item);
  }
}
console.log(longItems);

const filteredItems = tabKeys.filter((item) => item.length > 5);
console.log(filteredItems)
