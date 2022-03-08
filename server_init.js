//load the express module using 'require' directive
let express= require('express')
let app= express()
// define request and response in the URL(/)
app.get('/',function(req,res)
{
    res.send('hello world from empi')
})
//launch the server on any port in my case i am using port number 3000
app.listen(8080,function()
{
    console.log('your app is running on the port 8080')
})
