## API Reference

### Produtos

#### GET /produtos
- **Descrição**: Obtém uma lista de produtos
- **Resoinse**: Array de produtos

#### POST /produtos
- **Descrição**: Cria um novo produto
- **Body**: 
```
{
    "nomeProduto": "produtoExemplo",
    "percoProduto": 0.00
}
```
- **Response**:
```
{
    "message": "Produto cadastrado com sucesso!"
}
```

### Clientes