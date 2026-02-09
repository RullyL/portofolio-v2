import React from 'react';
import { Card as AntCard } from 'antd';

type Props = React.ComponentProps<typeof AntCard>;

export default function Card({ children, ...props }: Props) {
  return <AntCard {...props}>{children}</AntCard>;
}
