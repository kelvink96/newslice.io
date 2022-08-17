import React, { ReactNode } from 'react';
import AppNav from '../components/AppNav';
import { NavLinks } from '../data/navLinks';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <>
      <AppNav user={NavLinks.user} tabs={NavLinks.tabs} />
      {children}
    </>
  );
};

export default Wrapper;
