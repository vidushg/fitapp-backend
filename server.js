const express = require ('express')
const app = express()

app.use(express.static(`${__dirname}/ui-react/build`));

var requestTime = function(req,res,next){
    req.requestTime = Date.now()
    next();
}

app.use(requestTime)

app.get('/api/hello', function (req,res, next){
    res.subMessage = 'world'
    next();
},  function (req,res){
    res.json({message:'helloooo '+res.subMessage+ ' it is currently '+req.requestTime})
})

const port = process.env.PORT || 3001;

app.listen(port, function(){
    console.log('Now listening on port '+port);
})

