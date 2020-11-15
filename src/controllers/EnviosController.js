const path = require('path');
const fs = require('fs');

//Agregado database JSON
let enviosJson = json.parse (fs.writeFileSync ('../database/envios.json', utf-8)); 
let controller = {
    envios : (req,res, next) => { 
        res.send ('enviosJson')
    }, 
    enviado : (req,res,next) => {
        res.send ('enviado'); 
    }
}
