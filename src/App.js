import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { Layout } from "./Layout";
import { User } from "./User";
import { Stack } from "./Stack";
import { About } from "./About";
import { Work } from "./Work";

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
      <Helmet>
        <title>Michael Filipenko - CV</title>
      </Helmet>
      <Layout direction="row">
        <User />
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
    </>
  );
};
