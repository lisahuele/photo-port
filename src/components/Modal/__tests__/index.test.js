import React from "react";
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

const mocktoggleModal = jest.fn();
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};

afterEach(cleanup);

describe('Modal Component', () => {
    //baseline test
    it('renders', () => {
        render(<Modal onClose={mocktoggleModal} currentPhoto={currentPhoto} />)
    });

    //snapshot test
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal onClose={mocktoggleModal} currentPhoto={currentPhoto} />)

        expect(asFragment()).toMatchSnapshot();
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal onClose={mocktoggleModal} currentPhoto={currentPhoto} />)
        fireEvent.click(getByText('Close this modal'));
        expect(mocktoggleModal).toHaveBeenCalledTimes(1);
    })
})


