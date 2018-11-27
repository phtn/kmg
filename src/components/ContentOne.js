import React from "react";
import Fade from "react-reveal/Fade";
import { Grid, Image } from "semantic-ui-react";

const styles = {
  container: {
    position: "absolute",
    top: 650,
    width: "100%",
    backgroundColor: "#eee",
    padding: 100
  },
  title: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: 30,
    color: "#066b98"
  },
  hr: {
    maxWidth: 100,
    borderBottom: 'none',
    borderTopColor: 'rgb(238,238,238)'
  }
};

const ContentOne = props => {
  return (
    <div style={styles.container}>
      <Fade bottom>
        <div>
          <Grid divided="equal">
            <Grid.Row columns={2} textAlign="center">
              <Grid.Column>
                <h2 style={styles.title}>{props.title}</h2>
                <hr style={styles.hr}/>
              </Grid.Column>
              <Grid.Column>
                <Image src={props.image} height={300} style={{margin: '0 auto'}}/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Fade>
    </div>
  );
};

export default ContentOne;
