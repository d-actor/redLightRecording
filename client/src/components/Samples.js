import React, { Component } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

class Samples extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Samples</Header>
      </Segment>
    )
  }
}

export default Samples;