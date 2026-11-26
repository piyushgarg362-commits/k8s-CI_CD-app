
const express = require('express');
const client = require('prom-client');

const app = express();

// Collect default Prometheus metrics
client.collectDefaultMetrics();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello, Kubernetes CI/CD!</h1>
        <h2>Version 2.0</h2>
        <p>Application successfully updated through Jenkins CI/CD pipeline.</p>
        <p>Deployed on Kubernetes using Docker.</p>
    `);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        version: '2.0'
    });
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

const PORT = process.env.PORT || 3000;

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app;
