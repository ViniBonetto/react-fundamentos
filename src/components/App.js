import React from 'react';

import Post from './Post';

function App() {
    return (
        <React.Fragment>
            <h1>Componente App</h1>
            <h2>Posts da Semana</h2>

            <hr/>
            <Post title="Título da Notícia 01" subtitle="Subtitulo da noticia 01"/>
            <Post title="Título da Notícia 02" subtitle="Subtitulo da noticia 02"/>
            <Post title="Título da Notícia 03" subtitle="Subtitulo da noticia 03"/>
        </React.Fragment>
    
    );
}

export default App;