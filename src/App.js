import './App.css';

// import tailwindcss from 'tailwindcss';
import {Nav,Navbar,Alert, Container,InputGroup,DropdownButton,Dropdown,Carousel,Offcanvas,Card,NavDropdown, Form,FormControl,Button} from 'react-bootstrap';

function App() {
  function handle(){
      alert("hemllo");
  }
  return (
    <div className="App">
      <div className='container-fluid fixed header text-center bg-violet-700 text-white text-[2rem] font-bold flex justify-center z-[-1]'>
      <h1 className='text-center flex align-items-center justify-center'>Project Management Board</h1>
      </div>
      <Container fluid className='bg-dark flex flex-row justify-between w-[100vw] h-[100vh]' style={{padding:'20px'}}>
      <Card border="danger" className='rounded-full' style={{ width: '100%' ,borderRadius:'20px',border:'5px solid'}}>
    <Card.Header className='text-center font-bold text-[1.5rem] justify-between'style={{display:'flex',flexDirection:'row',}}>To Do
    <i className='fa fa-add align-items-center justify-center flex cursor-pointer hover:text-green-600' onClick={handle}></i>
    </Card.Header>
    <Card.Body>
      
    <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Fix Navigation Bug</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

    </Card.Body>
  </Card>

  <Card border="warning" style={{ width: '100%' ,borderRadius:'20px',border:'5px solid',marginLeft:'20px'}}>
    <Card.Header className='text-center font-bold text-[1.5rem] justify-between flex flex-row'>In Progress
    <i className='fa fa-add align-items-center justify-center flex cursor-pointer'></i>
    </Card.Header>
    <Card.Body>

    <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
    <Card.Title className='' style={{fontWeight:'bold'}}>Release new website</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  </Card.Body>
  </Card>

  <Card border="primary" style={{ width: '100%' ,borderRadius:'20px',border:'5px solid',marginLeft:'20px'}}>
    <Card.Header className='text-center font-bold text-[1.5rem] flex flex-row justify-between'>Review<i className='fa fa-add align-items-center justify-center flex cursor-pointer'></i></Card.Header>
    <Card.Body className='' style={{overflowY:'scroll'}}>
    
    <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Deploy server on acceptance enviroment</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Change layout for the content page</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Change button color</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Change button color</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Change button color</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

    </Card.Body>
  </Card>

  <Card border="success" style={{ width: '100%' ,borderRadius:'20px',border:'5px solid',marginLeft:'20px'}}>
    <Card.Header className='text-center font-bold text-[1.5rem] flex flex-row justify-between'>Done<i className='fa fa-add align-items-center justify-center flex cursor-pointer'></i></Card.Header>
    <Card.Body>
    
    <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Complete the registration flow</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card className='' style={{borderRadius:'15px',border:'none',background:'#f3f3f3',marginTop:'10px'}}>
    <Card.Body>
      <Card.Title className='' style={{fontWeight:'bold'}}>Create new database instance</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

    </Card.Body>
  </Card>
  </Container>
    </div>
  );
}

export default App;
