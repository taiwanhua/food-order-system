import { globalsAction, cartsAction, historyAction, AnyActions } from "./Actions";


export const globals = (state = initialGlobals, action: AnyActions<globalsAction, IinitialGlobalsPayload>) => {
    switch (action.type) {
        default:
            return state;
    }
}

const initialGlobals: IinitialGlobals = {

}

export interface IinitialGlobals {

}

export interface IinitialGlobalsPayload {

}

export const carts = (state = initialCarts, action: AnyActions<cartsAction, IinitialCartsPayload>) => {
    switch (action.type) {
        case 'CART_ADD':
            return {
                ...state,
                [action.payload.name]: (state?.[action.payload.name] ?? 0) + 1
            };
        case 'CART_MINUS':
            if (state?.[action.payload.name] === 1) {
                delete state[action.payload.name];
                return {
                    ...state
                }
            }
            else {
                return {
                    ...state,
                    [action.payload.name]: state[action.payload.name] - 1
                }
            }
        case 'CART_CLEAR':
            return {}
        case 'CART_SUBMIT':
            return {}
        default:
            return state;
    }
}

const initialCarts: IinitialCarts = {

}


export interface IinitialCarts {
    [K: string]: number;
}

export interface IinitialCartsPayload {
    /** 商品名稱 */
    name: string;
    /** 數量 */
    count?: number;
}

export const history = (state = initialhistory, action: AnyActions<historyAction, IinitialhistoryPayload>) => {
    switch (action.type) {
        case 'HISTORY_CLEAR':
            return {
                count: 0,
                order: {}
            };
        case 'CART_SUBMIT':
            return {
                ...state,
                count: state.count + 1,
                order: {
                    ...state.order,
                    [`#${state.count + 1}`]: { ...action.payload.order }
                }
            }
        default:
            return state;
    }
}

const initialhistory: Iinitialhistory = {
    count: 0,
    order: {}
}

export interface Iinitialhistory {
    count: number;
    order: {
        [K: string]: TOrder
    };
}

export type TOrder = {
    [K: string]: number;
}

export interface IinitialhistoryPayload {
    order: TOrder;
    count: number;
}
