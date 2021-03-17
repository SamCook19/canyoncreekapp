import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink} from 'reactstrap';
import { useAuth } from '../../../contexts/AuthContext'


class BoardCardButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    // const { currentUser } = useAuth();
    
    return ( 
    //    currentUser ? (  
       
       <div className='action-icon'>
            <NavLink href='/boardcardeditor' data={this.props.data}>
            <div className='spacer-BoardCard'></div>
           <FontAwesomeIcon icon="edit"  /> Edit Board Card
           </NavLink></div>)

    //    {/* </div> ) : null
        
    // ); */}
}
}

export default BoardCardButton;