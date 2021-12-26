import React from "react";
import styled from "styled-components";

import SelfImg from "./assets/self.jpg";

function ResumePage() {
  return (
    <Container>
      <IntroduceDiv>
        <TitleSpan>Intro</TitleSpan>
        <Content>
          <ContentPicture>
            <img alt="img" src={SelfImg} width="128px" />
            <Content>
              <ContentTitle>조재준 (Jae Jun Jo)</ContentTitle>
              <ContentSub>1996.09.03.</ContentSub>
              <ContentLink>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open("mailto:wowns0903@gmail.com")}
                >
                  wowns0903@gmail.com
                </span>
              </ContentLink>
            </Content>
          </ContentPicture>
          <br />
          <ContentTitle>
            안녕하세요! <StrongText>풀스택 개발자 조재준</StrongText>입니다.
          </ContentTitle>
          <ContentTitle>
            사용성과 기술력을 위해 끊임없이 탐구하는 거북목 개발자 입니다.
          </ContentTitle>
        </Content>
      </IntroduceDiv>

      <DoubleSection>
        <CareerDiv>
          <TitleSpan>Career</TitleSpan>
          <Content>
            <ContentTitle>위코드</ContentTitle>
            <ContentSub>풀스택 개발 & 멘토링</ContentSub>
            <ContentSub>2021.09 ~ now</ContentSub>
          </Content>
          <Content>
            <ContentTitle>말랑하니</ContentTitle>
            <ContentSub>풀스택 개발</ContentSub>
            <ContentSub>2020.10 ~ 2021.08</ContentSub>
          </Content>
        </CareerDiv>
        <EduDiv>
          <TitleSpan>Edu</TitleSpan>
          <Content>
            <ContentTitle>경상대학교</ContentTitle>
            <ContentSub>컴퓨터 과학과</ContentSub>
            <ContentSub>2015.03 ~ 2021.02</ContentSub>
          </Content>
        </EduDiv>
      </DoubleSection>

      <SkillDiv>
        <TitleSpan>Skill</TitleSpan>
        <Content>
          <ContentTitle>Front</ContentTitle>
          <ContentSub>
            React, React-Native, Redux, ant-design, styled-components
          </ContentSub>
          <br />
          <ContentTitle>Back</ContentTitle>
          <ContentSub>Express, NestJS, Flask</ContentSub>
          <br />
          <ContentTitle>DB</ContentTitle>
          <ContentSub>MySQL, MongoDB</ContentSub>
          <br />
          <ContentTitle>Infra</ContentTitle>
          <ContentSub>AWS, Github Action, PM2</ContentSub>
        </Content>
      </SkillDiv>
    </Container>
  );
}

export default ResumePage;

const Container = styled.div`
  line-height: 2rem;
`;

const TitleSpan = styled.span`
  font-weight: 600;
  font-size: 2rem;
  line-height: 100%;

  border-left: 6px solid;
  padding-left: 10px;
`;

const IntroduceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 40px;
`;

const DoubleSection = styled.section`
  display: flex;
  flex: 1;

  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  margin: 10px;
  padding-left: 20px;
`;

const StrongText = styled.span`
  margin-left: 5px;
  font-weight: bold;
`;

const ContentPicture = styled.div`
  display: flex;
  flex: 1;
`;

const ContentTitle = styled.p`
  display: flex;

  font-size: 1.3rem;
  font-weight: 500;
`;

const ContentSub = styled.div`
  display: flex;

  font-size: 1rem;
  color: gray;
`;

const ContentLink = styled.span`
  font-size: 1rem;
  color: #1da57a;
`;

const CareerDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const EduDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 40px;
`;
