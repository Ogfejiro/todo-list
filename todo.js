let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")):[];

console.log(itemsArray);

document.querySelector("#add").onclick = function(){
  if (document.querySelector("#item").value.length == 0)
    alert("please add task");
  
}

document.querySelector("#add").addEventListener("click", () =>{
  let item = document.querySelector("#item");
  createItem(item);
})

function createItem(){
  itemsArray.push(item.value);
  localStorage.setItem("items", JSON.stringify(itemsArray))
  location.reload();
}

function displayItems(){
  let items = "";
  for(let i=0; i<itemsArray.length; i++){
  items += `<div class="list">
  <div class="flex">
  <div class="input-controller">
<p disabled>${itemsArray[i]}</p>
</div>
<div class="edit-controller">
  <i class="fa-sharp fa-solid fa-trash deleteBtn "></i>
  <i class="fa-sharp fa-solid fa-pen-to-square editBtn"></i>
</div> 
</div>
  `
  }document.querySelector(".todo-list").innerHTML = items
  activateDeleteListeners()
  activateEditListeners()
 
}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((db, i) =>{
    db.addEventListener("click", () => {deleteItem(i)})
  })
}


function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem("items", JSON.stringify(itemsArray))
  location.reload();
}

window .onload = function(){
  displayItems()
}