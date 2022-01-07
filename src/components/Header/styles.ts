import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #282828;
  color: #FFF;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);

  strong {
    color: #FFF;
    align-self: center;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 700;
  }

  button {
    height: 40px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    color: #FFF;
  }
`;
