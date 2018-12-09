import React from 'react';
import styled from 'styled-components';

// components
import Timer from './Timer';

const list = [
  { id: 0, label: 'foo'},
  { id: 1, label: 'foo 2'},
  { id: 2, label: 'foo 3'},
];

const Timers = () => {
  return (
    <Container>
      {
        list.map(card => <Timer key={card.id} label={card.label} />)
      }
    </Container>
  );
};

export default Timers;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
