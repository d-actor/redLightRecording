import React, { Component } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

class Gear extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Gear</Header>
      </Segment>
    )
  }
}

export default Gear;