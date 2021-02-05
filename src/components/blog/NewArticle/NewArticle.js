
import React, { Component } from 'react';
import { Container, Row, Card, CardHeader, CardBody, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

class NewArticle extends Component {
    constructor(props) {
        super(props);
        this.state={
            article: {
                title: '',
                content: '',
                createDate: new Date(),
                featuredImage: '',
                isPublished: false,
                lastModified: new Date(),
                createUserID: ''
            }
        }
    }
    render() {
        return (
            <Container>
            <Row>
                <Col xl={9} lg={9} md={8} sm={12} xs={12}>
                    <h2 className='SectionTitle'>New Article</h2>
                    <FormGroup>
                        <Label className='Label'>
                            Title
                        </Label>
                        <input type ='text' name='articleTitle' id='articleTitle' placeholder=''
                        onChange={(e) => console.log('')}
                        value={this.state.article.title}/>
                    </FormGroup>

                    <FormGroup>
                        <ReactQuill 
                            ref={(el) => this.quill = el}
                            value={this.state.article.content}
                        />
                    </FormGroup>
                </Col>
                <Col xl={3} lg={3} md={4} sm={12} xs={12}>
                    
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewArticle;