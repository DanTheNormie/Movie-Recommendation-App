const app = require('express')()
const path = require('path')
const PORT = process.env.PORT || 5000

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
    res.render('homepage')
})

app.listen(PORT,()=>{console.log(`Server running at http://localhost:${PORT}`);})