const getValue = () =>{
    //new instance of promise
    return new Promise((resolve,reject)=>{
        try{
            const xhr = new XMLHttpRequest();

            xhr.addEventListener("readystatechange", ()=>{
                if(xhr.readyState == 4){
                    resolve(xhr.responseText);
                }else{
                    reject("Bağlantı sağlanamadı");
                }
            });

            xhr.open("GET", "http://jsonplaceholder.typicode.com/users");
            xhr.send();
        }catch(error){
            reject(error);
        }        
    });
};

// resolve ı then ile
// reject i catch ile yakalarız
getValue().then(x=>{
    console.log(x);
}).catch(err=>{
    console.log(err);
}).finally(fin=>{
    console.log("Her Türlü Çalışırım");
    //yetki kontrolü olabilir
});

