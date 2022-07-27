import React from 'react';
import FrameworkList from './FrameworkList';
import { useAutoAnimate } from '@formkit/auto-animate/react';

export default function App() {
  const [animationParent] = useAutoAnimate();

  return (
    <section className="comparison">
      <FrameworkList />
      <FrameworkList ref={animationParent} />
    </section>
  );
}
