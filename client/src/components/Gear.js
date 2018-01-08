import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
  Card,
  Image,
  Grid,
} from 'semantic-ui-react';

class Gear extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Gear</Header>
        <Container text>
          <Segment inverted>
            Red Light has one of the finest collections of modern and vintage music/recording gear in Salt Lake City. 
            From our microphones to our guitars to our software to our racks, we're sure to have whatever your session needs to get it popping.
          </Segment>
        </Container>
        <Container>
        </Container>
      </Segment>
    )
  }
}

export default Gear;