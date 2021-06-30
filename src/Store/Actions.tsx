import { AnyAction } from "redux";
import { tuple } from "../Type/type";

export interface AnyActions<T, S> extends AnyAction {
    [key: string]: any;
    type: T;
    payload: S;
}

const IglobalsAction = tuple('GLOBAL1', 'GLOBAL12');

export type globalsAction = typeof IglobalsAction[number];

const ICartAction = tuple('CART_ADD', 'CART_MINUS', 'CART_CLEAR', 'CART_SUBMIT');

export type cartsAction = typeof ICartAction[number];

const IHistoryAction = tuple('HISTORY_CLEAR', 'CART_SUBMIT');

export type historyAction = typeof IHistoryAction[number];
