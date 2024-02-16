import { createReducer } from '@reduxjs/toolkit'
import {addAnswer, setContents} from '../actions/data'
import initialState, {StoreContent, ResultByGroup} from "../initialState";
import * as _ from "lodash-es";

const reduceState = (array: ResultByGroup[], addon: ResultByGroup) => {
    let added = false;
    array.forEach((result) => {
        if (result.group === addon.group) {
            added = true
            result.value += addon.value
        }
    })
    if (!added) {
        array = _.concat(array, [addon])
    }
    return array
}

const dataReducer = createReducer<StoreContent>(initialState, (builder) => {
    builder.addCase(setContents, (state, action) => {
        state.resultsByGroup = action.payload
    })
    builder.addCase(addAnswer, (state, action) => {
        state.resultsByGroup = reduceState(state.resultsByGroup, action.payload)
    })
})

export default dataReducer
