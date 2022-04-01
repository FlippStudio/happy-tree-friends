import * as React from "react";
import { Container, Grid, Typography } from "@mui/material";
import classes from "../styles/home/Faq.module.css";

import AccFaq from "./faq/AccFaq";

const faqs = [
  {
    id: 1,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 2,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 3,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 4,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 5,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
  {
    id: 6,
    title: "Duis egestas rutrum erat vel finibus?",
    desc: "Maecenas facilisis dolor vitae sodales tincidunt. Maecenas molestie \
        nisl sit amet nulla iaculis finibus. Aenean mollis ut nisi nec venenatis. \
        Ut tristique vehicula venenatis. Nullam vitae dapibus nibh. \
        Proin egestas quis elit a pulvinar. Mauris quis eleifend quam. \
        Aliquam consequat lectus hendrerit mauris gravida aliquet. ",
  },
];

const Faq = () => {
  return (
    <section className={classes.faq} >
      <Container maxWidth="xl">
        <Grid container spacing={4} id='faq'>
          <Grid item lg={4} xs={12}>
            <Typography component="h2" className="title-section">
              FAQ
            </Typography>
            <Typography component="div" className={classes.faqDesc}>
              Proin nulla est, gravida non augue nec, iaculis accumsan ex. Etiam
              sed laoreet ligula. Suspendisse mollis bibendum erat.
            </Typography>
          </Grid>
          <Grid item lg={8} xs={12}>
            {faqs.map((faq) => (
              <AccFaq acc={faq} key={faq.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Faq;
