import styled from "styled-components";

export const Container = styled.div`
  max-width: 93%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
    /* @media only screen and (max-width: 1200px) {
      max-width: 1024px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 900px;
    }
    @media only screen and (max-width: 900px) {
      max-width: 768px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 600px;
    }
    @media only screen and (max-width: 600px) {
      max-width: 480px;
    }
    @media only screen and (max-width: 480px) {
      max-width: 320px;
    }
    @media only screen and (max-width: 320px) {
      max-width: 95%;
    } */
`

/* 320px.
480px.
600px.
768px.
900px.
1024px.
1200px. */
export const ButtonStyle = styled.a`
  padding: 8px 22px;
  font-weight: 600;
  border-radius: 4px;
  margin-right: 24px;
    @media only screen and (max-width: 1024px) {
      padding: 6px 18px;
      margin-right: 20px;
    }
`
export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Row = styled(Flex)`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`