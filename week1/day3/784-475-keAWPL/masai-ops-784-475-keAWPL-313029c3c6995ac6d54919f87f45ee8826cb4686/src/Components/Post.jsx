import React from "react";
const Post = ({title,body}) => {
  return (
    <div className="post" style={{backgroundColor:"gray",border:"1px solid blue",margin:"2px"}}>
      <h1>
        {/* Here show the title of the post  */}
        {title}
      </h1>
      <h3>
        {/* Here show the body of the post  */}
        {body}
      </h3>
    </div>
  );
};

export default Post;
