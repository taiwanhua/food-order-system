import React from 'react';
import { render } from '@testing-library/react';
import { ReduxProvider } from './Store/Store';

import App from './App';

describe('App', () => {
    test('renders App component', () => {
        render(<ReduxProvider><App /></ReduxProvider>);
    });
});