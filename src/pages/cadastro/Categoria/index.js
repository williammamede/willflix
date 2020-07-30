import React, { useState } from 'react';
import PageDedault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

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
        const { getAttribute, value } = infosDoEvento.target
        setValue(getAttribute('name'),
        value);
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
        <div>
            <label>
                Nome da Categoria:
                <input type="text"
                    value={values.nome}
                    name="nome"
                    onChange={handleChange}/>
            </label>
        </div>
        <div>

            <label>
                Descrição:
                <input type="text"
                    value={values.descricao}
                    name="descricao"
                    onChange={handleChange}/>
            </label>
        </div>
        <div>
            <label>
                Cor:
                <input type="color"
                    value={values.cor}
                    name="cor"
                    onChange={handleChange}/>
            </label>
        </div>

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

