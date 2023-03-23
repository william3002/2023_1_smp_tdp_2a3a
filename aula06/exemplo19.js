class Livro{
    constructor(pNome, pPreco){
        this.nome = pNome
        this.preco = pPreco
    }

    get Nome(){return this.nome}
    set Nome(pNome){ this.nome = pNome}

    get Preco(){return this.preco}
    set Preco(pPreco){ this.preco = pPreco}

    caucularDesconto(pDesconto){
        this.preco = this.preco - ((this.preco * pDesconto) / 100)
    }
}

var obj_livro1 = new Livro("Use a cabeça Java", 200)
obj_livro1.caucularDesconto(50)
console.log("O livro: " + obj_livro1.nome + " custa " + obj_livro1.Preco + " Reais")