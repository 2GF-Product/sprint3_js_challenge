



div className="container">
<div className="Formulario">
    <div className="card">
        <h5 className="card-title"  >Formulario Factura</h5>   
        <div className="card-body">
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalNomeProduto">
                <Form.Label column sm={2}>
                Nome Produto
                </Form.Label>
                <Col sm={10}>
                <Form.Select defaultValue="NomeProduto">
                    <option>Nome Produto</option>
                    <option>oleo</option>
                    <option>ovo</option>
                    <option>leite</option>
                  </Form.Select>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalQuantidade">
                <Form.Label column sm={2}>
                Quantidade
                </Form.Label>
                <Form.Control type="text" placeholder="Enter quantidade" />

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalPreco">
                    <Form.Label column sm={2}>
                    Preco
                    </Form.Label>
          <Form.Control type="text" placeholder="Enter preco" />

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalImposto">
            <Form.Label column sm={2}>
            Imosto
            </Form.Label>
          <Form.Control type="text" placeholder="Enter Total" />
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalTotal">
            <Form.Label column sm={2}>
            Preco
            </Form.Label>
          <Form.Control type="text" placeholder="Enter total" />

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalObservacao">
            <Form.Label column sm={2}>
            Observacao
            </Form.Label>
          

    </Form>
    </div>
    </div>
</div>
</div>