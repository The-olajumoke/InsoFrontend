function UserAction() {
console.log("Test");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
alert(this.responseText);
}
};
var params = 'username=username&password=password';
xhttp.open("POST", "http://localhost:8080/api/auth/signin", true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send(params);
}
