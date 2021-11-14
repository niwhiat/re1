  const addbutton1 = document.querySelector('#btn1');

  const sortbyalphabet = document.querySelector('#btn2');
  const sortbydate = document.querySelector('#btn3');
  const reset = document.querySelector('#btn4');
  
  const todolist = document.querySelector('#ToDoList1')
  const form = document.querySelector('#form');

  const inputtask = document.querySelector('#is1');
  const sortbyname = document.querySelector('#ss1')

  const date1 = document.querySelector('#date1');
  const date2 = document.querySelector('#date2');
//
let Mas = [];
addbutton1.addEventListener ('click',function(){
    let newtodo = {
      todo: inputtask.value,
      checked: false,
    };
    Mas.push(newtodo);
    console.log(newtodo);
  });
