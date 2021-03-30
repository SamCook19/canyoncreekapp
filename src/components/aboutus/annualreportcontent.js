import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import AnnualReportPDFReader from './AnnualReportPDFReader';



const AnnualReportContent = (props) => {
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
                <div className="PageImg">
                <div className="EmploymentOppApplication">
                    {props.data.employmentapplication}
                </div>
                <div className="AnnualReportLink">
                    <AnnualReportPDFReader />
                </div>
                <div className="MobileAnnualReport">
                    <a href='https://arxiv.org/pdf/quant-ph/0410100.pdf'>Click Here for Report</a>
                </div>
                </div>  
                </div>
        );
    }

export default AnnualReportContent;