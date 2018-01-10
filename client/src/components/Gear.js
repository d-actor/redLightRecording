import React, { Component } from 'react';
import {
  Header,
  Segment,
  Container,
  Grid,
  List,
} from 'semantic-ui-react';
import axios from 'axios';
// import GearList from './GearList';

class Gear extends Component {
  state = { gears: [] }

  componentDidMount() {
    axios.get('/api/gears')
    .then( res => this.setState({ gears: res.data }) )
  }

  render() {
    const { gears } = this.state
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Gear</Header>
        <Container text>
          <Segment inverted>
            Red Light has one of the finest collections of modern and vintage gear in Salt Lake City. 
            From our preamps to our microphones to our guitars to our plugins, we're sure to have whatever your session needs to get it popping.
          </Segment>
        </Container>
        <Container>
          <Grid>
            <Grid.Column mobie={16} tablet={16} computer={12}>
            <List inverted divided relaxed>
              { gears.map( gear => 
                <List.Item key={gear.id}>
                  <List.Content>
                    <List.Header>{gear.name}</List.Header>
                    <List.Description>
                      {gear.category}
                      <br />
                      {gear.description}
                    </List.Description>
                  </List.Content>
                </List.Item>
                )
              }
            </List>
              {/* <GearList /> */}
            </Grid.Column>
            <Grid.Column mobie={16} tablet={16} computer={4}>
              <Header as='h1' textAlign='center'>Placeholder for something</Header>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

export default Gear;