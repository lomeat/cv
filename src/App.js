import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

import { Layout } from "./Layout";
import { UserCard } from "./UserCard";

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

  return (
    <>
      <Helmet>
        <title>Michael Filipenko - CV</title>
      </Helmet>
      <Layout direction="row">
        <UserCard />
      </Layout>
    </>
  );
};
