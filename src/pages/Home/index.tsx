import React from 'react';
import { Header } from '../../components/Header';
import { Container, UserListContainer } from './styles';

const USER_LIST = ['GrahamCampbell', 'fabpot', 'weierophinney', 'rkh', 'josh'];

export function Home() {
  return (
    <>
      <Header />
      <div className="content">
        <h2>Top 5 Github Users</h2>
        <p>Tap the username to see more information:</p>
        <UserListContainer>
          {USER_LIST.map((user) => (
            <a key={user} href={`/${user}`}>
              {user}
            </a>
          ))}
        </UserListContainer>
      </div>
    </>
  );
}
