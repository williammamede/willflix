import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import PageDedault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategoria] = useState([]);
  const [values, setvalues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setvalues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  return (
    <PageDedault>
      <h1>
        Cadastro de categoria:
        {values.nome}
      </h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();// para n fazer o submit com reload

        setCategoria([
          ...categorias,
          values,
        ]);

        setvalues(valoresIniciais);
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDedault>
  );
}

export default CadastroCategoria;
