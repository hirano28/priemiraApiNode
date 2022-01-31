import moment = require("moment")

const conexao = require("./../infraestrutura/conexao")

class Atendimento {
    adiciona(atendimento) {
        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
        const atendimentoDatado = {...atendimento, dataCriacao, data}
        const sql = 'INSERT INTO Atendimentos SET ?'

        conexao.query(sql, atendimentoDatado, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
            }
        })
    }

    buscaTodos() {
        const sql = 'SELECT * FROM Atendimentos'
        
        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log(resultados)
                return resultados
            }
        })
    }
}

module.exports = new Atendimento
export {}