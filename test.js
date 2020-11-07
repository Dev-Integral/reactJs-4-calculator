console.log("Lets get started");

const url =require('url');
const http= require("http");
const fs=require('fs');
const {parse} = require('querystring')

var server = http.createServer(function(request, response) {
    var path = url.parse(request.url).pathname;

    switch(path){
        case'/':
            response.writeHead( 200, {
                'Content-Type': 'text/plain'
            });
            response.write("This is just the beginning");
            response.end();
            break;
        case '/page1.html':
            fs.readFile(__dirname + path, (error, data)=>{
                if(error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                }else{
                    response.writeHead(200, {"Content-Type": 'text/html'});
                    response.write(data);
                    response.end();
                }
            });
            break;
        case '/page2.html':
            fs.readFile(__dirname + path, (error, data)=>{
                if(error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                }else{
                    response.writeHead(200, {"Content-Type": 'text/html'});
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);
            response.write("Oops! This page does not exist - 404");
            response.end();
            break;
    }
    if(request.method==='POST'){
        
        collectReqData((request, result) =>{
            console.log(result);
            response.end(`Parsed data belonging to ${result.name}`);
        })
        
       console.log(request);
    }
    
});

server.listen(8082);

function collectReqData(req, callback) {
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(req.headers.content-type=== FORM_URLENCODED){
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end',  () => {
            callback(parse(body));
        })
    }else{
        callback(null);
    }
}