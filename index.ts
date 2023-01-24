class StreamingApp {
    filme: string;
    ano_do_filme: number;
    data_de_lancamento: string;

    constructor(filme: string, ano_do_filme: number, data_de_lancamento: string){
        this.filme = filme;
        this.ano_do_filme = ano_do_filme;
        this.data_de_lancamento = data_de_lancamento;

    }

    exibirFilme(){
        console.log(`O filme ${this.filme} será exibido no dia ${this.data_de_lancamento} somente no StreamingApp`)
    }

}

var lancamento = new StreamingApp("Vingadores: Ultimato", 2019, "2022-01-30")
lancamento.exibirFilme()

class StreamingAppDois extends StreamingApp {

}