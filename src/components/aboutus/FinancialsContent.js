import React from 'react';
import { CardImg, CardTitle } from 'reactstrap';
import parse from 'html-react-parser';
import FinancialsPDFReader from './FinancialsPDFReader';


const FinancialsContent = (props) => {
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
                   
                <div className="PageImg">
                <div className = "FinancialsYearHeading">
                    {props.data.financialyear}    
                </div>
                <div className='FinancialsPDFReader'>
                    <FinancialsPDFReader />
                </div>
                <div className="MobileFinancials">
                    <a href='https://arxiv.org/pdf/quant-ph/0410100.pdf'>Click Here for Report</a>
                </div>
                </div>  
                </div>
        );
    }

export default FinancialsContent;