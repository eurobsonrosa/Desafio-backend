const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    data: { type: String, unique: false, required: true },
    civil: { type: String, unique: false, required: false },
    genero: { type: String, unique: false, required: false },
    cep: { type: Number, unique: false, required: true },
    logradouro: { type: String, unique: false, required: true },
    complemento: { type: String, unique: false, required: true },
    bairro: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    uf: { type: String, unique: false, required: true },
    telefone: { type: String, unique: false, required: false },
    celular: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    identidade: { type: Number, unique: false, required: true },
    orgao: { type: String, unique: false, required: true },
    cpf: { type: Number, unique: true, required: true },
    veiculo: { type: String, unique: false, required: false },
    cnh: { type: String, unique: false, required: false }
}, {
    timestamps: true
});

module.exports = mongoose.model('candidato', CandidateSchema);