import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import CustomSpinner from "../../../../src/components/Spinner/CustomSpinner.js";

describe('CustomToastComponent', () => {
    it('displays a custom toast message when the button is pressed', async () => {
        const { getByText, queryByText } = render(<CustomSpinner />);

        const button = getByText('Show Toast');
        fireEvent.press(button);

        await waitFor(() => {
            expect(getByText('Custom Title')).toBeTruthy();
            expect(getByText('This is a custom toast message.')).toBeTruthy();
        });

        // Optionally, wait for the toast to disappear after the duration
        await waitFor(() => {
            expect(queryByText('Custom Title')).toBeNull();
        }, { timeout: 6000 }); // Slightly more than the toast duration to account for any delays
    });
});
