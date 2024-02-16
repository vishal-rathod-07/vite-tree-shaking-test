/* eslint-disable react/display-name */
import { forwardRef } from 'react';

const ComponentWithForwardRef = forwardRef((ref) => {
  return <span ref={ref}>I am ComponentWithForwardRef</span>;
});

export default ComponentWithForwardRef;
