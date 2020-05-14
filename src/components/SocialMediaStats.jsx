import React from "react";
import SVGIcon from ".././icons";
const SocialMediaStats = ({ statData }) => {
  return (
    <div class="social-stats">
      <div class="col1">
        <p>{statData.title}</p>
        <h3>{statData.number}</h3>
      </div>
      <div class="col2">
        <SVGIcon name={statData.socialIcon} />
        <div class="social-stats-percentage">
          <SVGIcon name={statData.arrowIcon} />
          <p class={statData.textColor}>{statData.statsPercentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaStats;
