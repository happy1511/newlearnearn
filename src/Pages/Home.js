import React from "react";
import { Puff, TailSpin } from "react-loader-spinner";
import { getAllSymbols } from "../modules/FetchingAxios";

import Investing_has from "./Investing_has.png";
import Nave_been from "./Never_Been.png";
import Easy from "./Easy.png";
import Video from "../Img_videos/Video.mp4";

import GainersCards from "../Components/GainersCards";
import NewsStocks from "../Components/NewsStocks";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TrendingMarkets from "../Components/TrendingMarkets";

import "../Css/Home.css";
import "../Css/HomeSection2.css";
import "../Css/HomeSection3.css";
import "../Css/HomeSection4.css";
import "../Css/HomeSection5.css";

const Home = () => {
  const [inputvalue, setinputalue] = React.useState("");
  const [allsy, setallsy] = React.useState([]);
  const [filtered, setfiltered] = React.useState([]);
  const [focus, setfocus] = React.useState(false);
  React.useEffect(() => {
    const getalls = async () => {
      await getAllSymbols()
        .then((res) => {
          localStorage.setItem("AllSymbols", res.data);
          setallsy(res.data);
        })
        .catch((Err) => {
          console.log(Err);
        });
    };
    getalls();
  }, []);

  const handleinput = (e) => {
    setinputalue(e.target.value);
    setfocus(true);
    window.addEventListener("click", handleclick);
    if (inputvalue !== "") {
      setfiltered(
        allsy.filter((option) =>
          option.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setfiltered([]);
    }
  };

  const handleclick = (e) => {
    if (e.srcElement.id !== "searchitem") {
      setfiltered([]);
      setfocus(false);
      window.removeEventListener("click", handleclick);
      setinputalue("");
    }
  };

  return allsy.length !== 0 ? (
    <>
      <Header />
      <div className="section1">
        <div className="homepage-div">
          <div className="title1 tt">
            <img src={Investing_has} alt="" srcSet="" />
          </div>
          <div className="title1">
            <img src={Nave_been} alt="" srcSet="" />
          </div>
          <div className="title1 ">
            <img className="" src={Easy} alt="" srcSet="" />
          </div>
          <div className="description title1">
            <p>
              On LearnToTrade Learn <br />
              How To Invest
            </p>
          </div>
          <div className="inputform">
            <button className={`buttoninputhome ${focus ? "focusing" : ""}`}>
              <span>
                <svg
                  width="30px"
                  height="100%"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.029 16.5295L19.5 19.0005"
                    stroke="#000000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <input
                type="text"
                id="searchitem"
                value={inputvalue}
                placeholder="Enter Markets here"
                onChange={handleinput}
                onFocus={() => {
                  setfocus(true);
                }}
              />
              <div
                className="absolutefilter"
                style={focus ? { display: "block" } : { display: "none" }}
              >
                <ul>
                  {filtered.map((data) => {
                    return (
                      <a href={`/Chart/${data}`}>
                        <li id="searchitem">{data}</li>
                      </a>
                    );
                  })}
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="Section2" id="k">
        <div className="HeadersS2">
          <h2 className="Section2H2">Where the world does markets</h2>
          <p className="Section2P">
            Join 50 million learners taking the future into their own hands.
          </p>
        </div>
        <div className="VideoS2Div">
          <div className="YellowLine">
            {Video ? (
              <video src={Video} className="Video" autoPlay loop />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <TailSpin
                  height="30"
                  width="30"
                  color="#4fa94d"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="Section3">
        <h3 className="Section3H3">
          Market Summary{" "}
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="white"
              ></path>{" "}
            </g>
          </svg>
        </h3>
        <div className="GainersCards">
          <GainersCards />
        </div>
      </div>
      <div className="Section4">
        <h3 className="Section4H3">
          Market News
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="white"
              ></path>{" "}
            </g>
          </svg>
        </h3>
        <div className="NewsCardsOuter">
          <NewsStocks />
        </div>
      </div>
      <div className="Section5">
        <h3 className="Section5H3">
          Trending Markets
          <svg
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(270)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="white"
              ></path>{" "}
            </g>
          </svg>
        </h3>
        <div className="TrendingOuter">
          <TrendingMarkets />
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Puff
          height="50px"
          width="50px"
          radius={1}
          color="blue"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </>
  );
};

export default Home;
