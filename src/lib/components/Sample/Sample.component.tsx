import React from 'react';
import { Props } from './Sample.types';
import './Sample.styles.scss';

const Sample = React.forwardRef<HTMLDivElement, Props>((props, ref) => (
  <div className="brcm-sample" {...props} ref={ref}>Sample</div>
));

Sample.displayName = 'Sample';

export default Sample;
