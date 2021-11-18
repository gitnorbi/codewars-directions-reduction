function dirReduc(arr){
    //First arrLengthBeforeLooping variable get a plus one so the while loop can start
    //After it starts it gets its actual value "arr.length" to hold it 
    //And when arr.length!=arrLengthBeforeLooping beconme false, than it means there is nothing 
    //more to change so we have our result
    let arrLengthBeforeLooping=arr.length+1;
    
    while (arr.length!=arrLengthBeforeLooping) {
  
    arrLengthBeforeLooping=arr.length;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==="NORTH"&&arr[i+1]==="SOUTH"){
            arr.splice(i, 2);
        }
    } 

    for(let i=0;i<arr.length;i++){
        if(arr[i]==="SOUTH"&&arr[i+1]==="NORTH"){
            arr.splice(i, 2);
        }
    }

    for(let i=0;i<arr.length;i++){
        if(arr[i]==="EAST"&&arr[i+1]==="WEST"){
            arr.splice(i, 2);
        }
    } 

    for(let i=0;i<arr.length;i++){
        if(arr[i]==="WEST"&&arr[i+1]==="EAST"){
            arr.splice(i, 2);
        }
    } 
   
}

 return arr

}

let arrayToPass=[ 'NORTH','NORTH','SOUTH','NORTH','NORTH','NORTH','NORTH','NORTH','NORTH','NORTH','NORTH' ]
dirReduc(arrayToPass);
