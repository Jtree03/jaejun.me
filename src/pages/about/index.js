import React from "react";
import Layout from "@theme/Layout";
import ResumePage from "./ResumePage";
import styled from "styled-components";

function About() {
  return (
    <Layout title="Resume" description="JaeJun, Jo's resume.">
      <Main>
        <ResumePage />
      </Main>
    </Layout>
  );
}

export default About;

const Main = styled.main`
  width: 70%;
  margin: 0 auto;
`;
