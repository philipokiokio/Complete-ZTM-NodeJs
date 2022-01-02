const express = require('express');
const PORT = 3000;
const app = express()
const path = require('path');


const friendsRouter = require('./routes/friends.router');
const messagesRouter = require('./routes/messages.router');


app.set('views',path.join(__dirname, 'views'));
app.set('view engine','hbs');


app.use((req,res,next)=>{
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl}${req.url} time: ${delta}ms`);
})

app.use('/site',express.static(path.join(__dirname, 'public')))
app.use(express.json());



app.get('/', (req,res)=>{
    res.render('index',{
        title: 'My friends are very clever',
        caption: 'France is very Beautiful!'
    })
});


app.use('/friends', friendsRouter);

app.use('/message', messagesRouter);



app.listen(PORT, ()=>{
    console.log(`express server is listening on http://localhost:${PORT}`)
})
