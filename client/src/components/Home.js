import React, { Component } from 'react';
import { 
  Header, 
  Segment, 
  Container,
  Image,
  Grid,
  Card,
} from 'semantic-ui-react';
import Chris from '../images/chris.jpg';
import Rack from '../images/rack.jpg';
import LiveRoom from '../images/liveroom.jpg';
import Main from '../images/redLightMain.jpg';

class Home extends Component {
  render() {
    return (
      <Segment basic>
        <Container>
          <br />
          <div style={{ display: 'flex', height: '300px' }}>
            <Image centered size='medium' src={Main} />
            <Image centered size='medium' src={Main} />
            <Image centered size='medium' src={Main} />
          </div>
          <Header as='h1' style={styles.text} textAlign='center'>Red Light Recording</Header>
          <Header as='h3' style={styles.text}>569 W 600 S</Header>
          <Header as='h3' style={styles.text}>Salt Lake City, UT 84101</Header>
        </Container>
        <Header style={styles.text}>Chris Jensen</Header>
        <Grid>
          <Grid.Row centered>
            <Card>
              <Image src={Chris} />
            </Card>
            <Card>
              <Image src={Rack} />
            </Card>
          </Grid.Row>
          <Grid.Row>
            <Image centered src={LiveRoom} />
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

const styles = {
  text: {
    color: '#FFF',
  },
  container: {
    border: '1px solid white',
  }
}


export default Home;
