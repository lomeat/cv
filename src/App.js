import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Layout } from "./Layout";
import { User } from "./User";
import { Stack } from "./Stack";
import { About } from "./About";
import { Work } from "./Work";
import { Project } from "./Project";
import { UtilityButtons } from "./UtilityButtons";
import { theme } from "./theme";

const API = "https://api.npoint.io/04045c1e2e27829626fc";

export const App = () => {
  const [data, setData] = useState();
  const [currentTheme, setCurrentTheme] = React.useState(theme.light);

  React.useEffect(() => {
    const getDataFromApi = async () => {
      const res = await fetch(API);
      const data = await res.json();

      setData(data);
    };

    getDataFromApi();
  }, []);

  const toggleTheme = () => {
    setCurrentTheme((state) =>
      state === theme.light ? theme.dark : theme.light
    );
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={currentTheme}>
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
          </Grid>
        </>
      </Wrapper>
    </ThemeProvider>
  );
};

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
