import React from "react";
import styled from "styled-components";
import { PageBreadcrumbs } from "../components";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography, Grid } from "@material-ui/core";
import aboutImg from "../assets/images/about.jpg";

const AboutPage = () => {
  const classes = useStyles();
  return (
    <main>
      <PageBreadcrumbs title="About" />
      <Container className={classes.gridContainer}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <AboutImage src={aboutImg} alt="model wearing shoes" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="h6" paragraph>
              Wolf meggings snackwave, deep v food truck mumblecore pop-up
              authentic single-origin coffee sriracha meh vice hella.
            </Typography>
            <Typography variant="body1" paragraph>
              Gastropub shoreditch sartorial tilde, celiac pitchfork literally
              prism distillery ethical kale chips you probably haven't heard of
              them mustache. Listicle post-ironic scenester, man bun tote bag
              live-edge actually cred yr etsy raw denim. Tacos seitan
              thundercats disrupt marfa palo santo etsy schlitz neutra ramps
              tumeric paleo. Bushwick art party vice chia normcore organic raw
              denim. Activated charcoal wayfarers +1 tousled, austin la croix
              quinoa. Twee stumptown occupy master cleanse lumbersexual
              wayfarers. Snackwave craft beer tote bag whatever.
            </Typography>
            <Typography variant="body1" paragraph>
              Paleosriracha squid, vinyl everyday carry pok pok brooklyn
              gentrify humblebrag chillwave literally distillery. Raclette craft
              beer irony vaporware lumbersexual meditation whatever yr vice tote
              bag bushwick ugh street art. Tumblr intelligentsia palo santo
              master cleanse, fixie vaporware sustainable retro la croix. Tote
              bag fingerstache bespoke kombucha VHS hashtag, organic irony man
              braid food truck freegan actually fanny pack pok pok. Banh mi
              shaman microdosing enamel pin, heirloom gentrify four dollar toast
              tumblr typewriter austin lumbersexual quinoa green juice wayfarers
              roof party.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Actually biodiesel VHS, bespoke aesthetic waistcoat roof party
              viral blue bottle twee snackwave selvage skateboard hot chicken.
              Tilde cliche humblebrag bitters, retro twee hoodie tacos meggings.
              Pickled succulents ennui, iPhone hell of deep v fingerstache
              whatever beard salvia neutra art party knausgaard pabst.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

const AboutImage = styled.img`
  width: 100%;
  display: block;
  margin-top: 1em;
  object-fit: cover;
  height: 650px;
  border-radius: var(--radius);
`;

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: "20px",
    marginBottom: "20px",
  },
}));

export default AboutPage;
