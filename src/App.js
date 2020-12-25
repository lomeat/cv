import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Layout } from "./Layout";

const API = "https://api.npoint.io/04045c1e2e27829626fc";

export const App = () => {
  const [data, setData] = useState({});

  React.useEffect(() => {
    const getDataFromApi = async () => {
      const res = await fetch(API);
      const data = await res.json();

      setData(data);
    };

    getDataFromApi();
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Michael Filipenko - CV</title>
      </Helmet>
      <Layout direction="row">
        {data.skills.map((a) => (
          <span>{a}</span>
        ))}
      </Layout>
    </>
  );
};
