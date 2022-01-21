document.addEventListener('DOMContentLoaded',()=>{
   let form =document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    handleToDoList(e.target.new_task_description.value);
    //form.reset();
  });
});

function handleToDoList(todo){
  let li= document.createElement('li');
  let btn=document.createElement('button');
  btn.addEventListener('click',handleDelete)
  btn.textContent=' x'
  li.textContext=todo;
  li.appendChild(btn);
  console.log(li);
  document.querySelector("#tasks").appendChild(li);
}


function handleDelete(e){
  e.target.parentNode.remove()
}
