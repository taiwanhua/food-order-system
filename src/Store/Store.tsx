import * as React from 'react';
import {
    Provider,
} from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { globals, carts, history } from './Reducers'

const combinedReducer = combineReducers({
    globals,
    carts,
    history
})

export type RootState = ReturnType<typeof combinedReducer>

const Stroe = createStore(combinedReducer, composeWithDevTools());

interface IProviderProps {
    /**
     * 需要使用本Context的所有子組件
     */
    children?: React.ReactNode;
}

export const ReduxProvider: React.FC<IProviderProps> = (props) => {

    return (
        <Provider store={Stroe}>
            {props.children}
        </Provider>
    )
}