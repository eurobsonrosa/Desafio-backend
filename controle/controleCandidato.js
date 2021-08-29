const Candidato = require('../models/candidato');

module.exports = {
    async register(req, res) {
         const { nome, cargo, data, civil, genero, cep, logradouro, complemento,
            bairro, cidade, uf, telefone, celular, email, identidade, orgao, cpf, veiculo,
            cnh } = req.body;

        const novoCandidato = new Candidato();

        novoCandidato.nome = nome;
        novoCandidato.cargo = cargo;
        novoCandidato.data = data;
        novoCandidato.civil = civil;
        novoCandidato.genero = genero;
        novoCandidato.cep = cep;
        novoCandidato.logradouro = logradouro;
        novoCandidato.complemento = complemento;
        novoCandidato.bairro = bairro;
        novoCandidato.cidade = cidade;
        novoCandidato.uf = uf;
        novoCandidato.telefone = telefone;
        novoCandidato.celular = celular;
        novoCandidato.email = email;
        novoCandidato.identidade = identidade;
        novoCandidato.orgao = orgao;
        novoCandidato.cpf = cpf;
        novoCandidato.veiculo = veiculo;
        novoCandidato.cnh = cnh;
        
        novoCandidato.save((err, savedCandidate) => {
            if(err) {
                console.log(err);
                return res.status(500).send('Erro!');
            } else {
                return res.status(200).send(savedCandidate);
            }
        });
    }
}