const http = require('http');

const server = http.createServer((req, res) => {
    const body = [];
    const url = req.url;
    let ParsedName;

    if (url === '/') {
        res.setHeader("Content-Type", 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/parse" method="POST">' +
            '<input type="text" name="FirstName" placeholder="First Name">' +
            '<input type="text" name="LastName" placeholder="Last Name">' +
            '<button type="submit">Send</button></form></body>');
        res.write('</html>');
        res.end();
        return res.end();
    }
    if (url === '/parse') {
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            x = parsedBody.split('&')
            ParsedName = x[0].split('=')[1] + ' ' + x[1].split('=')[1];
            exports.name = ParsedName;
            console.log(ParsedName);
        });
        // how we redirect page
        res.statusCode = 302;
        res.setHeader('Location', '/parsed-message')
        return res.end();
    }

    console.log(ParsedName);
    if (url === '/parsed-message') {
        res.setHeader("Content-Type", 'text/html');
        res.write('<html>');
        res.write('<head><title>Parsed-message</title><head>');
        res.write('<body> <p>your name is ' + exports.name + '</p> </body>');
        res.write('</html>');
        return res.end();
    }

    res.write('<html>');
    res.write('<head><title>Page not found</title><head>');
    res.write('<body><h1>Page not found</h1></body>')
    res.write('</html>');
    res.end();

});

server.listen(3000); 