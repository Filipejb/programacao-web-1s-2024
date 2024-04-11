
let produtos = [];

function criarProduto(id,nome,quantidade){
    let p ={
        id: id,
        nome: nome,
        quantidade: quantidade

    };
    return p;
}

function adicionaProduto(p){
    produtos.push(p);
}
function listarProdutos(){
    return produtos;
}
function removerProduto(id){
    produtos = produtos.filter((p) => {
        return p.id != id;
    });
}
module.exports ={
    criarProduto,
    adicionaProduto,
    listarProdutos,
    removerProduto
};
