import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Muema",
      username: "ulemkamba254",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://lh3.googleusercontent.com/proxy/w_NkC9_DUNtfMvBS_ofDV9CKixdIqcC2J8yFbHbdJpi0amy6yMqHLe2PPFfdk-T-LIQ125uaIb4KfCgiEZYFzk9m64VDmZFclmdnW-_GGNGVR1Q5xIAH8A",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://lh3.googleusercontent.com/proxy/w_NkC9_DUNtfMvBS_ofDV9CKixdIqcC2J8yFbHbdJpi0amy6yMqHLe2PPFfdk-T-LIQ125uaIb4KfCgiEZYFzk9m64VDmZFclmdnW-_GGNGVR1Q5xIAH8A" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;