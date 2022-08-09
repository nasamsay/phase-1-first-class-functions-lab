const returnFirstTwoDrivers = function (arr){
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function (arr){
    return [arr[arr.length-2], arr[arr.length-1]]
}

let selectingDrivers =[returnFirstTwoDrivers , returnLastTwoDrivers]

function createFareMultiplier(int){
    return function fareMultiplier(){
        if (int==2){
            return fareDoubler(int)
        }
        else if(int==3){
            return fareTripler(int)
        }
        else if(int==5) {
            return fareQuintupler(int)
        }
    }
}

const fareQuintupler = function (fare){
    return fare*5
}



const fareDoubler = function (fare){
    return fare*2
}

const fareTripler= function (fare){
    return fare*3
}


function selectDifferentDrivers(arr, fct){
    return fct(arr)
}