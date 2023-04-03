import React from "react";
import { Card } from "react-bootstrap";
import Rating from './Rating'
import { Link } from "react-router-dom";

function Product({ product }) {
    const new_img_src = product.image.substr(16, product.image.length)
    return (
    <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
            <Card.Img src={new_img_src}/>
        </Link>
        <Card.Body>
            <Card.Title>
                <strong>{product.name}</strong>
            </Card.Title>
                <Rating className="my-5" rating={product.rating} numReviews={product.numReviews} />
        </Card.Body>
        <Card.Footer as="h3">
            ${product.price}
        </Card.Footer>
    </Card>
    )
}

export default Product