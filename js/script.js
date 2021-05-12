function CheckPassword(inputtxt) {

    var passwor = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.value.match(passwor)) {
        alert('Strong password!')
        return true;
    } else {
        alert('Too weak! Password must be 8 to 15 characters and contain at least one numeric digit, one lowercase and uppercase letter, and one special character')
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