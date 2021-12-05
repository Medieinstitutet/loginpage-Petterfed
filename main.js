function check(form)
{
    if(form.username.value == 'janne' && form.password.value == 'test')
     {
        document.getElementById("maintext").innerHTML = "Du är nu inloggad";
        document.getElementById("logout").style.display="block";
        document.getElementById("password").style.display='none';
        document.getElementById("username").style.display='none';
        document.getElementById("usernametext").style.display='none';
        document.getElementById("passwordtext").style.display='none';
        document.getElementById("login").style.display='none';

}

    
    else  {
        document.getElementById("maintext").innerHTML = 'Fel användarnamn/lösenord'
    }



document.getElementById("logout").addEventListener("click", function() {
    document.getElementById("maintext").innerHTML = 'Använd formuläret ovanför för att logga in'
    document.getElementById("logout").style.display='none'
    document.getElementById("password").style.display='inline-block';
    document.getElementById("username").style.display='inline-block';
    document.getElementById("usernametext").style.display='block';
    document.getElementById("passwordtext").style.display='block';
    document.getElementById("login").style.display='inline-block';
;})}