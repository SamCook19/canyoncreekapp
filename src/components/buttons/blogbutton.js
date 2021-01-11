import React from 'react';
import { useHistory } from 'react-router-dom';

const BlogButton = () => {
  const history = useHistory();
   
  return (
    <a className='button__blog' onClick={() => history.push('/blog')}>
      Blog
    </a>
  );
};

export default BlogButton;