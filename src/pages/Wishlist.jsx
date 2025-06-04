import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {

  const wishlistItems = useSelector((state) => state.wishlistReducer)
  console.log("========wishlist items in wishlist page");
  console.log(wishlistItems);

  const dispatch = useDispatch()
  const handleWishlist =(item)=>{
    dispatch(addToCart(item))
    dispatch(removeFromWishlist(item.id))
  }
  return (
    <>

      <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
        <button className='btn btn-success mt-4 ms-4'><i class="fa-solid fa-arrow-left me-2"></i>Back To Home</button>
      </Link>

      <Row className='m-5'>
        {
          wishlistItems?.length > 0 ?
            wishlistItems.map(item => (
              <Col className="mb-4 d-flex justify-content-center" sm={6}
                md={4} lg={3} xl={2}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.image}
                    style={{ height: '200px', objectFit: 'contain', padding: '10px' }} />
                  <Card.Body>
                    <Card.Title className="text-truncate" >{item.title.slice(0, 20)}</Card.Title>
                    <Card.Text>
                      <p> {item.description.slice(0, 50)}...</p>
                      <p className='fw-bolder'>Price:&#x20B9;{item.price}</p>
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-between '>

                      <Button variant="outline-success" onClick={()=>handleWishlist(item)}><i class="fa-solid fa-cart-shopping"></i></Button>
                      <Button variant="outline-danger" onClick={() => dispatch(removeFromWishlist(item.id))}><i class="fa-solid fa-trash" ></i></Button>

                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))
            :
            <div style={{ height: '100vh' }} className='d-flex  align-items-center flex-column'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXivEkJ2UUrt_cxUobj90UKk7QzAmiK8dTwg&s" alt=""
              height='400px' />
              <h3 className='text-danger fw-bolder'>Your Wishlist Is Empty</h3>
            </div>
        }

      </Row>
    </>
  )
}

export default Wishlist