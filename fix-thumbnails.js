const fs = require('fs');

let tsCode = fs.readFileSync('c:/Users/Lenovo/trip/data/packages.ts', 'utf-8');

// The regex will look for w=600 or q=60 inside unsplash URLs.
// We'll replace w=600 with w=1200, and q=60 with q=80 to ensure they are high-res.
tsCode = tsCode.replace(/(\?|&)w=600(&|$)/g, '$1w=1200$2');
tsCode = tsCode.replace(/(\?|&)q=60(&|$)/g, '$1q=80$2');

fs.writeFileSync('c:/Users/Lenovo/trip/data/packages.ts', tsCode, 'utf-8');
console.log('Fixed low-res thumbnail queries.');
