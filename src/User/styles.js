import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  cursor: pointer;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 10px;
`;

export const Name = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-size: 24px;
`;

export const Professioon = styled.div`
  padding-top: 5px;
  font-size: 16px;
  font-weight: 400;
  @media screen and (max-width: 700px) {
    padding: 10px 0;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Link = styled.a`
  width: 40px;
  height: 40px;
  margin-left: 20px;
  border-radius: 100%;
  transition: 0.1s ease;
  color: ${(props) => props.theme.icon};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #a8a9ad;
  }
`;
