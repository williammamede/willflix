import React from 'react';
import PageDedault from '../../../components/PageDefault';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function CadastroVideo() {
  return (
    <PageDedault>
        <h1>Cadastro de Video</h1>
        <Link to="/cadastro/categoria">
            Cadastrar Categoria
        </Link>
    </PageDedault>
  )
}

export default CadastroVideo;

