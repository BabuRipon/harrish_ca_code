const http=require('http');
const path=require('path');
const fs=require('fs');

fs.readFile(path.join(__dirname,'test.txt'),'utf8',(err,data)=>{
   if(err) throw err;

    http.createServer((req,res)=>{
        if(data) res.write(data)
        else res.write('there is no content in the file')
        res.end()
    })
    .listen(5000,()=>console.log('server is running on port '+5000));
})
