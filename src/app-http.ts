











/*import fs from 'fs';
import http from 'http';

const server = http.createServer((req, res) => {
    /*res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, World!</h1>');
    res.end();*/

    /*const data = {
        name: 'John Doe',
        age: 30
    };
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(data));
    res.end();*/

/*    if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(htmlFile);
        res.end();
        return;
    }

    if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        
    } else if (req.url?.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
    }

    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.write(responseContent);
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
})*/

/*import fs from 'fs';
import http from 'http2';

const server = http.createSecureServer( {
    key: '',
    cert: ''
},(req, res) => {
    /*res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, World!</h1>');
    res.end();*/

    /*const data = {
        name: 'John Doe',
        age: 30
    };
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(JSON.stringify(data));
    res.end();*/

    /*if (req.url === '/') {
        const htmlFile = fs.readFileSync('./public/index.html', 'utf-8');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(htmlFile);
        res.end();
        return;
    }

    if (req.url?.endsWith('.js')) {
        res.writeHead(200, { 'Content-Type': 'text/javascript' });
        
    } else if (req.url?.endsWith('.css')) {
        res.writeHead(200, { 'Content-Type': 'text/css' });
    }

    const responseContent = fs.readFileSync(`./public${req.url}`, 'utf-8');
    res.write(responseContent);
    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on port 8080');
})*/