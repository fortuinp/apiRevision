//  import {addition} from'./addition.js'
// //  const {subtraction}=require('./subtraction') this is common
// import {subtraction}from'./subtraction.js'
//  console.log(addition(7,2));
//  console.log(subtraction(7,3));
//  console.log(subtraction(3,7));

import http from 'http'
// common js --conts http =require(http'')
const port = +process.env.PORT || 4000

//CREATE WEB SERVER
http.createServer((req,res)=>{
res.writeHead(200,{
    'Content-type':'application/json'
})
// console.log(`
// URL:${req.url}
// HTTP method:${req.method}`);


switch(req.url){
    case '/':
        res.end(JSON.stringify("you're home"))
        break
        case '/about':
        res.end(JSON.stringify("About page"))   
        break
        default:
            res.end(JSON.stringify("404 page"))   
}

}).listen(port,()=>{
    console.log(`server is running on : http://localhost:${port}`);
})