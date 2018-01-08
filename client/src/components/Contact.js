import React, { Component } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

class Contact extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Contact</Header>
      </Segment>
    )
  }
}

export default Contact;