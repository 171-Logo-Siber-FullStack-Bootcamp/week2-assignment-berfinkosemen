const getValues = (callback) =>{
    var durum = true;
    try{
        if(durum){
            callback(undefined, "Methos ok");
        }else{
            callback("Veri Getirilemedi", undefined);
        }
    }catch (error){
        callback("Veri Getirilemedi", undefined);
    }   
};

const callback = (err,data)=>{
    if(err){
        //Hata durumunda çalışacak
        console.log(err);
    }else{
        console.log(data);
    }
};

getValues(callback);

