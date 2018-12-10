// # Start an interactive shell session
// ```js
var cidrRange = require('cidr-range');
var Client = require('ssh2').Client;
var tcpp = require('tcp-ping');

var conn = new Client();

var host = [];
hosts = cidrRange('10.182.64.1/21');
var cfg = {
      timeout: 10,
      // WARNING: -i 2 may not work in other platform like window
      extra: ["-i 2"],
  };

  hosts.forEach(function (host) {
    tcpp.ping({ address: host, port: '22', attempts: 1 }, function(err, data) {
          console.log(host + ' ' + JSON.stringify(data));
      });
    tcpp.ping({ address: host, port: '23', attempts: 1 }, function(err, data) {
            console.log(host + ' ' + JSON.stringify(data));
        });
  });
// var retData;
// var options = {
//   networkProtocol: ping.NetworkProtocol.IPv4,
//   packetSize: 16,
//   retries: 1,
//   sessionId: (process.pid % 65535),
//   timeout: 2000,
//   ttl: 128
// };
// var obj = {};



// host.forEach(element => {
//   //retData = MakeConnect(element)
//   // Default options
//   var key = element.toString();  
//   obj[key] = [];
//   var session = ping.createSession (options);
//   session.pingHost (host, function (error, target) {
//       if (error) {
//         if (error instanceof ping.RequestTimedOutError){
//           obj[element.toString()] = "Not Alive";
//           console.log (element + ": Not alive");
//           //obj[element.toString()
//         }
//         else{
//           console.log (element + ": " + error.toString ());
//           obj[element.toString()] = error.toString ();
//           session.close ();
//         }
//       }
//       else
//         obj[element.toString()] = "Alive";
//         console.log (element + ": Alive");
//   });
// //  console.log(element);
// });


// function MakeConnect(host){
//   conn.on('ready', function() {
//     console.log('Client :: ready');
//     conn.shell(function(err, stream) {
//       if (err) throw err;
//       stream.on('close', function() {
//         console.log('Stream :: close');
//         conn.end();
//       }).on('data', function(data) {
//           //data variable contains all SMBIOS info from Linux system
//           smBiosData = data;
//         console.log('STDOUT: ' + data);
//       }).stderr.on('data', function(data) {
//         console.log('STDERR: ' + data);
//       });
//       stream.end('dmidecode\nexit\n');
//     });
//   }).connect({
//     host: host,
//     port: 22,
//     username: 'root',
//     password: 'Wevalid8'
//   //   privateKey: require('fs').readFileSync('/root/.ssh/id_rsa.pub')
//   });
//     return smBiosData;
// }
