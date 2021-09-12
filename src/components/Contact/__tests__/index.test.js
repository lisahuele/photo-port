import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm Component', () => {
    //baseline test 
    it('renders', () => {
        render(<ContactForm/>);
    });
});

describe('h1 text is visible', () => {
    it('visible', () => {
        const { getByTestId } = render(<ContactForm/>);
        expect(getByTestId('contact-me')).toHaveTextContent('Contact me');
    })
})