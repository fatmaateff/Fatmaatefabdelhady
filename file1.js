window.addEventListener('load',function(){
    usertext=this.document.getElementById('username');
    userpass=this.document.getElementById('userpass');
    email=this.document.getElementById('email');
    usertext.focus();
    //validate
    usertext.addEventListener('blur',function() {
        if (usertext.value !== ''){
            console.log("blured");
            if (!usernamevalid()) {
                this.className = "error" ; 
                this.focus();
                this.select();
                console.log("err");
            } else { 
                this.className = "succes";
                console.log("ss");
            }
        userpass.addEventListener('blur', function(){
            if(!userpassvalid()){
                this.className="error";
                this.focus();
                this.select();
            } else{
                this.className="succes";
            }
        });
        }else {
            alert("write username");
        }

});
this.document.forms[0].addEventListener('submit', function(e){
    if(!(usernamevalid() && userpassvalid() && emailvalid()) ) {
        e.preventDefault();
    }
})
this.document.forms[0].addEventListener('reset' , function(e){
    if(!confirm('are you sure to cancel?')) {
        e.preventDefault();
    }
})
document.querySelector("select").addEventListener("change",function(){
    document.getElementById("zip").value = document.querySelector("select").value;
})
// window.oncontextmenu= function(e){
//     alert('you cannot do this');
//     e.preventDefault();
// }
}); //end of load
function usernamevalid(){
    return usertext.value.match(/^[a-zA-Z]{4,6}$/);
}
function userpassvalid(){
    return userpass.value.match(/^[0-9]{5,8}$/);
}
function emailvalid(){
    return email.value.match(/^[a-zA-z]{10,20}/);
}
