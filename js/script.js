function CheckPassword(inputtxt) {

    var passwor = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.value.match(passwor)) {
        document.getElementById('inValid').style.visibility = "hidden";
        document.getElementById('Valid').style.visibility = "visible";
        return true;
    } else {
        document.getElementById('Valid').style.visibility = "hidden";
        document.getElementById('inValid').style.visibility = "visible";
        return false;
    }

}

document.getElementById('getRandomUser').addEventListener('click', getRandomUser);

function getRandomUser() {
    fetch('https://randomuser.me/api/?results=5')
        .then((res) => res.json())
        .then((data) => {
            let isso = data.results;
            let output = '<h2>Restaurant Customers</h2>'
            console.log(data);
            isso.forEach(function (user) {
                output += `
                <div class="customer">
                                
                    <a target="_blank" href="${user.picture.thumbnail}">
                    <img src="${user.picture.thumbnail}" alt="User">
                    </a>
                                
                 <ul><b>
                <li>${user.name.first} ${user.name.last}</i>
                    <li>Age: ${user.dob.age} Gender: ${user.gender}</li>
                    <li>Email: ${user.email}</li>
                    <li>City: ${user.location.city}</li>
                 </ul>   
                               
                </div>
                
                `;

            });
            document.getElementById('output').innerHTML = output;
        })
}




var total_items = 3;

function CalculateStarters(){
    let total = 0;

    for (let i = 1; i <= 3; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('StartersTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_3"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateStarters);
});


    


function CalculateMain(){
    let total = 0;

    for (let i = 4; i <= 6; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('MainTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_4"], [id^="qnt_5"], [id^="qnt_6"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateMain);
});

    


function CalculateDessert(){
    let total = 0;

    for (let i = 7; i <= 9; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('DessertTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_7"], [id^="qnt_8"], [id^="qnt_9"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateDessert);
});



function CalculateDrink(){
    let total = 0;

    for (let i = 10; i <= 12; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('DrinkTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_10"], [id^="qnt_11"], [id^="qnt_12"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateDrink);
});


function CalculateDrink(){
    let total = 0;

    for (let i = 10; i <= 12; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('DrinkTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_10"], [id^="qnt_11"], [id^="qnt_12"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateDrink);
});



function CalculateNonVegetarian(){
    let total = 0;

    for (let i = 1; i <= 5; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('NonVegetarianTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_1"], [id^="qnt_2"], [id^="qnt_4"], [id^="qnt_5"]  ').forEach(item => {
    item.addEventListener('keyup', CalculateNonVegetarian);
});

function CalculateVegetarian(){
    let total = 0;

    for (let i = 3; i <= 6; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + (parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price")));
        
    }
    document.getElementById('VegetarianTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_3"], [id^="qnt_6"]').forEach(item => {
    item.addEventListener('keyup', CalculateVegetarian);
});

var total_items = 12;

function CalculateItemsValue(){
    var total = 0;

    for (let i = 1; i <= total_items; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('ItemsTotal').innerHTML = "€" + total.toFixed(2);
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
});