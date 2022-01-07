import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #E5E5E5;
  display: flex;
  align-items: center;

  img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin-right: 20px;
  }

  h3 {
    font-size: 24px;
    color: #252525;
    padding-bottom: 6px;
  }

  p {
    padding: 0;
    margin: 0;
    color: #B1B1B1;
    font-size: 18px;
  }

  a {
    color: #B1B1B1;
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 42px;
    width: 42px;
    background: #f2f2f2;
    border-radius:50px;
  }
`;
