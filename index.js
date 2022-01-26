const url = (url) => {
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}
const main = () => {
    data = url("https://api.github.com/users/arthursantosuea/repos");
    user = JSON.parse(data);
    console.log(user)
}
main();