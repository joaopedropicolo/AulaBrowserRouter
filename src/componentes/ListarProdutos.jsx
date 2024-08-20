export default function ListarProdutos ({ listaObjetos }){
    return(
    <div className="bloco-produtos">
    {listaObjetos.map((produto) => <div key={produto.id}>
      <p class="produto-nome">{produto.nome}</p>
      <img id="image-objeto" src={produto.image}></img>
      <p>{produto.item}</p>
      <p>R$ {produto.preco},00</p>
    </div>
    )}
  </div>
    )
}
