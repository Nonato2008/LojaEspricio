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

#### GET /clientes
- **Descrição**: Obtém uma lista de clientes
- **Resoinse**: Array de clientes

#### POST /clientes
- **Descrição**: Cadastra um novo cliente
- **Body**: 
```
{
    "nomeCliente": "clienteExemplo",
    "cpfCliente": 00000000000
}
```
- **Response**:
```
{
    "message": "Cliente cadastrado com sucesso!"
}
```