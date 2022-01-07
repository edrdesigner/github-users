import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

interface HeaderProps {
  withBack?: boolean;
  title?: string;
}

export function Header({ withBack, title = 'Home' }: HeaderProps) {
  const navigate = useNavigate();

  function handleBack() {
    navigate('/');
  }

  return (
    <Container>
      {withBack && (
        <button onClick={handleBack} type="button">
          <FiChevronLeft size={24} /> Back
        </button>
      )}
      <strong>{title}</strong>
    </Container>
  );
}
