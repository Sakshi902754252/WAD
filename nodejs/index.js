const express= require('express');
const app=express();  /* app variable is used to serve the webpage on the server */

app.use(express.static('public'))
app.listen(4000,()=>{
    console.log('Server is started');
})
