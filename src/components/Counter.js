import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { add, sub } from '../redux/actions/counter.actions';

class Counter extends React.Component {
  render() {
    const { value, add, sub } = this.props;

    return (
      <Card>
        <Title>counter</Title>
        <Value>{value}</Value>
        <Buttons>
          <Button onClick={add}>add</Button>
          <Button onClick={sub}>sub</Button>
        </Buttons>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  value: state.counter
});

export default connect(
  mapStateToProps,
  { add, sub }
)(Counter);

const Card = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #444;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div``;

const Value = styled.div`
  font-size: 40px;
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  color: red;
  margin: 0 10px;
`;
