function CheckPassword(inputtxt){

    var passwor = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.value.match(passwor))
    {
        alert('Strong password!')
        return true;
    } else
    {
        alert('Too weak! Password must be 8 to 15 characters and contain at least one numeric digit, one lowercase and uppercase letter, and one special character')
        return false;
    }

}

document.getElementById('getRandomUser').addEventListener('click', getRandomUser);

function getRandomUser(){
    fetch('https://randomuser.me/api/?results=5')
        .then((res)=>res.json())
        .then((data)=>{
            let isso = data.results;
            let output = '<h2>Restaurant Customers</h2>'
            console.log(data);
            isso.forEach(function (user){
                output +=`
                <div>
                                <style>
                                    img {
                                     border: 1px solid #ddd; /* Gray border */
                                     border-radius: 4px;  /* Rounded border */
                                     padding: 5px; /* Some padding */
                                     width: 150px; /* Set a small width */
                                    }

                                    /* Add a hover effect (blue shadow) */
                                    img:hover {
                                     box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
                                    }
                                    </style>
                                <a target="_blank" href="${user.picture.thumbnail}">
                                <img src="${user.picture.thumbnail}" alt="User">
                                </a>
                                
                                <h3>${user.name.first} ${user.name.last}</h3>
                               
                            </div>
                
                `;
                
            });
            document.getElementById('output').innerHTML=output;
        })
}