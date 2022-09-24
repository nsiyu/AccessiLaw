import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './GroupExample.css';
function GroupExample() {
  return (
    <CardGroup className='card-container'>
      <Card  border="warning" style={{ width: '18rem' }} className='card'>
       
        <Card.Body>
          <Card.Title>Definitions:</Card.Title>
          <Card.Text>
            Highlight any law related terminology and we will give you a definition. Obtain any definition within a second!{' '}
          </Card.Text>
        </Card.Body>

      </Card>
      
      <Card  border="warning" style={{ width: '18rem' }}className='card'>
       
        <Card.Body>
          <Card.Title>Translations:</Card.Title>
          <Card.Text>
            Not fluent in English? We've got you covered with our translation feature built into the extension!{' '}
          </Card.Text>
        </Card.Body>

      </Card>
      <Card  border="warning" style={{ width: '18rem' }} className='card'>
        <Card.Body>
          <Card.Title>Equality:</Card.Title>
          <Card.Text>
            Regardless of your background, we believe everyone deserves to gets a fair oppertunity in legal situations! {' '}
          </Card.Text>
        </Card.Body>

      </Card>
    </CardGroup>
  );
}

export default GroupExample;