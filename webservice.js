const EXPRESS = require ('express');
let app = EXPRESS();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

let PORT = process.env.PORT || 4000;
let ROUTER = EXPRESS.Router();


let DB = ["Laura","Antonio","Pedro","Brenda"];

ROUTER.get('/getNames', function(req,res){
    res.json({message: DB});

})

ROUTER.get('/getNamesById/:id', function(req,res){
    res.json({message: DB[req.params.id]})
})


ROUTER.post('/addName/:variable', function(req,res){
    //res.json({message: req.params.variable})
    //res.json({message: req.body})
    DB.push(req.params.variable);
    res.json({message:DB});
})

app.use('/api',ROUTER);

app.listen(PORT, function(){
    console.log("SERVER ESCUCHANDO EN PUERTO" + PORT);
});