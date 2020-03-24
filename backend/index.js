const app = require('express')(express)

app.get('/', (req, res) => {
    return res.send('Olá Mundo')
})

app.listen(3333).send("")