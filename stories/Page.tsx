import React from 'react';

import { Header } from './Header';
import './page.css';

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const easings = [
  'ease-in-back',
  'ease-in-circ',
  'ease-in-cubic',
  'ease-in-expo',
  'ease-in-out-back',
  'ease-in-out-circ',
  'ease-in-out-cubic',
  'ease-in-out-expo',
  'ease-in-out-quad',
  'ease-in-out-quart',
  'ease-in-out-quint',
  'ease-in-out-sine',
  'ease-in-quad',
  'ease-in-quart',
  'ease-in-quint',
  'ease-in-sine',
  'ease-out-back',
  'ease-out-circ',
  'ease-out-cubic',
  'ease-out-expo',
  'ease-out-quad',
  'ease-out-quart',
  'ease-out-quint',
  'ease-out-sine',
];

interface EasingButtonProp {
  easing: string;
  children: React.ReactChild;
}

function EasingButton({ easing, children }: EasingButtonProp) {
  return (
    <button className={`transition ${easing} duration-500`}>{children}</button>
  );
}

function EasingButtonList() {
  return (
    <>
      {easings.map(easing => (
        <EasingButton easing={easing} key={easing}>
          {easing}
        </EasingButton>
      ))}
    </>
  );
}

export const Page: React.FC<PageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <article>
    <Header
      user={user}
      onLogin={onLogin}
      onLogout={onLogout}
      onCreateAccount={onCreateAccount}
    />

    <section>
      <h2>Easings Demo</h2>
      <EasingButtonList />
    </section>
  </article>
);
