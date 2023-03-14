// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const noOfBlocks = Math.abs(location - 42);
    return noOfBlocks;
}

function distanceFromHqInFeet(distance) {
    const distanceFromHq = distanceFromHqInBlocks(distance) * 264;
    return distanceFromHq;   
}

function distanceTravelledInFeet(start, destination) {
    const distanceTravelled = Math.abs((destination - start) * 264)
    return distanceTravelled;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    }
    else if(distance >= 400 && distance < 2000) {
        return 2.56;
    }
    else if (distance >= 2000 && distance < 2500){
        return 25;
    }
    else {
        return "cannot travel that far"
    }
}
