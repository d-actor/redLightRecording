import React, { Component } from 'react';
import {
  Header,
  Segment,
} from 'semantic-ui-react';

class ScheduleMain extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Schedule</Header>
      </Segment>
    )
  }
}

export default ScheduleMain;