const fs=require('fs');
const path=require('path');

fs.writeFile('test.txt', 'we are giving node.js evaluation-1', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  });

  fs.readFile(path.join(__dirname,'test.txt'),'utf8',(err,data)=>{
      if(err) throw err;

      console.log(data);
  })

