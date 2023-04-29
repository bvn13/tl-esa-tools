import { createAction } from '@reduxjs/toolkit'
import {ResultByGroup} from "../initialState";

export const setContents = createAction<ResultByGroup[]>('data/setContents')

export const addAnswer = createAction<ResultByGroup>('data/addAnswer')
