import React, { Component } from 'react';
import MediaQuery from "react-responsive"

class CenterPiece extends Component {
    render() {
        return (
            <div className='centerpiece-container'>
            <MediaQuery minWidth={1700}>
            <div className='purposestatement'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1699} minWidth={1182}>
            <div className='purposestatement-midsize'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1181} minWidth={320}>
            <div className='purposestatement-smallsize'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={320}>
            <div className='purposestatement-mobilesize'>
                Communities Free of Domestic Violence and Sexual Assault
            </div>
            </MediaQuery>
            </div>
        );
    }
}

export default CenterPiece