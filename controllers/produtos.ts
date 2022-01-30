module.exports = app => {
    app.get('/produtos', (req, res) => {
        console.log("Você chamou a rota de produtos com o método GET")
        res.send("deu certo!")
    })

    app.post('/produtos', (req, res) => {
        console.log(`req.body = ${JSON.stringify(req.body)}`)
        res.send("Você chamou a rota de produtos com o método POST")
    })
}
