declare module 'react-jdenticon' {
  import { FC } from 'react';
  export interface JdenticonProps {
    value: string;
    size?: number | string;
  }
  const Jdenticon: FC<JdenticonProps>;
  export default Jdenticon;
} 