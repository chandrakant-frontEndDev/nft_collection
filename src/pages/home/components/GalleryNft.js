import React from 'react';
import {Col, Card } from 'react-bootstrap'

const GalleryNft = ({item:{id, email, body}}) => {
    return (
        <>
            <Col lg={4}  className='my-2'>
            <Card style={{ width: '18rem' , color:"white"}}>
                
                <Card.Body>
                    <Card.Title>ID: {id}</Card.Title>
                    <Card.Text>
                      {email}
                    </Card.Text>
                    <p>{body}</p>
                </Card.Body>
            </Card>
            </Col>
        </>
    )
}



export default GalleryNft;