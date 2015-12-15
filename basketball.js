var promptForPlayerName = function (playerNumber) {
    var name = prompt(playerNumber + " what is your name?");
        if (name.length > 15)
    alert("Wow thats a long name!");
    return name;

};

var tryTwoPointShot = function (){
  var randOne = Math.random();
  var randTwo = Math.random();
    if (randOne > 0.2 && randTwo > 0.2){
    return true;
    }
    else {   
    return false;}
    
};
var tryThreePointShot = function (){
    var randOne = Math.random();
    var randTwo = Math.random();
    if (randOne <= 0.2){
        return true;
    }
    else if (randTwo >= 0.8){
        return true;
    }
    else{
        return false;
    }
}
var getShotString