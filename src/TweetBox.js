import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
    return (
        <div className="tweetBox">
         <form>
             <div className="tweetBox__input">
                 <Avatar src="https://lh3.googleusercontent.com/proxy/SW7-8z5FoTF4yw-BHAk9dA0SIKV0EF9vW4Mwg2IVCPO-qwnk00NNOM4mauoZTOV9Aez-Y5qEHusP0TXEnddiJVLk5_HxkxJrTI0R7xQDDzrjJssQtqQNOQ " />
                 <input placeholder="What is happening?"/>
             </div>
             <input 
             className="tweetBox__imageInput"
             placeholder="Enter image URL"
             type="text"
             />
             <Button className="tweetBox__tweetButton"> Tweet </Button>
         </form>   
        </div>
    )
}

export default TweetBox
