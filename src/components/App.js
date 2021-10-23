import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { useQuery } from "react-query";

import { Layout } from "../shared/Layout";
import { User } from "./User";
import { Stack } from "./Stack";
import { About } from "./About";
import { Work } from "./Work";
import { Project } from "./Project";
import { UtilityButtons } from "./UtilityButtons";
import { getData } from "../utils/getData";
import { useTheme } from "../hooks/useTheme";
import { breakpoints } from "../utils/theme";
import { AnotherCard } from "../shared/AnotherCard";

export function App() {
  const { data, isLoading, isError } = useQuery("data", getData);
  const { currentTheme, toggleTheme } = useTheme();

  if (isLoading) {
    return <Loader>MICHAEL FILIPENKO</Loader>;
  }

  if (isError) {
    return <Error>EЯROЯ_!# @|$|_0011010</Error>;
  }

  return (
    <ThemeProvider theme={{ ...currentTheme, ...breakpoints }}>
      <Wrapper>
        <>
          <Layout direction="row" style={{ width: "870px" }}>
            <User {...data.user} />
            <UtilityButtons toggleTheme={toggleTheme} />
          </Layout>
          <Layout direction="row">
            <Layout direction="column">
              <Stack stack={data.stack} />
            </Layout>
            <Layout direction="column">
              <About about={data.about} />
              <Work work={data.work} />
            </Layout>
          </Layout>
          <Grid>
            {data.projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
            <AnotherCard {...data.projects[0]} />
          </Grid>
        </>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background};
  flex-direction: column;
  padding: 20px 0;
  transition: 0.2s ease;
  color: ${(props) => props.theme.font};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Loader = styled.div`
  width: 180px;
  height: 250px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -200px;
  margin-top: -200px;
  background: transparent;
  border: 10px solid #54a0ff;
  border-right: 16px solid #54a0ff;
  font-size: 100px;
  font-weight: bold;
  color: #54a0ff;
  padding-left: 10px;

  @media (max-width: 1000px) {
    margin-left: -100px;
    margin-top: -100px;
    font-size: 40px;
    width: 80px;
    height: 110px;
    border: 6px solid #54a0ff;
  }
`;

const Error = styled(Loader)`
  color: #ff4757;
  border-color: #ff4757;
  width: 172px;
  border-right: 12px solid #ff4757;
`;
