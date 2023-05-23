import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function BlogPage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    fetch('https://headless.local/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setBlogData(data))
      .catch(error => console.log(error));
  }, []);
  const [blogData2, setBlogData2] = useState(null);

  useEffect(() => {
    fetch('https://headless2.local/wp-json/wp/v2/posts')
      .then(response => response.json())
      .then(data => setBlogData2(data))
      .catch(error => console.log(error));
  }, []);
 const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="container">
      {blogData &&
        blogData.map(blog => (
          <div key={blog.id} className="blog-item">
            <div className="blog-content">
              <h2 className="blog-title">{blog.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
              <button className="read-more-button">Mulai Panduan</button>
            </div>
            <div className="blog-image">
              <img src={blog.image_url} alt={blog.title.rendered} />
            </div>
          </div>
        ))}
       
      <div className="slideshow-container">
        {blogData2 && (
        <Slider {...settings}>
          {blogData2.map(blog2 => (
            <div key={blog2.id} className="blog2-item">
              <div className="blog2-content">
                <h2 className="blog2-title">{blog2.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: blog2.content.rendered }} />
                <button className="read-more-button2"></button>
              </div>
              <div className="blog2-image">
                <img src={blog2.image_url} alt={blog2.title.rendered} />
              </div>
            </div>
          ))}
        </Slider>
      )}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .blog-item {
          display: flex;
          width: 100%;
          margin-bottom: 20px;
        }

        .blog-content {
          flex: 1;
          padding-right: 20px;
        }

        .blog-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
          color: black;
        }

        .read-more-button {
          background-color: #d8244c;
          border: none;
          color: white;
          padding: 15px 32px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          font-size: 16px;
          margin: 4px 2px;
          cursor: pointer;
        }

        .blog-image {
          width: 300px;
        }

        .bottom-button-container {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }

        .bottom-button {
          background-color: pink;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }

        .slideshow-container {
          {
          display: flex;
          flex-direction: column;
          align-items: center;
        }


        .blog2-item {
          display: flex;
          width: 100%;
          margin-bottom: 20px;
        }

        .blog2-content {
          flex: 1;
          padding-right: 20px;
        }

        .blog2-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .read-more-button2 {
          margin-top: 10px;
        }

        .blog2-image {
          width: 300px;
        }
        .td-block-title-wrap {
          position: relative;
      }
      .block-title {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        line-height: 1;
        margin-top: 0;
        margin-bottom: 26px;
        border-bottom: 2px solid #222222;
        text-align: left;
        }
      `}</style>
    </div>
  );
}

export default BlogPage;

