
import React, { Component } from 'react';
import {Container, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Button} from 'reactstrap';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

class NewArticle extends Component {
    constructor(props) {
        super(props);
        
        this.state={
            article: {
                title: "",
                content: "",
                createDate: new Date(),
                featuredImage: '',
                isPublished: false,
                lastModified: new Date(),
                createUserID: ''
            }
        }
    }

    modules = {
        toolbar: {
            container: [
                [{'header': '1'}, {'header': '2'}, {'font': []}],
                [{size: []}],
                ['bold','italic', 'underline', 'strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'},
                    {'indent': '-1'}, {'indent': '+1'}],
                    ['link', 'image'],
                    ['clean'], ['code-block']
            ],
        },
        clipboard: {
            matchvisual: false,
        },
    }

    formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
        'video',
        'code-block'
    ]

    onChangeArticleTitle = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                title: value
            }
        })
    }

    onChangeArticleContent = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                content: value
            }
        })
    }

    onChangePublish = (value) => {
        this.setState({
            article: {
                ...this.state.article,
                isPublished: value === 'True'
            }
        })
    }

    render() {
        return (
            <Container>
            <Row>
                <Col xl={9} lg={9} md={8} sm={12} xs={12}>
                    <h2 className='SectionTitle'>New Article</h2>
                    <FormGroup>
                        <Label className='TitleLabel'>
                            Title
                        </Label>
                        <input type ='text' name='articleTitle' id='articleTitle' placeholder=''
                        onChange={(e) => this.onChangeArticleTitle(e.target.value)}
                        value={this.state.article.title}/>
                    </FormGroup>

                    <FormGroup>
                        <ReactQuill 
                            ref={(el) => this.quill = el}
                            value={this.state.article.content}
                            onChange={(e) => this.onChangeArticleContent(e)}
                            theme='snow'
                            modules={this.modules}
                            formats={this.formats}
                        />
                    </FormGroup>
                </Col>
                <Col xl={3} lg={3} md={4} sm={12} xs={12}>
                    <Card>
                        <CardHeader>
                            Article Setting
                        </CardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label ClassName='Label'>Is Published?</Label>
                                <Input type='select' name='publish' id='publish'
                                onChange={(e)=> this.onChangePublish(e.target.value)}>
                                    <option>False</option>
                                    <option>True</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Button color='danger'
                                onClick={(e) => console.log(this.state.article)}>
                                    Submit
                                </Button>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </Container>
        );
    }
}

export default NewArticle;