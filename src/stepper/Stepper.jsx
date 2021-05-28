import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Payment } from "../components/Payment";
import { Review } from "../components/Review";
import { Address } from "../components/Address";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Add Address", "Add Payment", "Review"];
}

function getStepContent(stepIndex, setStep, setFormValues, formvalues) {
  switch (stepIndex) {
    case 0:
      return (
        <Address
          submit={setStep}
          prevValues={formvalues}
          setFormValues={setFormValues}
        />
      );
    case 1:
      return (
        <Payment
          submit={setStep}
          prevValues={formvalues}
          setFormValues={setFormValues}
        />
      );
    case 2:
      return <Review submit={setStep} value={formvalues} />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const [formvalues, setFormValues] = React.useState({});

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {getStepContent(activeStep, setActiveStep, setFormValues, formvalues)}
      <div></div>
    </div>
  );
}
