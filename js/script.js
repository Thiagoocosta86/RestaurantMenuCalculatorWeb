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