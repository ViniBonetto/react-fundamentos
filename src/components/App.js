import React, { useState } from 'react';

import Post from './Post';
import Header from './Header';

import { ThemeProvider } from '../context/ThemeContext';



function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'Título da Notícia 01', subtitle: 'Subtitulo da noticia 01', likes: 20, read: false, removed: true },
        { id: Math.random(), title: 'Título da Notícia 02', subtitle: 'Subtitulo da noticia 02', likes: 50, read: true, removed: false },
        { id: Math.random(), title: 'Título da Notícia 03', subtitle: 'Subtitulo da noticia 03', likes: 80, read: false, removed: false },
        { id: Math.random(), title: 'TESTE 01', subtitle: 'TESTE 01 SUB', likes: 500, read: false }
    ]);

    function handleRefresh() {
        setPosts((prevState) => [
            ...prevState,
            { 
                id: Math.random(), 
                title: `Título da Notícia 0${prevState.length + 1}`, 
                subtitle: `Subtitulo da Notícia 0${prevState.length + 1}`, 
                likes: 100 
            }
        ]);
    }

    

    function handleRemovePost(postId) {
        setPosts((prevState) => prevState.map(
            post => post.id === postId ? { ...post, removed: true } : post
        ));
    }
    

    return (
        <ThemeProvider>
            <Header>
                <h2>
                Posts da Semana
                <button onClick={handleRefresh}>Atualizar</button>
                </h2>   
            </Header>

            <hr/>
            {posts.map(post => (
                <Post
                key={post.id}
                onRemove={handleRemovePost}
                post={post}
                />
            ))}
        </ThemeProvider>
    
    );
}

export default App;