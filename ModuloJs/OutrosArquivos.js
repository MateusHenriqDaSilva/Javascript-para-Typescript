export function CalcularTaxa(precos) {
    return Number(precos) * 1.2
}

export function TotalProdutoComTaxa(...precos) {
    return precos.reduce((total, produtoAtual) =>
        total += CalcularTaxa(produtoAtual), 0
    )
}

export function MostrarDetalhes(produto) {
    let taxarPreco = CalcularTaxa(produto.preco)
    console.log(`Nome: ${produto.nome}, Preco da Taxa: ${taxarPreco}`)
}

export function AplicarDesconto(produto, desconto = 5) {
    produto.preco = produto.preco - 5
}