import "./App.css";
import {useState} from "react"
import Post from "./Components/Post";
function App() {
  const [data,setdata]=useState([])

  const handleclick=()=>{
         fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>res.json())
         .then((data)=>{
          setdata(data)
          console.log(data)
         }).catch((err)=>{
          console.log(err)
         })
         
      
  }
  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={handleclick}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {data?.map((el)=><Post  body={el.body} title={el.title} />)}
      </div>
    </div>
  );
}

export default App;
