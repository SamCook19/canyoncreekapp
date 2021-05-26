import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import PDFViewer from 'pdf-viewer-reactjs';
import parse from 'html-react-parser';



const AnnualReportContent = (props) => {
        return (
            <div className ="DatabasePage-AnnualReport">
                <div className = "PageTitleContent">
                    
                    <CardTitle className="PageTitle">
                    {parse(props.data.title)}
                    </CardTitle>
                    <div className='page-spacer'></div>
                    <div className= "PageContent">
                    {parse(props.data.content)}
                    </div>
                    
                </div>   
                <div className="PageImg">
                <div className="EmploymentOppApplication">
                    {props.data.employmentapplication}
                </div>
                <div className="AnnualReportContainer">
                <div className="MobileAnnualReport">
                <a href={props.data.link}>Click Here To View Our Latest Annual Report</a>
                </div>
                </div>
                </div>  
                </div>
        );
    }

export default AnnualReportContent;