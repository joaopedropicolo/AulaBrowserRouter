export default function ListarProdutos({ listaObjetos }) {
  return (
    <div className="bloco-produtos">
      {listaObjetos.map((produto) => (
        <div key={produto.id} className="bloco-produto">
          <p className="produto-nome">{produto.nome}</p>
          <img id="image-objeto" src={produto.image} alt={produto.nome} />
          <p>{produto.item}</p>
          <p class="tag-frete">Frete Grátis</p>
          <p>R$ {produto.preco},00</p>
        </div>
      ))}
    </div>
  );
}