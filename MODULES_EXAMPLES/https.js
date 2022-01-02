const { send }= require('./request');
const { read } = require('./response');
 
 
function  makeRequest(url, data){
    send(url,data);
    return read();
 }

 console.log(makeRequest('https://www.google.com','Hello'))