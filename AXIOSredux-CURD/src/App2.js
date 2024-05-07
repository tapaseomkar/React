import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [posts,setposts]=useState([]);

  // 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
      .then(response => setposts(response))

  },[]);
//   We ensure that we're setting the posts state with the actual data fetched from 
//the API by using response.json() to parse the JSON response.
// This parsed data is then used to update the posts state using setPosts.
// Now, when posts.map is called in the JSX, it should work correctly because
// posts will be an array of post objects fetched from the API.
  return(
    <div>
      <div className="App"/>
      <h2>All Posts</h2>
      {posts.map((post)=>(
        <div className='xyz' key={post.id}>
          <div>
           {post.id}, {post.title}
          </div>
        </div>
       
      ))}

    </div>
  );

}

export default App;
