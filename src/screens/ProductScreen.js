import React,  { useState, useEffect }from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, ListGroup, Button, Image, Row, Col, ListGroupItem, Form} from 'react-bootstrap';
import Rating from '../components/Rating'
import axios from 'axios'


const Product = () => {
    const { id } = useParams();
    const [product,setProduct] = useState([])
    const [qty,setQty] = useState(1)
    useEffect(() => {
        async function getProduct() {
            const res =  await axios.get(`http://127.0.0.1:8000/api/products/${id}/`)
            const arr = res.data
            const new_src = arr.image.substr(16, arr.image.length)
            setProduct({...arr, image:new_src})
        }
        getProduct()
        // eslint-disable-next-line
    },[])
    const addToCartHandler = () =>{
        window.location.replace(`/cart/${id}?qty${qty}`)
    }
    return (
        <div>
            <Link to='/'>
            <Button className='btn btn-light my-3'>Go Back</Button>
            </Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroupItem className='border-0'>
                            <p>{product.name}</p>
                        </ListGroupItem>
                        <ListGroupItem className='border-0'>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </ListGroupItem>
                        <ListGroupItem className='border-0'>
                            <p>{product.description}</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card className='border-0'>
                        <ListGroup variant='flush' className='border-0'>
                            <ListGroupItem className='border-0'>
                                <Row>
                                    <Col>Price: </Col>
                                    <Col>${product.price} </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className='border-0'>
                                <Row>
                                        <Col>Availability: </Col>
                                        <Col>{product.countInStock > 0 ? product.countInStock : 'Out of Stock'}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className='border-0'>
                                <Row>
                                        <Col>Qty to Order: </Col>
                                        <Col className='my-1 border-0'>{product.countInStock > 0 && (
                                        <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {
                                            [...Array(product.countInStock).keys()].map((x) => (
                                            <option key =  {x + 1} value= {x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                        </Form.Control>
                                        )}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem className='border-0'>
                                <Row>
                                    <Button
                                    onClick={addToCartHandler}
                                    disabled={product.countInStock === 0}
                                    className='btn-block'
                                    type='button'>
                                    Add To Cart</Button>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
};

export default Product;
