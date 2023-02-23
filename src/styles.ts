import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.main`
  display: flex;
  width: 1350px;
  height: 600px;

  @media (max-width: 1380px) {
    width: 1100px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 70%;
    height: 80%;
  }

  @media (max-width: 600px) {
    width: 90%;
    height: 90%;
  }

  @media (min-height: 1000px) {
    width: 90%;
    height: 90%;
  }
`;

export const InfoSection = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #485460;
  border-radius: 10px;
  padding: 1rem 2rem;

  @media (max-width: 1000px) {
    width: 100%;
    height: 50%;

    padding: 1rem;
  }
`;

export const IllustrationImage = styled.img`
  width: 70%;
`;

export const HeaderInfoSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 100%;
`;

export const OverviewSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;

  & > div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2.3rem;
  }

  @media (max-width: 570px) {
    & > div {
      gap: 0.8rem;
    }
  }
`;

export const OverviewItem = styled.div`
  width: 45%;
  height: 100px;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #b2bec3;

  & > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 570px) {
    flex-direction: column;
  }
`;

export const TitleOverviewItem = styled.h2`
  margin-left: 0.4rem;
  color: #636e72;
  font-size: 1rem;

  @media (max-width: 570px) {
    font-size: 0.8rem;
  }
`;

export const ValueOverviewItem = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 570px) {
    font-size: 1.2rem;
  }
`;

export const ChartSection = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: green;
`;

export const SearchSection = styled.section`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 50%;
    width: 100%;
    padding-top: 1.5rem;
  }
`;

export const IconImage = styled.img`
  height: 20%;
`;

export const BtnLocalization = styled.button`
  background: none;
  border: none;
  color: #6c63ff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: #564ede;
  }

  @media (min-height: 1000px) {
    font-size: 1.1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  @media (max-width: 1380px) {
    flex-direction: column;
  }
`;

export const InputSearch = styled.input`
  height: 50px;
  width: 50%;
  border: 2px solid transparent;
  padding: 0.2rem 0.7rem;
  background-color: #485460;
  border-radius: 5px;
  color: #ccc;

  &:focus {
    border: 2px solid #564ede;
  }

  &::placeholder {
    color: #ccc;
  }

  @media (max-width: 1380px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (min-height: 1000px) {
    height: 70px;
    font-size: 1.1rem;
  }
`;

export const BtnSearch = styled.button`
  background-color: #6c63ff;
  border: none;
  border-radius: 5px;
  width: 120px;
  height: 50px;
  text-align: center;
  color: #fafafa;
  cursor: pointer;

  &:hover {
    background-color: #564ede;
  }

  @media (max-width: 1380px) {
    width: 70%;
  }

  @media (max-width: 1000px) {
    width: 90%;
  }

  @media (min-height: 1000px) {
    height: 70px;
    font-size: 1.1rem;
  }
`;
