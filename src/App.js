import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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
      <Container>{data.skills}</Container>
    </>
  );
};

const Container = styled.div``;
