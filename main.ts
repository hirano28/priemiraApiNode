const customExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');

conexao.connect(() => console.log("Conectado com sucesso ao banco de dados mysql."));

const app = customExpress();

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
