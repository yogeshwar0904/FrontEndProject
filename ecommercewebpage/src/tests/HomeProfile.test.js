// import * as React from 'react';

import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

import HomeProfile from '../components/HomeProfile';

 const homeProfile = 'Home-Profile';
test('Rendering the HomeProfile  text', () => {
   render(
     <HomeProfile/>
   );
   expect(screen.getByText('best fashion collection of all time')).toBeInTheDocument();
 });

 test('Rendering the HomeProfile Component', () => {
    render(<HomeProfile/>);
    expect(screen.getByTestId(homeProfile)).toBeInTheDocument();
 })

