import React from 'react';
import PageDedault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroCategoria() {
  return (
    <PageDedault>
        <h1>Cadastro de Video</h1>
        <Link to="/">
            Ir para home
        </Link>
    </PageDedault>
  )
}

export default CadastroCategoria;

