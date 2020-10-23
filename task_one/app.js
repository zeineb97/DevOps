var http = require('http');
const si = require('systeminformation');

async function memoryData(request, response) {
    try {
      const data = await si.mem();
      response.writeHead(200, { 'Content': 'text/plain' });
      response.write('Memory Information:'+ '\n' +'\n');

      response.write('- Total: ' + data.total + ' Bytes'+ '\n');
      response.write('- Free: ' + data.free + ' Bytes' + '\n');
      response.write('- Used: ' + data.used + ' Bytes' +  '\n');
      response.write('- Active: ' + data.active + ' Bytes' + '\n' );
      response.write('- Available: ' + data.available + ' Bytes' + '\n');

      response.write('...');
      response.end();

    } catch (e) {
      console.log(e)
    }

  } 

/*function onRequest(request, response) {
    memoryData();
   

    response.write();
    
}*/
http.createServer(memoryData).listen(8000);
//const memory = navigator.deviceMemory
//console.log (`This device has at least ${memory}GiB of RAM.`)
