import * as React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { History } from '..';
import { ReduxProvider } from '../../../Store/Store';

it('render History without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ReduxProvider>
        <History close={() => { }} />
    </ReduxProvider>, div);
});

it('match History Snapshot', () => {

    const tree = renderer.create(
        <ReduxProvider>
            <History close={() => { }} />
        </ReduxProvider >
    ).toJSON();

    expect(tree).toMatchSnapshot();

});
