let todoList = [
  // {
  //   item: "Hello",
  //   dueDate: "12/12/2005",
  // },
  // {
  //   item: "world",
  //   dueDate: "12/12/2007",
  // },
];
displayItems();
function addTodo() {
  let inputElement = document.querySelector(".write");
  let dateElement = document.querySelector(".dateType");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  // dateElement.value='';
  displayItems();
}
//FOR ADD ONLY
// function displayItems() {
//   let displayElement = document.querySelector(".paragraph");
//   displayElement.innerText='';
//   for (let i = 0; i < todoList.length; i++) {
//     displayElement.innerText = displayElement.innerText +"\n"+todoList[i];
//   }
// }

function displayItems() {
  localStorage.setItem('storeList',JSON.stringify(todoList));
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    // let item=todoList[i].item;
    // let dueDate=todoList[i].dueDate; OR

    let {item, dueDate} = todoList[i];
    newHtml += `
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="backTick"onclick="todoList.splice(${i},1);displayItems();">DELETE</button>
    
    `;
  }
  containerElement.innerHTML = newHtml;
 
}
