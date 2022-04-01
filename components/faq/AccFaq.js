import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import classes from "../../styles/home/Faq.module.css";

const AccFaq = ({ acc }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Accordion
      className={classes.acc}
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
    >
      <AccordionSummary
        expandIcon={expanded === "panel1" ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1a-content"
      >
        <Typography className="acc-title">{acc.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className={classes.accDesc}>{acc.desc}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccFaq;
