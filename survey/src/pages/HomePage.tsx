import React, {useEffect} from 'react'
import DateDisplay from '../components/DateDisplay'
import {SnackbarOrigin, useSnackbar} from 'notistack';
import Api, {SurveyDto} from "./../api/Api";
import Survey from "./../components/survey/Survey";
import {Container, Grid} from "@mui/material";

const HomePage: React.FC = () => {
    const [survey, setSurvey] = React.useState<SurveyDto>();
    const queryParameters = new URLSearchParams(window.location.search);
    const surveyUri: string = queryParameters.get("s") as string
    const {enqueueSnackbar} = useSnackbar();
    const snackbarAnchor = {
        horizontal: 'center',
        vertical: 'top'
    } as SnackbarOrigin;

    useEffect(() => {
        Api.loadSurvey(surveyUri,
            survey => {
                setSurvey(survey);
                console.log("Survey: " + survey)
            },
            (failure) => {
                enqueueSnackbar(failure, {
                    variant: 'error',
                    anchorOrigin: snackbarAnchor
                })
            })
    }, [surveyUri]);

    return (
        <Container>
            <Grid container={true} spacing={2}>
                <Grid item xs={6} md={8}>
                    <Survey survey={survey}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default HomePage
