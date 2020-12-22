const express = require('express')
const app = express()
const port = 8080
const MyModel=require('./connector')
const newsArticleModel=MyModel.newsArticleModel

const onePageArticleCount = 10


// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/newFeeds',async(req,res)=>{
   res.send(await newsArticleModel.find().skip(sanitize(req.query.offset,0)).limit(sanitize(req.query.limit,10)))    
   })
   const sanitize=(value,defaultvalue)=>{
       if(value==null||value==undefined||isNaN(Number(value))){
           return defaultvalue
       }
       return Number(value)

   }



app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;