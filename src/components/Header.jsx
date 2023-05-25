import { Nav, Container } from 'react-bootstrap'

const Header = () => {
  const date = new Date()
  return (
    <Nav  style={{background : "lightblue"}}>
      <Container className='d-flex justify-content-between align-items-center'>
        <h3 className='fw-bold' style={{color:"black"}}>Future Tracker</h3>
        <span style={{color:"black"}}>{date.toDateString()}</span>
      </Container>
    </Nav>
  )
}

export default Header
