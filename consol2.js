
var i;
for(i=1; i<101; i++){

    if(i % 3 == 0 && i% 5== 0 ){
        console.log("tigalima")
    }else if(i % 3 == 0){
        console.log("tiga")
    }else if(i % 5 == 0){
        console.log("lima")
    }
    else{
        console.log(i)
    }
}
