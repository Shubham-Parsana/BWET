const fs = require('fs')

// fs.readFile("data.txt","utf8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// try{
//     data = fs.readFileSync("data.txt", "utf8")
//     console.log(data)
// }catch(err){
//     console.log(err)
// }

// fs.writeFile("output.txt","Hello World!",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File written successfully")
//     }
// }
// )

// fs.appendFile("data.txt","Hello ved",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Message appended")
//     }
// })

// fs.unlink("output.txt",(err)=>{
//     console.log("file deleted0")
// })

// fs.mkdir("demo",(err)=>{
//     if(err.code ==="EEXIST"){
//         console.log("Folder already exist")
//     }
//     else{
//         console.log(err)
//     }
//     return;
//     console.log("New folder created")
// })

// fs.readdir("demo",(err,files)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("Files in demo documents :")
//     files.forEach(file=>{
//         console.log(file)
//     })
// })

// fs.copyFile("data.txt","copyData.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("File copied");
        
//     }
// })

// if(fs.existsSync("data.txt")){
//     console.log("it exits")
// }
// else{
//     console.log("It does not exits"); 
// }

fs.watchFile("data.txt",(curr,prev)=>{
    console.log("Changes are made");
    
})