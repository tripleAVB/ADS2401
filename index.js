var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var StreamingApp = /** @class */ (function () {
    function StreamingApp(filme, ano_do_filme, data_de_lancamento) {
        this.filme = filme;
        this.ano_do_filme = ano_do_filme;
        this.data_de_lancamento = data_de_lancamento;
    }
    StreamingApp.prototype.exibirFilme = function () {
        console.log("O filme ".concat(this.filme, " ser\u00E1 exibido no dia ").concat(this.data_de_lancamento, " somente no StreamingApp"));
    };
    return StreamingApp;
}());
var lancamento = new StreamingApp("Vingadores: Ultimato", 2019, "2022-01-30");
lancamento.exibirFilme();
var StreamingAppDois = /** @class */ (function (_super) {
    __extends(StreamingAppDois, _super);
    function StreamingAppDois() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StreamingAppDois;
}(StreamingApp));
