const express = require ('express')
const bodyParser = require ('body-parser')
const cors = require ('cors')
const db = require ('./data/db')
const exerciseRouter = require ('./routes/exercise-router')



const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(express.static(`${__dirname}/ui-react/build`));


db.on('error', console.error.bind(console, 'MongoDB connectionError '));

var requestTime = function(req,res,next){
    req.requestTime = (Date.now()*1000).toLocaleString();
    next();
}

app.use(requestTime)

app.get('/api/hello', function (req,res, next){
    res.subMessage = 'world'
    next();
},  function (req,res){
    res.json({message:'helloooo '+res.subMessage+ ' it is currently '+req.requestTime})
})

app.use('/api', exerciseRouter)

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log('Now listening on port '+port);
})

