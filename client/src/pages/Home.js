import React, { useState, useEffect } from "react";
import axios from "axios";
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home() {
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 1500
        }
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05
        }
      },
      size: {
        value: 1,
        random: true,
        anim: {
          speed: 4,
          size_min: 0.3
        }
      },
      line_linked: {
        enable: true,
        opacity: 0.05
      },
      move: {
        speed: 0.05,
        direction: "right"
      }
    }
  };
  useEffect(() => {
    axios.get("/api/information").then(response => {
      setInformation(response.data);
    });
  }, []);
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  Hi, I am{" "}
                  <span className="color-theme">{information.name}</span>
                </h1>
                <p>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
