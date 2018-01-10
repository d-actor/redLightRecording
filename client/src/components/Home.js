import React, { Component } from 'react';
import { 
  Header, 
  Segment, 
  Container,
  Image,
  Grid,
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
          <Header as='h3' style={styles.text} textAlign='center'>569 W 600 S</Header>
          <Header as='h3' style={styles.text} textAlign='center'>Salt Lake City, UT 84101</Header>
          <Segment inverted>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Container text>
                    Red Light Recording is a full service recording studio located in downtown Salt Lake City. 
                    We leverage our experience, facility and equipment to deliver pristine sound quality for our 
                    customer's projects.  
                    <br />
                    <br />
                    Our goal is to provide a recording experience that is not only comfortable and inspiring but
                    also productive and affordable. Our studio is co-located with a number of other creative 
                    companies, however our tracking and control rooms have been built from the ground up decoupled 
                    from the main building providing complete sound isolation with an eye towards providing the 
                    best possible acoustics across a range of applications. 
                    <br />
                    <br />
                    We specialize in recording, mixing, and producing for music.Depending on the project and 
                    requirements we may be able to provide sound for film and television, sound design, and other 
                    audio post production services.
                    <br />
                    <br />
                    <a>Contact us</a> today to discuss your project and needs.
                  </Container>
                </Grid.Column>
                <Grid.Column width={2} />
                <Grid.Column width={6}>
                  <Image src={Rack} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        <Header style={styles.text}>Chris Jensen - Lead Engineer</Header>
        <Segment inverted>
          <Grid>
            <Grid.Row centered>
              <Grid.Column width={7}>
                <Image src={Chris} />
              </Grid.Column>
              <Grid.Column width={9}>
                Co-owner and lead engineer, Chris Jensen, has spent his life studying music and working in the industry.
                Chris earned his B.A. in Music Performance and Music Business at University of Georgia, studied Music 
                Production at Sacramento City College, and completed the Digital Studio Production program at Pyramind 
                in San Francisco.
                <br /> 
                <br /> 
                In addition to his extensive education, Chris has been a working engineer/musician composing and 
                performing with various organizations, groups and bands covering nearly every genre from classical 
                to rock to metal to electronic.  With a wide breadth of experience, Chris knows what various projects 
                should sound like and how to make them sound as best as possible.  Chris is easily Red Light Recording's
                greatest asset.  Whether he's playing the role of engineer, producer, songwriter/composer or any 
                combination of the three; Chris's experience, skill and passion shines through in all his work.
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Image centered src={LiveRoom} />
            </Grid.Row>
          </Grid>
        </Segment>
        </Container>
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
