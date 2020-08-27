import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function Post({ 
    displayName,
    username,
    verified,
    text,
    image,
    avatar
}) { 
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src=" https://lh3.googleusercontent.com/proxy/SW7-8z5FoTF4yw-BHAk9dA0SIKV0EF9vW4Mwg2IVCPO-qwnk00NNOM4mauoZTOV9Aez-Y5qEHusP0TXEnddiJVLk5_HxkxJrTI0R7xQDDzrjJssQtqQNOQ " />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3> Muema {" "}
                         <span className="post__headerSpecial"> 
                            <VerifiedUserIcon className=" post__badge" />@ulemkamba254
                            </span>
                            </h3>
                    </div>
<div className="post__headerDescription">
    <p> I challenge you to build a Twitter Clone</p> 

</div>
                </div>
                <img 
                src="https://i.pinimg.com/originals/b8/bf/86/b8bf8658dd216b2ec14a1b9a27123f20.gif"
                alt=""
                />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />

                </div>

            </div>
        </div>
    )
}

export default Post
