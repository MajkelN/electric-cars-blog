import React, {useContext} from 'react';
import {H2} from '../components/H2/H2.css'
import { Wrapper} from '../components/BlogsComponents/Wrapper/Wrapper.css'

import {StoreContext} from '../store/StoreProvider.jsx'

import Article from '../components/BlogsComponents/Article/Article.jsx'

const Articles = (props) => {
    const { blogs} = useContext(StoreContext);
    
    const ArticlesElements = blogs.map((article, index) => (
        <Article index={index} key={article.id} {...article}/>
    ))

    return ( 
        <Wrapper>
            <H2>Articles</H2>
            {blogs !== [] ? ArticlesElements : null}
        </Wrapper>
     );
}
 
export default Articles;