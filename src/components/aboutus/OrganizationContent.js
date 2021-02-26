import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import LeadershipCard from './LeadershipCard';



const OrganizationContent = (props) => {
        return (
            <div className ="DatabasePage">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                        {props.data.content}
                    </div>
                    
                </div>   
                <Container className='leadership-container'>
                    {
                      this.state.isLoaded ?
                        this.state.articles.map((article, index) => {
                          return(
                          <LeadershipCard className='leadership-card'
                            key={index}
                            data={article}
                          />
                          )
                        })
                        : '' 
                      }
                  </Container> 
                </div>
        );
    }

export default OrganizationContent;