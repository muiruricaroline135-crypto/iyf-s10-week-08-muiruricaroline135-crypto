import { useState } from 'react';

function Feed(props) {
  const [likes, setLikes] = useState(0);
  const [inputText, setInputText] = useState(""); 
  const [posts, setPosts] = useState([]); 

  const handleAddPost = () => {
    if (inputText.trim() !== "") {
      setPosts([...posts, inputText]); 
      setInputText(""); 
    }
  };

  return (
    <main style={{ padding: '20px' }}>
      <h2>News Feed</h2>
      <p>Welcome back, <strong>{props.user}</strong>!</p>
      
      {/* Create Post Section */}
      <div style={{ marginBottom: '20px', padding: '15px', background: '#f9f9f9', borderRadius: '8px' }}>
        <h3>Create a Post</h3>
        <input 
          type="text" 
          placeholder="What's on your mind?" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{ 
            padding: '12px', 
            width: '100%', 
            borderRadius: '4px', 
            border: '1px solid #ccc', 
            boxSizing: 'border-box' // Prevents the input from spilling out
          }} 
        />
        {/* Added display: block and marginTop to make the button look better with the wide input */}
        <button 
          onClick={handleAddPost} 
          style={{ display: 'block', marginTop: '10px', padding: '10px 20px', cursor: 'pointer' }}
        >
          Post
        </button>
      </div>

      {/* The Dynamic Post List */}
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '5px', backgroundColor: '#fff' }}>
            <p>{post}</p>
            <button onClick={() => setLikes(likes + 1)}>👍 Like</button>
          </div>
        ))}
        
        {/* Global Likes Counter */}
        <div style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px', borderRadius: '5px', background: '#eee' }}>
          <p>Global Likes: {likes}</p>
        </div>
      </div>
    </main>
  );
}

export default Feed;