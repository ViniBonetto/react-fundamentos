import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post(props){

    return (
        <>
        <PostHeader
        onRemove={props.onRemove}
        post={{
            id: props.post.id,
            title: props.post.title,
            read: props.post.read,
        }}
        />
        <article>
                <small>{props.post.subtitle}</small>
                <br/>
                Media: {props.post.likes}
        </article>
        <br/>
        </>
        
    )
}

