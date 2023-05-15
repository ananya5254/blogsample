import { useState, useEffect } from 'react'

function HomePage() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://headless.local/wp-json/wp/v2/posts')
      const data = await res.json()
      setPosts(data)
    }
    fetchPosts()
  }, [])

  return (
    <div className="container">
      <h1 className="title">My Blog Posts</h1>
      <div className="post-grid">
        {posts.map(post => (
          <div key={post.id} className="post">
            <h2 className="post-title">{post.title.rendered}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }

        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .post-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          grid-gap: 20px;
        }

        .post {
          background-color: #f5f5f5;
          padding: 20px;
          border-radius: 4px;
        }

        .post-title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .post-content {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

export default HomePage
