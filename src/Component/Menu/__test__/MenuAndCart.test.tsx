import * as React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import { MenuAndCart } from '..';
import { ReduxProvider } from '../../../Store/Store';

it('render MenuAndCart without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<ReduxProvider>
        <MenuAndCart />
    </ReduxProvider>, div);
});

it('match MenuAndCart Snapshot', () => {

    const tree = renderer.create(
        <ReduxProvider>
            <MenuAndCart />
        </ReduxProvider >
    ).toJSON();

    expect(tree).toMatchSnapshot();

});
