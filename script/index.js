var navAdd = document.querySelector('.nav-item');
var headersList = document.querySelector('#subjects');
var header = document.querySelectorAll('.card-header');
var cardContainer = document.querySelector('.card-container');
navAdd.addEventListener('click',()=>{
    var divElement = document.createElement('div');
    divElement.className = "card";
    divElement.innerHTML = `
    <div class="card-header">
        <h1>lorem ipsum</h3>
    </div>
    <div class="card-body">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem at ipsum consectetur earum eveniet nulla fugit error saepe voluptas maiores? Perferendis temporibus ratione similique illum porro amet rem tenetur repudiandae!
    </div>
`;
    cardContainer.appendChild(divElement);
    var li = document.createElement('li');
    li.innerText='lorem ipsum ';
    console.log(li)
    headersList.appendChild(li);
     
    

    })