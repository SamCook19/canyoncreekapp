import React, {Component} from 'react'
import {Container} from 'reactstrap'
import {connect} from 'react-redux'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../../Config/firebase'


const uiConfig = {
  signInFlow: 'redirect',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ]
}

class LoginPage extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Container>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </Container>
    )
  }
}

const enhance = connect(
  ({firebase: {auth, profile}}) => ({
      auth,
      profile
  })
)

export default enhance(LoginPage)

