import React from 'react';
import { ContextValues } from './Group.types';

const Context = React.createContext<ContextValues | null>(null);

export default Context;
