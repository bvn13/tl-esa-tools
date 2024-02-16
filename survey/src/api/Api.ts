
export interface SettingsDto {
    randomizeQuestions: boolean,
    randomizeOptions: boolean
}

export interface OptionDto {
    option: string,
    value: number
}

export interface QuestionDto {
    group: string,
    title: string,
    question: string,
    options: OptionDto[]
}

export interface SurveyDto {
    title: string,
    intro: string,
    settings: SettingsDto,
    questions: QuestionDto[],
    resultsInfo?: string
}

const Api = {
    loadSurvey: (uri: string,
                 onSuccess: (survey: SurveyDto) => void,
                 onError: (failure: string) => void) => {
        fetch(uri)
            .then(res => res.json())
            .then(out => onSuccess(out as SurveyDto))
            .catch(err => onError(err))
    }
};

export default Api;