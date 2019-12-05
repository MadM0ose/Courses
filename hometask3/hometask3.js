var letters = []
var mainStr = "Backend As A Service"

function splitAndPush () {
    var arr = mainStr.split (" ")
    for (var i = 0; i < arr.length; i++){
        letters.push(arr[ i ][ 0 ])
    }
    
    var concLetters = letters.join ("")
    return concLetters
}




