const hq = 42;
function distanceFromHqInBlocks(pickup){
    return Math.abs(pickup - hq);
}
distanceFromHqInBlocks(pickup);

function distanceFromHqInFeet(pickup){
   distanceFromHqInBlocks(pickup);
   return distanceFromHqInBlocks(pickup) * 264;
}
distanceFromHqInFeet(pickup);

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264;
}
distanceTravelledInFeet(start, destination);

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return distance * 0;
    } else if (distance > 400 && distance < 2000){
        return (distance - 400) * .02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}
calculatesFarePrice(start, destination);