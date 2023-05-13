import {readFile,appendFile,writeFile, read} from 'node:fs';

writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}\n','utf-8',(err)=>{
    if(err) console.log(err);
});
readFile('employees.json','utf-8',(err,data)=>{
    if(err) console.log(err);
    console.log(data);
});
appendFile('employees.json','{"name": "Employee 2 Name", "salary": 3000}','utf8',(err)=>{
    if(err) console.log(err);
});