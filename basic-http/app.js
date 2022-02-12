const xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", ()=>{
    if(xhr.readyState == 4){
        console.log(xhr.responseText);
    }
});

xhr.open("GET", "http://jsonplaceholder.typicode.com/users");
xhr.send();