let input = document.getElementById('input-box');
let ourList = document.getElementById('list-container');
let ourBtn = document.getElementById('add');
let inputValue = "";
let numberTask = localStorage.length;
let LoadingValu = "";
let LoadingElement = "";
let LoadingSpan = "";
let ourArray = [];
let tasksArray =[];


if (localStorage.length > 0)
{
    let tasksArray = JSON.parse(localStorage.getItem('taskArray'));
    for (let i = 0; i < tasksArray.length; i++)
    {
       LoadingValu = tasksArray[i].value;
       LoadingElement = document.createElement('li');
       LoadingSpan = document.createElement('span');
       LoadingSpan.innerHTML = "\u00d7";
       LoadingElement.innerHTML = LoadingValu;
       LoadingElement.appendChild(LoadingSpan);
       ourList.appendChild(LoadingElement);
        
    }
}


input.addEventListener('change', function (){
    inputValue = input.value;
});

ourBtn.addEventListener('click', function(){

   if (input.value.trim() == ""){
   {
    alert("Please enter a value");
   }
}
   else
{
    saveData();
}

})


ourList.addEventListener('click', function(e){

    if (e.target.tagName == "LI")
    {

        e.target.classList.toggle('checked');
    }

    else if (e.target.tagName == "SPAN")
    {
        removeElement(e);
    }
})



function saveData(){
    let ourValue = document.createTextNode(inputValue);
    let  ourItem = document.createElement('li');
    let ourSpan = document.createElement('span');
    ourSpan.innerHTML = "\u00d7";
     ourItem.appendChild(ourValue);
     ourItem.appendChild(ourSpan);
     ourList.appendChild(ourItem);
     ourArray.push({id: `${numberTask}`, value: inputValue});
     localStorage.setItem(`taskArray`, JSON.stringify(ourArray));
     numberTask++;
     input.value = "";
}


function removeElement(e){

    let value = e.target.parentElement.innerText.slice(0,-1);
      
       let ourArray = JSON.parse(localStorage.getItem("taskArray"));
       
      
       let fliteredArray = [];
       
       for (let i in ourArray) {
       
        if (ourArray[i].value.trim() != value.trim() ) {
    
            fliteredArray.push(ourArray[i]);
        }


        e.target.parentElement.remove();


        localStorage.setItem(`taskArray`, JSON.stringify(fliteredArray));

}
}