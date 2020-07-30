import React, { useState } from 'react';
import PageDedault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategoria] = useState([]);
    const [values, setvalues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setvalues({
           ...values,
           [chave]: valor 
        });
    }

    function handleChange(infosDoEvento) {
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        );
  }

  return (
    <PageDedault>
    <h1>Cadastro de categoria: {values.nome}</h1>
      <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();// para n fazer o submit com reload

          setCategoria([
              ...categorias,
              values
          ]);

          setvalues(valoresIniciais);
      }}>
        
        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
            label="Descrição"
            type="text"
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
        

        <button>
          Cadastrar
          </button>
      </form>

      <ul>
          {categorias.map((categoria, indice) => {
              return (
                  <li key={`${categoria}${indice}`}>
                      {categoria.nome}
                  </li>
              )
          })}
      </ul>


      <Link to="/">
        Ir para home
        </Link>
    </PageDedault>
  )
}

export default CadastroCategoria;

