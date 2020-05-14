import React, { useState } from "react";
import "./App.scss";

import { cardsData, statsData } from "./data/data";

import SocialMediaCard from "./components/SocialMediaCard";
import SocialMediaStats from "./components/SocialMediaStats";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap");
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"};
 
  overflow: hidden;
}

h1 {
  font-size: 56px;
  font-weight: 400;
  letter-spacing: -2px;
  color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"};
  }

h2 {
  color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(230, 17%, 14%)"};
}

h4 {
  color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(228, 34%, 66%)" : "hsl(228, 12%, 44%)"};
    font-size: 12px;
    text-transform: uppercase;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 5px;
}

.limegreen {
  color: hsl(163, 72%, 41%);
}

.brightred {
  color: hsl(356, 69%, 56%);
}
`;

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(230, 17%, 14%)" : "hsl(0, 0%, 100%)"};
  height: 100vh;
  width: 100%;
`;

const HeaderBackgroundShape = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 244px;
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(232, 19%, 15%)" : "hsl(225, 100%, 98%)"};
  border-radius: 0 0 20px 20px;
`;

const Container = styled.div`
  z-index: 0;
  min-width: 1110px;

  .navbar-container {
    display: flex;
    justify-content: space-between;
    margin: 35px 0;

    .navbar-button-container {
      display: flex;
      align-items: center;

      p {
        margin-right: 20px;
      }

      .switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(
            to right,
            hsl(210, 78%, 56%),
            hsl(146, 68%, 55%)
          );
          border-radius: 34px;
          transition: all 0.4s;

          &:before {
            position: absolute;
            content: "";
            height: 16px;
            width: 16px;
            left: 4px;
            bottom: 4px;
            background-color: hsl(228, 25%, 27%);
            border-radius: 50%;
            transition: all 0.4s;
          }
        }
        input {
          opacity: 0;
          width: 0;
          height: 0;

          &:checked + .slider {
            background-image: unset;
            background-color: hsl(230, 22%, 74%);
          }
          &:checked + .slider:before {
            transform: translateX(24px);
          }
        }
      }
    }
  }

  .content-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 46px;
    width: 1110px;

    .social-container {
      position: relative;
      padding: 23px;
      display: flex;
      width: 255px;
      height: 216px;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      text-align: center;
      background-color: ${(props) =>
        props.theme.mode === "dark"
          ? "hsl(228, 28%, 20%)"
          : "hsl(227, 47%, 96%)"};
      border-radius: 5px;

      &:hover {
        background-color: ${(props) =>
          props.theme.mode === "dark"
            ? "hsl(228, 25%, 27%)"
            : "hsl(228, 33%, 91%)"};
      }

      &:nth-child(1) {
        border-top: 4px solid hsl(195, 100%, 50%);
      }
      &:nth-child(2) {
        border-top: 4px solid hsl(203, 89%, 53%);
      }
      &:nth-child(3):before {
        content: "";
        position: absolute;
        width: 100%;
        height: 4px;
        background: linear-gradient(
          to right,
          hsl(37, 97%, 70%),
          hsl(329, 70%, 58%)
        );
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        top: 0;
        left: 0;
      }
      &:nth-child(4) {
        border-top: 4px solid hsl(348, 97%, 39%);
      }

      .social-icon-container {
        display: flex;
        align-items: center;

        svg {
          margin-right: 8px;
        }
        small {
          color: ${(props) =>
            props.theme.mode === "dark"
              ? "hsl(228, 34%, 66%)"
              : "hsl(228, 12%, 44%)"};
        }
      }
      .stats-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;

        svg {
          margin-right: 4px;
        }
      }
    }
  }

  .content-today {
    width: 1110px;

    .social-stats-container {
      margin-top: 21px;
      height: 280px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .social-stats {
        padding: 26px 31px 16px 24px;
        display: flex;
        justify-content: space-between;
        width: 255px;
        height: 120px;
        background-color: ${(props) =>
          props.theme.mode === "dark"
            ? "hsl(228, 28%, 20%)"
            : "hsl(227, 47%, 96%)"};

        &:hover {
          background-color: ${(props) =>
            props.theme.mode === "dark"
              ? "hsl(228, 25%, 27%)"
              : "hsl(228, 33%, 91%)"};
        }

        .col2 {
          align-items: flex-end;
        }

        .col1 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          p {
            color: ${(props) =>
              props.theme.mode === "dark"
                ? "hsl(228, 34%, 66%)"
                : "hsl(228, 12%, 44%)"};
            font-size: 14px;
            font-weight: 400;
          }
          h3 {
            font-size: 32px;
            font-weight: 400;
          }
        }

        .col2 {
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .social-stats-percentage {
            display: flex;
            align-items: center;
            font-size: 12px;

            svg {
              margin-right: 4px;
            }
          }
        }
      }
    }
  }
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "dark" });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BodyContainer>
        <HeaderBackgroundShape />
        <Container>
          <div class="navbar-container">
            <div class="navbar-title-container">
              <h2>Social Media Dashboard</h2>
              <p>Total Followers: 23,004</p>
            </div>
            <div class="navbar-button-container">
              <p>Dark Mode</p>
              <label class="switch">
                <input
                  type="checkbox"
                  onChange={() =>
                    setTheme(
                      theme.mode === "dark"
                        ? { mode: "light" }
                        : { mode: "dark" }
                    )
                  }
                />
                <span class="slider"></span>
              </label>
            </div>
          </div>

          <section class="content-header">
            {cardsData.map((card) => {
              return <SocialMediaCard cardData={card} />;
            })}
          </section>

          <section class="content-today">
            <h3>Overview - Today</h3>
            <div class="social-stats-container">
              {statsData.map((stat) => {
                return <SocialMediaStats statData={stat} />;
              })}
            </div>
          </section>
        </Container>
      </BodyContainer>
    </ThemeProvider>
  );
};

export default App;
