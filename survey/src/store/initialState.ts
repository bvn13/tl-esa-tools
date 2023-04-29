export interface ResultByGroup {
    group: string,
    value: number
}

export interface StoreContent {
    resultsByGroup: ResultByGroup[]
}

const initialState: StoreContent = {
    resultsByGroup: []
}

export default initialState