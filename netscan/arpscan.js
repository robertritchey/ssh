
var arpScanner = require('arpscan');
var options = [ '-i eth0']
var options = []
arpScanner(onResult, options);
function onResult(err, data){
    if(err) { 
        throw err; 
    }
    var i = 0;
    var len = 0;
    len = data.length;
    for (i = 0; i < len; i++ ) {
        newFunction( data[ i ] );
    }

    function newFunction() {
        console.log(data[i]);
    }
//    console.log(data);
}

// var arpScanner = require("arpscan/promise");
// //import arpScanner from 'arpscan/promise';
// // var options = [ ' --interface eth0 --localnet']
// arpScanner(options)
//     .then(onResult)
//     .catch(onError);
 
// function onResult(data) {
//     console.log ( data )
// }
 
// function onError(err) {
//     throw err;
// }