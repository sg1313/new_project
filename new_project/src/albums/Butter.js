import React from "react";
import { useNavigate } from "react-router-dom";

const Butter = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        뒤로가기{" "}
      </button>
      버터 ㅇㅇㅇㅇ butter
    </div>
  );
};

export default Butter;
