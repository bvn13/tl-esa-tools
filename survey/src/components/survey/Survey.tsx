import './Survey.css'
import * as React from "react";
import {SurveyDto} from "./../../api/Api";
import {Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography} from "@mui/material";

interface Props {
    survey: SurveyDto | undefined
}

const Survey: React.FC<Props> = ({survey}) => {
    const [activeStep, setActiveStep] = React.useState(-1);

    const handleNext = (group: string | undefined, value: number | undefined) => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(-1);
    };


    const prepare = (text: string | undefined) => {
        if (text !== undefined) {
            return text
                .replaceAll("\n", "<br/>")
                .replaceAll("<script", "script")
        } else {
            return ""
        }
    }

    return (
        <div>
            <h1 style={{fontSize: '4em'}}>{survey?.title}</h1>
            <div dangerouslySetInnerHTML={{__html: prepare(survey?.intro)}}></div>
            <br/>
            <Box sx={{maxWidth: 400}}>
                <Button
                    variant="contained"
                    onClick={() => handleNext(undefined, undefined)}
                    sx={{mt: 1, mr: 1}}
                    disabled={activeStep !== -1}
                >
                    Start
                </Button>
            </Box>
            <br/>
            <Box sx={{maxWidth: 400}}>
                <Stepper activeStep={activeStep} orientation={"vertical"}>
                    {survey?.questions.map((question, index) =>
                        <Step key={question.question}>
                            <StepLabel optional={
                                index === survey?.questions.length - 1 ? (
                                    <Typography variant="caption">Last step</Typography>
                                ) : null
                            }>
                                {'Question ' + (index + 1)}
                            </StepLabel>
                            <StepContent>
                                <h4>{question.title}</h4>
                                <Typography>{question.question}</Typography>
                                <Box sx={{mb: 2}}>
                                    <div>
                                        {question.options.map((option, index) =>
                                            <div>
                                                <Button
                                                    variant="contained"
                                                    onClick={() => handleNext(question.group, option.value)}
                                                    sx={{mt: 1, mr: 1}}
                                                >
                                                    {option.option}
                                                </Button>
                                                <br/>
                                            </div>
                                        )}
                                    </div>
                                </Box>
                            </StepContent>
                        </Step>
                    )}
                </Stepper>
                {activeStep === survey?.questions.length && (
                    <Paper square elevation={0} sx={{p: 3}}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </Box>
        </div>
    )
}

export default Survey;