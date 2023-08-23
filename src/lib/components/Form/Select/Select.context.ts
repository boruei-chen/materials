import React from 'react';
import { ContextValues } from './Select.types';

const Context = React.createContext<ContextValues | null>(null);

export default Context;
