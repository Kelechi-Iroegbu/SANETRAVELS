import Check from "@mui/icons-material/Check";
import { Stepper, stepClasses, typographyClasses } from "@mui/joy";
import Step from "@mui/joy/Step";
import StepButton from "@mui/joy/StepButton";
import StepIndicator, { stepIndicatorClasses } from "@mui/joy/StepIndicator";
import * as React from "react";
import TravelersInfoForm from "../forms/TravelersInfoForm";

// add all your steps here
const steps = ["Order placed", "In review", "Approved"];

export default function BigStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  function nextStep() {
    setActiveStep((prevActiveStep) => {
      return Math.min(prevActiveStep + 1, steps.length - 1);
    });
  }

  function prevStep() {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  }

  let Component;

  switch (activeStep) {
    case 0:
      Component = <TravelersInfoForm goToNextStep={nextStep} />;
      break;
    default:
      Component = "Unknown step";
  }

  return (
    <Stepper sx={{ width: "100%" }}>
      {steps.map((step, index) => (
        <Step
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? "soft" : "solid"}
              // color={activeStep < index ? "neutral" : "primary"}
              sx={(theme) => ({
                "--Stepper-verticalGap": "2.5rem",
                "--StepIndicator-size": "2.5rem",
                "--Step-gap": "1rem",
                "--Step-connectorInset": "0.5rem",
                "--Step-connectorRadius": "1rem",
                "--Step-connectorThickness": "4px",
                "--joy-palette-success-solidBg": "red",
                [`& .${stepClasses.completed}`]: {
                  "&::after": { bgcolor: "success.solidBg" },
                },
                [`& .${stepClasses.active}`]: {
                  [`& .${stepIndicatorClasses.root}`]: {
                    border: "4px solid",

                    borderColor: "#fff",
                    boxShadow: `0 0 0 1px ${theme.vars.palette.primary[500]}`,
                    backgroundColor: "red",
                  },
                },
                [`& .${stepClasses.disabled} *`]: {
                  color: "neutral.softDisabledColor",
                },
                [`& .${typographyClasses["title-sm"]}`]: {
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "10px",
                },
              })}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={[
            activeStep > index &&
              index !== 2 && { "&::after": { bgcolor: "red" } },
          ]}
        >
          <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
        </Step>
      ))}

      <div>{Component}</div>
    </Stepper>
  );
}
