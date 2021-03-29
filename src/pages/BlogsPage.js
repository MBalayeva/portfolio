import React from 'react';
import AllBlogs from './../components/allBlogs';
import Title from '../components/Title'

function BlogsPage() {
    return (
      <div className="BlogsPage">
        <div className="container">
          <div className='b-title'><Title span="blogs" title="blogs" /></div>
          <div className="row">
            {AllBlogs.map((blog) => {
              return (
                <div className="col-md-5">
                  <div className="blog" key={blog.id}>
                    <a href={blog.link}>
                      <img src={blog.image} alt="" />
                      {blog.title}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default BlogsPage