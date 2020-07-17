// --------- Problem-1 Start--------------
function feetToMile(feet) {
    if (feet < 0) {
        return "Distance can not be negative value";
    }
    else {
        var mile = feet / 5280;
        return mile;
    }
}
var result = feetToMile(25);
console.log(result);
// --------- Problem-1 End----------------

// --------- Problem-2 Start--------------
function woodCalculator(chair, table, bed) {
    if (chair < 0 || table < 0 || bed < 0) {
        return "Enter positive value";
    } else {
        var chairCount = chair * 1;
        var tableCount = table * 3;
        var bedCount = bed * 5;
        var totalWood = chairCount + tableCount + bedCount;
        return totalWood;
    }
}
var woodResult = woodCalculator(0, 4, 4);
console.log(woodResult);
// --------- Problem-2 End----------------

// --------- Problem-3 Start--------------
function brickCalculator(floorNumber) {
    var brick = 1000;
    var firstTenFloor = 10 * 15 * brick;
    var secondTenFloor = 10 * 12 * brick;

    if (floorNumber >= 1 && floorNumber <= 10) {
        return floorNumber * 15 * brick;
    }
    else if (floorNumber >= 11 && floorNumber <= 20) {
        var rest = floorNumber - 10;
        rest = rest * 12 * brick;
        var total = firstTenFloor + rest;
        return total;
    }
    else if (floorNumber > 20) {
        var rest2 = floorNumber - 20;
        rest2 = rest2 * 10 * brick;
        var total2 = firstTenFloor + secondTenFloor + rest2;
        return total2;
    }
    else {
        return "Enter a positive value or Greater than zero value";
    }
}
var result = brickCalculator(20);
console.log(result);
// --------- Problem-3 End----------------

// --------- Problem-4 Start--------------
function tinyFriend(names) {
    var smallest = names[0];
    for (var i = 1; i < names.length; i++) {
        if (names[i] == "") {
            console.log("Name cannot be empty string");
        }
        var currentName = names[i];
        if (smallest.length > currentName.length) {
            smallest = currentName;
        }
    }
    return smallest;
}

var nameResult = tinyFriend(["asima", "noha", "anu", "saiyara", "akila", "maisha", "anu"]);
console.log(nameResult);
// --------- Problem-4 End----------------