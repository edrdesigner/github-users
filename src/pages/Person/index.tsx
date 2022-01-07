import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiGithub } from 'react-icons/fi';
import { Header } from '../../components/Header';
import api from '../../services/api';
import { Container } from './styles';

interface UserParams {
  id: number | null;
  name: string;
  avatarUrl: string;
  bio: string;
  company: string;
  htmlUrl: string;
  location: string;
}

export function Person() {
  const [user, setUser] = useState<UserParams>({} as UserParams);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  useEffect(() => {
    setLoading(true);

    api
      .get(`users/${params.personId}`)
      .then((response) => {
        const {
          id,
          name,
          avatar_url: avatarUrl,
          bio,
          company,
          html_url: htmlUrl,
          location,
        } = response.data;
        setUser({
          id,
          name,
          avatarUrl,
          bio,
          company,
          htmlUrl,
          location,
        });
      })
      .finally(() => setLoading(false));
  }, [params.personId]);

  return (
    <>
      <Header title="Person" withBack />
      <div className="content">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <Container>
            <img src={user.avatarUrl} alt={user.name} />
            <div>
              <h3>{user.name}</h3>
              <p>{user.location}</p>
            </div>
            <a href={user.htmlUrl} target="blank">
              <FiGithub size={24} />
            </a>
          </Container>
        )}
      </div>
    </>
  );
}
