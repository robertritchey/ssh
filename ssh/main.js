require('events').EventEmitter.defaultMaxListeners = 0;
const dns = require('dns');
const arpScanner = require('arpscan');
var nmap = require("node-nmap");
const cidrTools = require("cidr-tools");
var net = cidrTools.expand("10.182.64.1/24");

var res = [];
var txt;
var options = { interface:  'eth0'}
function GetArp (arp, name) {
    return new Promise ((resolve, reject) => {
        return arpScanner(onResult, options);
}
function onResult(err, data){
    if(err) {
        throw err;
    }
    // console.log(JSON.stringify(data));
    return data;
}
/* 
    data.forEach(el => {
         el.dnsname = async () => {
            await dns.reverse(el.ip, function (err, domains) {
                if (err) {
                    //console.log('reverse for ' + el.ip + ' failed: ' + err.message);
                    return err.message;
                } else {
                    //console.log('reverse for ' + el.ip + ': ' + JSON.stringify(domains));
                    return JSON.stringify(domains);
                }
            });
        }
        console.log(el.dnsname + " " + el.ip +  " " + el.mac + " " + el.vendor);
    });


function onError(err) {
    throw err;
}

nmap.nmapLocation = "nmap"; //default
var quickscan = new nmap.QuickScan(net);

quickscan.on("complete", function(data) {
  data.forEach(el => {
    res.push(el);
    //console.log(el.hostname, el.ip, el.mac, el.vendor);
    var osandports = new nmap.OsAndPortScan(el.ip);
    osandports.on("complete", function(data) {
      res.push(data);
      //   console.log(JSON.stringify(data));
    });
    osandports.on("error", function(error) {
      console.log(error);
    });

    osandports.startScan();
  });
});
quickscan.on("error", function(error) {
  console.log(error);
});

quickscan.startScan();
*/