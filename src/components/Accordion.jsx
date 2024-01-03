import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Acc = (props) => {
  return (
    <>
      <Accordion className="kk">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ fill: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {props.name} <span>{props.spanname}</span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="co">
          <Typography>
            <span>
              {props.Typoname}
              <p>{props.TypoP}</p>
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Acc;
