const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const catagories = require('./data/categories.json');
const news = require('./data/news.json');

app.use(cors());

app.get('/', (req,res) => {
    res.send()
})

app.get('/categories', (req,res)=>{
    res.send(catagories);
})

app.get('/news', (req,res)=>{
    res.send(news);
})

app.get('/news/:id', (req,res)=> {
    const id = req.params.id;
    const selectedNews = news.find( n => n._id === id);
    res.send(selectedNews);
})


app.get('/categories/:id', (req,res)=> {
    const id = req.params.id;
    if(id == 0){
        res.send(news);
    }
    else{
        const selectedCategories = news.filter( n => n.category_id === id);
        res.send(selectedCategories);
    }
 
})

app.listen(port, ()=> {
   console.log(`Dragon news running on port: ${port}`);
})