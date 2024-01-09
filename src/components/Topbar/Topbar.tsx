import { useState } from "react";
import "./topbar.css";
import faq from "../../assets/Vectorfaq.svg";
import speaker from "../../assets/speaker.svg";
import Drop from "../../assets/drop.svg";

const Topbar = () => {
  const [searchbar, setSearchbar] = useState("");

  return (
    <div className="topbar">
      <div className="payment-header">
        <p style={{ fontSize: "15px", margin: "16px" }}> Payment </p>
        <span>
          <img src={faq} color="#4c4c4c" /> How it works
        </span>
      </div>
      <input
        type="text"
        className="searchbar"
        placeholder=" Search features, tutorials, etc."
        value={searchbar}
        onChange={(e) => setSearchbar(e.target.value)}
      />
      <div>
        <div>
          <img src={speaker} width={"20px"} height={"20px"} />
        </div>
        <div>
          <img src={Drop} />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
