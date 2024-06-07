import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OptionCard.css'
import { CardHeader } from 'react-bootstrap';

function OptionCard() {
  return (
    <Card className='OptionCard'>
      <Card.Body className='OptionCardBody'>
        <Card.Title className='OptionCardTitle'>Compartilhe Pensamentos</Card.Title>
        <Card.Text className='OptionCardDescription'>
          Seja parte de uma comunidade cada vez maior.
        </Card.Text>
        <Button className='OptionButton'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default OptionCard;