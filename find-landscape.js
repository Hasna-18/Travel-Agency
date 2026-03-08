const https = require('https');

function fetchUnsplash(query) {
    return new Promise((resolve) => {
        https.get('https://unsplash.com/napi/search/photos?query=' + encodeURIComponent(query) + '&orientation=landscape&per_page=5', {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        }, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const parsed = JSON.parse(data);
                    const urls = parsed.results.map(r => r.urls.raw.split('?')[0]);
                    resolve(urls);
                } catch(e) { resolve([]); }
            });
        }).on('error', () => resolve([]));
    });
}

fetchUnsplash('lakshadweep').then(console.log);
