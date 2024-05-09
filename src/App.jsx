import { useState } from "react";

export default function App() {
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const post = {
      id: Math.floor(Math.random() * 10000),
      user: user,
      content: content,
      createAt: new Date(),
    };
    setComments((currentValue) => [post, ...currentValue]);
    setUser("");
    setContent("");
  };
  return (
    <div id="app">
      <form className="wrapping" onSubmit={handleSubmit}>
        <h2>Section of comment</h2>
        <label htmlFor="user">Email</label>
        <input
          type="text"
          className="user"
          id="user"
          value={user}
          onChange={(ev) => setUser(ev.target.value)}
          required
        />

        <label htmlFor="content">Comment</label>
        <textarea
          className="content"
          id="content"
          cols="30"
          rows="6"
          value={content}
          onChange={(ev) => {
            setContent(ev.target.value);
          }}
          required
        ></textarea>

        <button type="submit">Send comment</button>
      </form>
      {comments.map((post) => (
        <div key={post.id}>
          <h2>{post.user}</h2>
          <span>{post.createAt.toLocaleString()}</span>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
