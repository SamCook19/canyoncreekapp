import React from 'react';
import { useHistory } from 'react-router-dom';

import history from "../../history";

export const handleOnClick = () => {
    return history.push('/blog')
}

const BlogButton = () => {
  const history = useHistory();

  
   
  return (
    <a className='button__blog' onClick={handleOnClick}>
      Blog
    </a>
    
  );
};


export default BlogButton;