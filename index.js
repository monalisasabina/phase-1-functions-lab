// Code your solution in this file!


function distanceFromHqInBlocks(distance){
    if(distance>42){
         return distance-42 
        } else {
            return 42 - distance
        }
}    


function distanceFromHqInFeet(distance){
    distanceFromHqInBlocks(distance);
    if(distance>42){
        return (distance-42) * 264
       } else {
           return (42 - distance) * 264
       }
}    


function distanceTravelledInFeet(start, destination) {
    if (start>42) {
        return (destination - start) *264
    } else {
        return (start-destination) *264
    }
  
}

function calculatesFarePrice(start, destination) {
    let result= distanceTravelledInFeet(start, destination); 
    if( result<400) {
        return 0
    } else if(result>=400 && result<=2000){
        return 2.56
    } else if(result>=2000 && result<=2500){
        return 25
    }else if(result>2500)
        return 'cannot travel that far'
}


