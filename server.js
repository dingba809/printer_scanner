const express = require('express');
const path = require('path');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.post('/scan', (req, res) => {
  const { ipRange } = req.body;
  
  // 模拟扫描操作
  exec(`echo Simulated scan of ${ipRange}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.status(500).json({ error: 'Error occurred during scanning.' });
      return;
    }
    res.json({ result: stdout });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});