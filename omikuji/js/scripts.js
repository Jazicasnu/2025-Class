document.getElementById('draw').addEventListener('click', function () {
    const omikujiResults = [
        'excellent luck', 'mid-spriing', 'slightly good luck', 'good luck to come', 'bad'];
    const result = omikujiResults[Math.floor(Math.random() * omikujiResults.length)]; 
    document.getElementById('result').textContent = `your fortune is... ${result}!`;
});