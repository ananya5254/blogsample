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
    <div>
      <h1 className="title">My Blog Posts</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id} className="post">
            <h2 className="post-title">{post.title.rendered}</h2>
            <div
              className="post-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </li>
        ))}
      </ul>

      <style jsx>{`
        .title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .post-list {
          list-style: none;
          padding: 0;
        }

        .post {
          margin-bottom: 20px;
        }

        .post-title {
          font-size: 20px;
          font-weight: bold;
        }

        .post-content {
          margin-top: 10px;
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

export default HomePage
