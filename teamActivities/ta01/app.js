const http = require('http');

const server = http.createServer((req, res) => {
    let sports = ["Soccer", "Basketball", "Hockey"];
    const url = req.url;
    if (url === '/') {
        res.setHeader("Content-Type", 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello Browser!</Title></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my world!</h1>');
        // navigation to your activities endpoint.
        res.write('<a href="./activities">Activities List</a></br>');
        return res.end();
    }

    if (url === '/activities') {
        res.setHeader("Content-Type", 'text/html');

        res.write('<html>');
        res.write('<head><title>Sports</title><head>');
        sports.forEach(element => {
            res.write("<li>" + element + "<li>")
        });
        res.write('<body><form action="/add-activity" method="POST">'
            + '<input type="text">'
            + '<button type="submit">Submit</button>'
            + '</form></body>');
        res.write('</html>');
        return res.end();
    }

    const _method = req.method;
    if (url === '/add-activity' && _method === 'POST') {
        const body = [];

        req.on('data', chunk => {
            console.log (chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();        
            console.log(parsedBody);
        });

        res.statusCode = 302;
        res.setHeader('Location', '/activities')
        return res.end();
    }
});
server.listen(3000); 