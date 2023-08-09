let input = document.getElementById('input-box');
let ourList = document.getElementById('list-container');
let ourBtn = document.getElementById('add');
let inputValue = "";
let numberTask = 0;
let LoadingValu = "";
let LoadingElement = "";
let LoadingSpan = "";
let completedArray = [];

if (localStorage.length > 0)
{
    for (let i = 0; i < localStorage.length; i++)
    {
       LoadingValu = localStorage.getItem(`task${i}`);
       LoadingElement = document.createElement('li');
       LoadingSpan = document.createElement('span');
       LoadingSpan.innerHTML = "\u00d7";
       LoadingElement.innerHTML = LoadingValu;
       LoadingElement.appendChild(LoadingSpan);
       ourList.appendChild(LoadingElement);
        
    }

    numberTask = localStorage.length;
}


input.addEventListener('change', function (){
    inputValue = input.value;
});

ourBtn.addEventListener('click', function(){

   if (input.value == ""){
   {
    alert("Please enter a value");
   }
}
   else
{
    
    let ourValue = document.createTextNode(inputValue);
    let  ourItem = document.createElement('li');
    let ourSpan = document.createElement('span');
    ourSpan.innerHTML = "\u00d7";
     ourItem.appendChild(ourValue);
     ourItem.appendChild(ourSpan);
     ourList.appendChild(ourItem);
     console.log(ourItem);

     localStorage.setItem(`task${numberTask}`, inputValue);
     numberTask++;
     input.value = "";
     

}

})


ourList.addEventListener('click', function(e){

    if (e.target.tagName == "LI")
    {

        e.target.classList.toggle('checked');
    }

    else if (e.target.tagName == "SPAN")
    {
        e.target.parentElement.remove();

        let value = e.target.parentElement.innerText.slice(0,-1);
        let key;
        for (let i in localStorage)
        {
            if (localStorage.getItem(i) == value)
            {
                key = i;
            }

        }

        localStorage.removeItem(key);
    }
})





// if (ourItems)
// {
//     for (let i =0; i< ourItems.length; i++) {

//         ourItems[i].addEventListener('click', function(){
    
//             this.classList.toggleClass('checked');
//         })
//     }
// }



