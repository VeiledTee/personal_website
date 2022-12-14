// npm run devStart
// colours:
// purple (dark) - 2a3250
// purple (lighter) - 404e7c
// blue - 42bfdd
// beige - f0e2e7

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request, response) => {
	// console.log('Homepage')  // output in console
	// response.status(500).send("Hello!")  // chain status and messages
	// response.status(500).json({msg : "Yikes"})  // chain status and json messages
	// response.json({msg : "Yikes"})  // send json messages
	// response.download('server.js')  // prompts download of server.js file
	// response.render('index')  // render file
	response.render('index', { text: 'Passing text from server.js to index.ejs' }); // render file with second param passed down to said file
});

// app.listen(port)

// fs.readFile('./index.html', function (err, html) {
//     if (err) {
//         throw err;
//     }
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(port, function(error) {
//         if (error) {
//             console.log('Done goofed', error)
//         }
//         else {
//             console.log(`I hear you on port ${port}`)
//         }
//     })
// });

// console.log("It worked!")

const project_router = require('./routes/projects');
const test_router = require('./routes/test');
const lecture_router = require('./routes/teaching');

app.use('/projects', project_router);
app.use('/test', test_router);
app.use('/teaching', lecture_router);

const server = app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.log('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(port);
        }, 1000);
    }
});

