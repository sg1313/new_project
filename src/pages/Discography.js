import React from "react";
import { Link } from "react-router-dom";

const Discography = () => {
  return (
    <div>
      방탄 음반 목록
      <div>
        <ul>
          <li>
            <Link to="/discography/proof">Proof</Link>
          </li>
          <li>
            <Link to="/discography/butter">Butter</Link>
          </li>
          <li>
            <Link to="/discography/be">Be</Link>
          </li>
          <li>
            <Link to="/discography/dynamite">dynamite</Link>
          </li>
          <li>
            <Link to="/discography/mapofthesoul7">map of the soul 7</Link>
          </li>
          <li>
            <Link to="/discography/mapofthesoul_persona">
              map of the soul Persona
            </Link>
          </li>
          <li>
            <Link to="/discography/loveyourlsef_answer">
              LoveYourlsef Answer
            </Link>
          </li>
          <li>
            <Link to="/discography/loveyourself_tear">LoveYourlsef Tear</Link>
          </li>
          <li>
            <Link to="/discography/loveyourself_her">LoveYourlsef Her</Link>
          </li>
          <li>
            <Link to="/discography/youneverwalkalone">
              you never walk alone
            </Link>
          </li>
          <li>
            <Link to="/discography/darkandwild">dark and wild</Link>
          </li>
          <li>
            <Link to="/discography/skoolluvaffair">skool luv affair</Link>
          </li>
          <li>
            <Link to="/discography/orul82">o ru l8 2</Link>
          </li>
          <li>
            <Link to="/discography/2cool4skool">2cool4skool</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Discography;
