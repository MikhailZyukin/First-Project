let express = require('express');

const server = {
    port: 3000
}

let app = express();

app.use(express.static('public'));

app.get('/',function(requst, response){
    // response.end('I am worked!');
    response.render('index.html');
});

app.listen(server.port, function(){
    console.log(`node express work on ${server.port}`);
});



