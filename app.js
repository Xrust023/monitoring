const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());

// Serve static HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'elk.html'));
});

// API endpoint to get information about ELK stack
app.get('/api/elk-info', (req, res) => {
  const elkInfo = {
    title: 'ELK Stack',
    description: 'The ELK stack is a collection of three open-source products — Elasticsearch, Logstash, and Kibana. It helps you collect, store, analyze, and visualize data in real time.',
    components: [
      {
        name: 'Elasticsearch',
        description: 'A distributed, RESTful search and analytics engine.'
      },
      {
        name: 'Logstash',
        description: 'A server-side data processing pipeline that ingests data from multiple sources simultaneously.'
      },
      {
        name: 'Kibana',
        description: 'A visualization layer that works on top of Elasticsearch to create charts, graphs, and dashboards.'
      }
    ]
  };
  res.json(elkInfo);
});

// Error route for testing logging
app.get('/error', (req, res) => {
  console.error('Error endpoint hit');
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
