import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';

import PDFViewer from 'pdf-viewer-reactjs'



const FinancialsContent = (props) => {
        return (
            <div className ="DatabasePage-Financials">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                        {props.data.title}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>
                   
                <div className="PageImg">
                <div className = "FinancialsYearHeading">
                    {props.data.financialyear}    
                </div>
                
                <div className="FinancialsContainer">
                <div className="MobileFinancials">
                    <a href={props.data.link}>Click Here for Financials</a>
                    </div>
                </div>
                </div>  
                </div>
        );
    }

export default FinancialsContent;