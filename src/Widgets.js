  
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
            <h2>What is happening?</h2> 
            <TwitterTweetEmbed tweetId={"1248306799700332544"} />

            <TwitterTimelineEmbed
          sourceType="profile"
          screenName="joe_muema"
          options={{ height: 400 }}
        />
         <TwitterShareButton
          url={" https://www.facebook.com/DAJJ.Cases/ "}
          options={{ text: "#reactjs is awesome", via: "joe_muema" }}
        />
            </div>
        </div>
    )
}

export default Widgets
