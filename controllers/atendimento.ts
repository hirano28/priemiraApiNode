const Atendimento = require('./../models/atendimento')

module.exports = app => {
    app.get('/atendimento', (req, res) => {
        const resultado = Atendimento.buscaTodos()
        console.log("resultado = " + resultado)
        res.send(resultado)
    })

    app.post('/atendimento', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento)
        res.send("POST Atendimento")
    })
}
