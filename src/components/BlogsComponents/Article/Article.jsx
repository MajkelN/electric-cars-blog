import React, {useContext} from 'react';

import { ArticleWrapper } from './Article.css'

import {StoreContext} from '../../../store/StoreProvider'

const Article = ({index, id, title, content}) => {
    const { isLoggedIn, blogs, setBlogs} = useContext(StoreContext)

    const handleDeleteArticle = (e) => {
        e.preventDefault();

        setBlogs((prevState) => (
            blogs.filter(blog => blog.id !== id)
        ))
    }


    return ( 
        <ArticleWrapper>
            <h3>{id}. {title}</h3>
            <p>
                {content}
            </p>
           {isLoggedIn ? <button id={id} onClick={handleDeleteArticle}>X Usuń</button> : null} 
        </ArticleWrapper>
    );
}
 
export default Article;