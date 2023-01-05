import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import '../App.css';

function Employee({ employees, handleClick, selectedTeam }) {
  function handleClick(event) {
    // console.log(event.currentTarget.id);
    // if only target is mentioned i will get bach a tag wich i clciked but cuurrnt target get me attribute
  }

  return (
    <Row>
      {employees.map(employee =>
        <Col xs={4} key={employee.id}>
          <Card
            style={{ width: '18rem' }}
            onClick={handleClick}
            id={employee.id}
            className={
              employee.teamName === selectedTeam
                ? 'card m-2 standout mb-4'
                : 'card m-2 mb-4'
            }
          >
            <Card.Img
              variant="top"
              src={employee.gender === 'male' ? './male.jpg' : 'girl.jpg'}
            />

            <Card.Body>
              <Card.Title>
                {employee.fullName}
              </Card.Title>
              <Card.Text>
                {employee.designation}
              </Card.Text>
              <Card.Text>
                {employee.teamName}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      )}
    </Row>
  );
}

export default Employee;
