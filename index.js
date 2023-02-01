const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}
const returnLastTwoDrivers = array => array.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int){
    return fare => fare*int;
}

const fareDoubler = createFareMultiplier(2);
//const fareDoubler = fare=>fare*2;

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfScubers, selectingDrivers){
    return selectingDrivers(arrayOfScubers);
    //we are passing in the arrayOfScubers through our second argument which is a function. When this function is called ex: returnFirstTwoDrivers, it will take the arrayOfScubers and return the first two divers!

}
