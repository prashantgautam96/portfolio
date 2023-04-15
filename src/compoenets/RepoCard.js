import Card from 'react-bootstrap/Card';
import { FaGithub } from 'react-icons/fa';
import "./hero.css"

function RepoCard({props}) {

    console.log({props})
    
  return (
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Body>
      <FaGithub/>
      
        <Card.Title>{props.name}</Card.Title>
        
        <Card.Text>
        
        </Card.Text>
        <Card.Link href={props.clone_url}>Card Link</Card.Link>
        
      </Card.Body>
    </Card>
  );
}

export default RepoCard;