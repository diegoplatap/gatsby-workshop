import React from 'react'

const BlogCard = ({ img, title, children  }) => (

  <div>
    <img src={img} alt="prueba" />
    {children}
  </div>

);

export default BlogCard;
