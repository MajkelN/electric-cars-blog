import React, {useState, useContext} from 'react';

import {H2} from '../components/H2/H2.css'
import {Wrapper, Form, InputBtn} from '../components/AddComponent/Add.css'

import { StoreContext } from '../store/StoreProvider'

const Add = () => {
  const { blogs, setBlogs} = useContext(StoreContext)
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  let index = blogs.length === 0 ? 0 : blogs[blogs.length-1].id

  const newAricle = {
    id: ++index,
    title: title,
    content: content
  };

  console.log(newAricle.id)

  const handleSubmit = (e) => {
    e.preventDefault();

    setBlogs(prevState => ([
      ...prevState,
      newAricle
    ]));

    alert('Article has been added')
  }

  const handleOnChangeTitle = (e) => setTitle(e.target.value);
  const handleOnChangeContent = (e) => setContent(e.target.value);

  return ( 
    <Wrapper>
      <H2>Add blog</H2>
      <Form onSubmit={handleSubmit}>
          <p>Title</p>
          <input type="text" id="title" value={title} onChange={handleOnChangeTitle}/>
          <p>Content</p>
          <textarea id="content" value={content} onChange={handleOnChangeContent}/>
          <InputBtn type="submit" >Add</InputBtn>
      </Form>
    </Wrapper>
  );
}
 
export default Add;