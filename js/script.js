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

var total_items = 12;

function CalculateItemsValue(){
    var total = 0;

    for (let i = 1; i <= total_items; i++) {
       itemID =document.getElementById("qnt_" + i);
       total = total + parseInt(itemID.value) * parseInt(itemID.getAttribute("data-price"));
        
    }
    document.getElementById('ItemsTotal').innerHTML = "€" + total;
}

document.querySelectorAll('[id^="qnt_"]').forEach(item => {
    item.addEventListener('keyup', CalculateItemsValue);
});