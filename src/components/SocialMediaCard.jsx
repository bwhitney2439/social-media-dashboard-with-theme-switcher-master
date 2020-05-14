import React from "react";
import SVGIcon from ".././icons";

const SocialMediaCard = ({ cardData }) => {
  return (
    <div class="social-container">
      <div class="social-icon-container">
        <SVGIcon name={cardData.socialIcon} />
        <small>{cardData.userHandle}</small>
      </div>
      <div>
        <h1>{cardData.numOfFollowers}</h1>
        <h4>{cardData.followerOrSub}</h4>
      </div>

      <div class="stats-container">
        <SVGIcon name={cardData.arrowIcon} />
        <p className={cardData.textColor}>{cardData.statsToday} Today</p>
      </div>
    </div>
  );
};

export default SocialMediaCard;
