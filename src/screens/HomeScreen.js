import React,  { useState, useEffect }from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import Product from '../components/Product'


function Home() {
    const [products,setProducts] = useState([])
    useEffect( ()=> {
        async function getProducts() {
            const res =  await axios.get('http://127.0.0.1:8000/api/products/')
            setProducts(res.data)
        }
        getProducts()
    },[])


    return (<main>
    <Container>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                </Col>
            ))}
        </Row>
        </Container>
        </main>
)
}

export default Home