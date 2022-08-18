import React, { ReactNode } from 'react';
import AppNav from '../components/AppNav';
import { NavLinks } from '../data/navLinks';
import { CategoriesData } from '../data/categoriesData';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <>
      <AppNav user={NavLinks.user} tabs={CategoriesData.tabs} />
      {children}
    </>
  );
};

export default Wrapper;
