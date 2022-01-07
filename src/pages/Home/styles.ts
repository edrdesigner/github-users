import styled from 'styled-components';

export const Container = styled.div``;

export const UserListContainer = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  a {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 34px;
    background-color: #3b89ff;
    border-radius: 3px;
    transition: all 0.3s;
    padding: 8px 20px;
    margin: 5px;
    text-decoration: none;

    &:hover {
      color: #fff;
      background-color: #2564C5;
      filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
    }
  }
`;
