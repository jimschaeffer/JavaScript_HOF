console.log("Hello World!\n==========\n");

/* function add(a, b){
    return a + b;
}

function greetHunter(){
    return function (greeting){
        return `${greeting}, Hunter!`;
    }
}

const greeting = greetHunter();
console.log(greetHunter()("Hey"));

let counter = () => {
    let count = 0;
    console.log("outer scope");
    return () => {
        count++;
        console.log(count);
    }
}
let count = counter();
count();
count();
count();
count(); */

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function(plusNumber) {
        return number + plusNumber;
    }
}

let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(function(element, index, array) {
    console.log(element.name);
  });

  // Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

/* const mappedResult = arr.map((element, index, array) => {
	return element - 10;
});

console.log(mappedResult);
console.log(arr); */

const mappedUsers = users.map((element, index, array) => {
  return {
    name: element.name,
    score: element.score};
});
  
console.log(mappedUsers);

  // Exercise 4 Section
  console.log("EXERCISE 4:\n==========\n");

/*   const filteredResult = arr.filter((element, index, array) => {
	return element >= 10;
});
console.log(filteredResult); */
  
const filteredUsers = users.filter((element, index, array) => {
  return element.isActive;
});
  
console.log(filteredUsers);

 // Exercise 5 Section
 console.log("EXERCISE 5:\n==========\n");

users.sort((a, b) => {
  if (a.score > b.score){
    return -1;
  } else if (a.score == b.score){
    return 0;
  } else {
    return 1;
  }
});

/* users.sort((a, b) => {
   return b.score - a.score;
}); */
  
console.log(users);

  // Exercise 6 Section
  console.log("EXERCISE 6:\n==========\n");

/*   const reducedResult = arr. reduce ((accumulated, current, index, array) => {
	return accumulated + current;
}), 2; // 2 is supplying an initial value
console.log(reducedResult); */

const scoreSum = users.reduce((acc, curr, index, array) => {
  console.log(acc, curr);
  return curr.score + acc;
}, 0);
console.log(scoreSum);
console.log(scoreSum/users.length);

  
/*   let scoresSum = users5.reduce(function(sum, user) {
    return sum + user.score;
  }, 0);
  
  let averageScore = scoresSum / users5.length; */
  
/*   console.log("Sum of scores:", scoresSum);
  console.log("Average score:", averageScore); */