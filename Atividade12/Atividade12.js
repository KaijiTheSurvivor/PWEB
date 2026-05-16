function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function() {
    
    return this.base * this.altura;

        
    }
}
class Conta {
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    setNomeCorrentista(nome) {
        this.nomeCorrentista = nome;
    }
    setNumeroConta(numero) {
        this.numeroConta = numero;
    }
    setBanco(banco) {
        this.banco = banco;
    }
    getSaldo() {
        return this.saldo;
    }  
    getNomeCorrentista() {
        return this.nomeCorrentista;
    }
    getNumeroConta() {
        return this.numeroConta;
    }
    getBanco() {
        return this.banco;
    }
}
class Corrente extends Conta {
    setSaldoEspecial(saldoEspecial) {
        this.saldoEspecial = saldoEspecial;
    }
    getSaldoEspecial() {
        return this.saldoEspecial;
    }
}

class Poupanca extends Conta {
    setJuros(juros) {
        this.juros = juros;
    
    }
    setDataVencimento(dataVencimento) {
        this.dataVencimento = dataVencimento;
    }
    getJuros() {
        return this.juros;
    }
    getDataVencimento() {
        return this.dataVencimento;
    }
}