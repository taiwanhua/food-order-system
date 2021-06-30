import * as React from 'react'
import './MenuAndCart.css';
/** 因無API，以此 MenuData 作為替代 */
import { MenuData } from '../../mock'
import { useDispatch, useSelector } from 'react-redux';
import { IinitialCarts } from '../../Store/Reducers'
import { RootState } from '../../Store/Store'
import { IMenuData } from '../../Type/MenuData';

interface IMenuAndCart {

}
/**
 * - Menu
 *      - shows all foods places in different catagory
 *      - at least 3 kinds of catagory and 3 kinds of food in each catagory
 *      - user can add food to cart
 * - Cart
 *      - shows all foods in cart
 *      - user can change amount of food or remove it
 *      - submit the order
 * @param props IMenuAndCart
 * @returns MenuAndCart Component
 */
export const MenuAndCart: React.FC<IMenuAndCart> = (props) => {

    const text = {
        menu: "- Menu -",
        cart: "- Cart - ",
        clearCartBtn: "Clear Cart",
        submitCartBtn: "Submit",
    }

    const dispatch = useDispatch();
    const cartData = useSelector((state: RootState) => state.carts);

    return (
        <div className={'container'}>
            <div className={'menu-container'}>
                <h2>{text.menu}</h2>
                {/** 遞迴產生 Menu，支援無限層 */}
                {generateMenu(MenuData, (name: string) => { dispatch({ type: 'CART_ADD', payload: { name } }) })}
            </div>

            <div className={'cart-container'}>
                <h2>{text.cart}</h2>

                <button className={'clear-cart'} onClick={() => { dispatch({ type: 'CART_CLEAR' }) }}>{text.clearCartBtn}</button>

                {generateCart(cartData, (name) => { dispatch({ type: 'CART_MINUS', payload: { name } }) })}

                <button className={'submit-cart'} disabled={!(Object.keys(cartData)).length} onClick={() => { dispatch({ type: 'CART_SUBMIT', payload: { order: { ...cartData } } }) }}>{text.submitCartBtn}</button>
            </div>
        </div >
    )
}


/**
 * 產生Menu樹
 * @param menuData menu 資料
 * @param typeOfComponent 適用的html tag
 * @returns Menu樹
 */
const generateMenu = (menuData: IMenuData | IMenuData[], updateStore: any, typeOfComponent?: keyof JSX.IntrinsicElements): React.ReactElement[] => {

    let vdom: React.ReactElement[] = [];

    if (menuData instanceof Array) {
        let list: React.ReactElement[][] = menuData.map(item => generateMenu(item, updateStore, item.orderAble ? 'li' : 'ol'))
        vdom = [...list.flat()];
    } else {
        const Tag = typeOfComponent as keyof JSX.IntrinsicElements;

        vdom.push(
            <React.Fragment key={menuData.id}>
                {menuData.orderAble || menuData.name}
                <Tag className={'menu-item'}>
                    {menuData.orderAble && (
                        <>
                            {menuData.name}
                            <button className={'add-cart'} onClick={() => { updateStore(menuData.name); }}>add</button>
                        </>
                    )}

                    {generateMenu(menuData.elements, updateStore, menuData.orderAble ? 'li' : 'ol')}
                </Tag >
            </React.Fragment>
        );
    }

    return vdom;
}

/**
 * 產生cart列表
 * @param cartData cart 資料
 * @param minus cart dispatch of minus
 * @returns cart列表
 */
const generateCart = (cartData: IinitialCarts = {}, minus: (name: string) => void): React.ReactElement[] => {
    const text = {
        minus: "minus"
    }
    const list: React.ReactElement[] = [];

    for (const [key, value] of Object.entries(cartData)) {
        list.push(
            <div key={key}>{key} * {value}
                <button className={'minus-cart'} onClick={() => { minus(key); }}>{text.minus}</button>
            </div>)
    }

    return list;
}