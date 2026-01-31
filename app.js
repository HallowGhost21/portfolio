//DOM Manipulation
/*
const title = document.querySelector('#main-heading');

title.style.color = "grey"; //this is called inline stylying
// On
*/

//Creating Items

const ul = document.querySelectorAll('ul');
const li = document.createElement('li');
//Adding elements

//apply the Append method
ul.append(li);


//modifying texts


const firstListItem = document.querySelectorAll('list-item')

console.log(firstListItem.innerText)
console.log(firstListItem.textContent)
console.log(firstListItem.innerHTML)


//Styling Elements

/*
const ListItems = document.querySelectorAll('.list-items');


for(i =0; i<ListItem.length; i++){
    
    ListItems[i].style.fontSize = '5rem';
}
*/
console.log(ListItems);