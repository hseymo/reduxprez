import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import colorReducer from '../features/color/colorSlice'
import nameReducer from '../features/name/nameSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        color: colorReducer,
        name: nameReducer
    }
})