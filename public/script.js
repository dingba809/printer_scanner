document.getElementById('scan-btn').addEventListener('click', () => {
    const ipRange = document.getElementById('ip-range').value;
    const resultsDiv = document.getElementById('results');
    
    resultsDiv.innerHTML = 'Scanning...';
    
    fetch('/scan', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ipRange }),
    })
    .then(response => response.json())
    .then(data => {
        resultsDiv.innerHTML = `Scan Results:<br>${data.result}`;
    })
    .catch(error => {
        console.error('Error:', error);
        resultsDiv.innerHTML = 'Error occurred during scanning.';
    });
});