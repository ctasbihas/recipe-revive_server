const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chefs = require('./data/chefs.json');
const cookingTips = require('./data/cookingTips.json');
const blogs = require('./data/blogs.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('RR is running')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    const selectedChef = chefs.find(chef => chef.id === id);
    res.send(selectedChef)
})

app.get('/blogs', (req, res) => {
    res.send(blogs)
})

app.get('/cooking-tips', (req, res) => {
    res.send(cookingTips)
})

app.listen(port, () => {
    console.log(`RR is running on port: ${port}`)
})
