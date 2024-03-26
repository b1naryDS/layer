import { ReactNode } from 'react';

interface HeaderProps {
  children: ReactNode;
}

export default function Header(props: HeaderProps) {
  const { children } = props;
  return <div className="flex justify-center align-baseline">{children}</div>;
}
