import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addtoWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';

function Home() {
    const response = useFetch('https://fakestoreapi.com/products')
    console.log('all products');
    console.log(response);
    
const dispatch=useDispatch()

    return (
        <>
            <Row className='px-4 py-3' xs={1} sm={2} md={2} lg={3} xl={4} xxl={5}>
                {
                    response?.length > 0 ?
                        response.map(item => (
                            <Col className="mb-4 d-flex justify-content-center" >
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
                                            <Button variant="outline-danger" onClick={()=>dispatch(addtoWishlist(item))} ><i class="fa-solid fa-heart" ></i></Button>
                                            <Button variant="outline-success" onClick={()=>dispatch(addToCart(item))}><i class="fa-solid fa-cart-shopping"></i></Button>

                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                        :
                        <div>
                            <p>No item found</p>
                        </div>
                }

            </Row>
        </>
    )
}

export default Home