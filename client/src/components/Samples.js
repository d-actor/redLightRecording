import React, { Component } from 'react';
import {
  Header,
  Segment,
  Grid,
  Container,
} from 'semantic-ui-react';

class Samples extends Component {

  render() {
    return(
      <Segment basic>
        <br />
        <Header inverted as='h1' textAlign='center'>Selected Works</Header>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <iframe style={styles.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=187857787/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://gr-ss.bandcamp.com/album/naysayer">Naysayer by grass</a></iframe>
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={6}>
                <Header as='h2' inverted>grass - Naysayer EP (2014)</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <iframe style={styles.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=1868496263/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://dustbloom.bandcamp.com/album/keeping-the-black-dog-at-bay">Keeping the Black Dog at Bay by Dustbloom</a></iframe>              
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={6}>
                <Header as='h2' inverted>Dustbloom - Keeping The Black Dog At Bay (2014)</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <iframe style={styles.iframe} src="https://bandcamp.com/EmbeddedPlayer/album=1868496263/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://dustbloom.bandcamp.com/album/keeping-the-black-dog-at-bay">Keeping the Black Dog at Bay by Dustbloom</a></iframe>              
              </Grid.Column>
              <Grid.Column width={2} />
              <Grid.Column width={6}>
                <Header as='h2' inverted>Bird Watcher - Keeping The Black Dog At Bay (2014)</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}

const styles = {
  iframe: {
    border: '0',
    width: '100%',
    height: '42px',
  },
}

export default Samples;