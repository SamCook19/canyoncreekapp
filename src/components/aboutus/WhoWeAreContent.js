import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';
import PageSocialMedia from '../../components/pagesocialmedia';


const WhoWeAreContent = (props) => {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                        {parse(props.data.content)}
                    </div>
                    
                </div>   
                <div className="WhoWeArePageImg">
                <CardImg
                top
                src={props.data.featuredImage}
                alt="Card Image"
                className="CardImage"
                />
                </div>
                <div className='mobile-social-page'>
                    <PageSocialMedia />
                </div>

                </div>
        );
    }

export default WhoWeAreContent;