const app = require('express')()
const path = require('path')

app.use(express.static(path.resolve(__dirname, './build')));

app.get('*', function(req, res) {
    const filePath = path.resolve(__dirname, './build', 'index.html');
    res.sendFile(filePath);
  });

app.listen(5000, () => {
    console.log(`App listening on port 5000`)
})
