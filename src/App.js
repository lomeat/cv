import React, { useState } from "react";
import styled from "styled-components";

import { Layout } from "./Layout";
import { User } from "./User";
import { Stack } from "./Stack";
import { About } from "./About";
import { Work } from "./Work";
import { Project } from "./Project";

const API = "https://api.npoint.io/04045c1e2e27829626fc";

export const App = () => {
  const [data, setData] = useState();

  React.useEffect(() => {
    const getDataFromApi = async () => {
      const res = await fetch(API);
      const data = await res.json();

      setData(data);
    };

    getDataFromApi();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Layout direction="row">
        <User {...data.user} />
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
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
