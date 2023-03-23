class Livro{
    constructor(pNome, pPReco){
        this.nome = pNome
        this.pPreco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){ this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){ this.preco = pPreco}

    caucularDesconto(){
        this.preco = this.preco - 10
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 200)
obj_livro1.caucularDesconto()
console.log("O livro: " + obj_livro1.nome + "custa" + obj_livro1.Preco + "reais")

