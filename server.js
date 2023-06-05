const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl).then(r => {
            console.log('handle', req, res, parsedUrl);
        });
    }).listen(3000, '0.0.0.0', (err) => {
        if (err) throw err;
        console.log('Next.js app is running on port 3000');
    });
});
