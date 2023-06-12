import React from "react";
import TeamBg from "../../assets/img/team-bg.png";
import Team1 from "../../assets/img/team1.png";
import Team2 from "../../assets/img/team2.png";
import Team3 from "../../assets/img/team3.png";
import Team4 from "../../assets/img/team4.png";
import "./Team.css";
const Team = () => {
  return (
    <div className="section-space container-width">
      <div className="team-bg">
        <img src={TeamBg} alt="" />
        <h1>
          By The People <br />
          For The People
        </h1>
      </div>
      <div className="team-flex">
        <div className="single-team">
          <img src={Team1} alt="" />
          <p className="team-name">Jose Montero</p>
        </div>
        <div className="single-team">
          <img src={Team2} alt="" />
          <p className="team-name">Christen Montero</p>
        </div>
        <div className="single-team">
          <img src={Team3} alt="" />
          <p className="team-name">Jose Montero Sr.</p>
        </div>
        <div className="single-team">
          <img src={Team4} alt="" />
          <p className="team-name">Mario Contreras</p>
        </div>
      </div>
    </div>
  );
};

export default Team;
