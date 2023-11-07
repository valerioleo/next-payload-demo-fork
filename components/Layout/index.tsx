'use client';

import { useToggle } from '@uidotdev/usehooks';
import { GridProvider } from '@faceless-ui/css-grid';
import { ModalContainer, ModalProvider } from '@faceless-ui/modal';
import React from 'react';
import { Header } from '../Header';
import { MainMenu } from '../../payload-types';
import cssVariables from '../../cssVariables';
import '../../css/app.scss';

type Props = {
  mainMenu: MainMenu
  children: React.ReactNode
}

const Layout = ({
  mainMenu,
  children,
}: Props): React.ReactElement => {
  const [value, toggleValue] = useToggle(false)


  return (
    <React.Fragment>
      <button onClick={() => toggleValue()}>Toggle</button>
      {String(value)}
      <GridProvider
        breakpoints={{
          s: cssVariables.breakpoints.s,
          m: cssVariables.breakpoints.m,
          l: cssVariables.breakpoints.l,
        }}
        colGap={{
          s: '24px',
          m: '48px',
          l: '48px',
          xl: '72px',
        }}
        cols={{
          s: 4,
          m: 4,
          l: 12,
          xl: 12,
        }}
      >
        <ModalProvider transTime={0} zIndex="var(--modal-z-index)">
          <Header mainMenu={mainMenu} />
          {children}
          <ModalContainer />
        </ModalProvider>
      </GridProvider>
    </React.Fragment>
  )
}

export default Layout
