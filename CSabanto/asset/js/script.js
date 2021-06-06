var y = [{username:"admin",password:"admin"},
         {username:"user",password:"user"}]

function getInfo() {
    var user = document.getElementById("username").value
    var pword = document.getElementById("password").value

    for(i=0;i<y.length;i++){
        if(user == y[i].username && pword == y[i].password){
            alert("Welcome " + user)
            return
        }
    }
    alert("Unauthorized User!")
}