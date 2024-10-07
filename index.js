const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
// });
// 정적 파일 제공
app.use(express.static('public'));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
