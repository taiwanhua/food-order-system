import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useWindowSize } from '../../Hooks/useWindowSize';
import { Iinitialhistory, TOrder } from '../../Store/Reducers';
import { RootState } from '../../Store/Store';
import './History.css';

interface IHistory {
    /** 關閉 popup 函數 */
    close: () => void
}

/**
 * - must in different page or popup window
 * - shows all order details
 * - user can clear history
 * @param props IHistory
 * @returns History Component
 */
export const History: React.FC<IHistory> = (props) => {

    const { close } = props;
    const [, height] = useWindowSize();
    const historyData = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const text = {
        closeHistoryBtn: "close",
        clearHistoryBtn: "clear",
    }

    return (
        <>
            <div data-testid="history-bg" className={"history-bg"} style={{ height: `${height}px` }} />
            <div className={"history-content"}>
                {generateHistory(historyData)}
                <button data-testid="history-close" className={"history-close"} onClick={() => { close(); }}>{text.closeHistoryBtn}</button>
                <button data-testid="history-clear" className={"history-clear"} onClick={() => { dispatch({ type: 'HISTORY_CLEAR' }) }}>{text.clearHistoryBtn}</button>
            </div>
        </>
    )
}

/**
 * 轉換資料為列表
 * @param historyData 歷史訂單資料
 * @returns 資料列表
 */
const generateHistory = (historyData: Iinitialhistory): React.ReactElement[] => {

    const list: React.ReactElement[] = [];

    const getOrderContent = (order: TOrder) => {
        const contentList: React.ReactElement[] = [];
        for (const [key, value] of Object.entries(order)) {
            contentList.push(
                <div key={key}>
                    {` -- ${key}  *${value}`}
                </div>
            )
        }
        return contentList;
    }

    for (const [key, value] of Object.entries(historyData.order)) {
        list.push(
            <div key={key} className={"order-container"}>
                <div>
                    {key}
                </div>
                <div>
                    {getOrderContent(value)}
                </div>
            </div>
        )
    }

    return (list.length) ? list : [<p key={"1021-96s4-2111-ss4d-No-history"}>No history ! please place an order first！</p>];
}