# Materials

![npm (scoped)](https://img.shields.io/npm/v/@boruei.chen/materials)
[![Release](https://github.com/boruei-chen/materials/actions/workflows/release.yml/badge.svg)](https://github.com/boruei-chen/materials/actions/workflows/release.yml)
[![Coverage Status](https://coveralls.io/repos/github/boruei-chen/materials/badge.svg?branch=main)](https://coveralls.io/github/boruei-chen/materials?branch=main)
![npm](https://img.shields.io/npm/dm/@boruei.chen/materials)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/boruei-chen/materials)
![GitHub](https://img.shields.io/github/license/boruei-chen/materials?color=important)

BRC Materials React component library.

To see examples and documentation go to https://boruei-chen.github.io/materials/.

## Installation
BRC Materials is available as an [npm package](https://www.npmjs.com/package/@boruei.chen/materials).

**npm**
```bash
npm install @boruei.chen/materials
```

**yarn**
```bash
yarn add @boruei.chen/materials
```

## Usage
- [Form](#form)
  - [Textbox](#textbox)
  - [Textarea](#textarea)
  - [Password](#password)
  - [Select](#select)
  - [Switch](#switch)
  - [Checkbox](#checkbox)
  - [Radio](#radio)

### Form

#### Textbox
```tsx
import React from 'react';
import { Textbox } from '@boruei.chen/materials';

const App: React.FC = () => <Textbox placeholder="Placeholder text" />;

export default App;
```

#### Textarea
```tsx
import React from 'react';
import { Textarea } from '@boruei.chen/materials';

const App: React.FC = () => <Textarea placeholder="Placeholder text" />;

export default App;
```

#### Password
```tsx
import React from 'react';
import { Password } from '@boruei.chen/materials';

const App: React.FC = () => <Password toggleMask placeholder="Placeholder text" />;

export default App;
```

#### Select
```tsx
import React from 'react';
import { Select } from '@boruei.chen/materials';

const App: React.FC = () => (
  <Select placeholder="Placeholder text">
    <Select.Option value="0">Option 1</Select.Option>
    <Select.Option value="1">Option 2</Select.Option>
    <Select.Option value="2">Option 3</Select.Option>
  </Select>
);

export default App;
```

#### Switch
```tsx
import React from 'react';
import { Switch } from '@boruei.chen/materials';

const App: React.FC = () => <Switch>Label text</Switch>;

export default App;
```

#### Checkbox
```tsx
import React from 'react';
import { Checkbox } from '@boruei.chen/materials';

const App: React.FC = () => <Checkbox>Label text</Checkbox>;

export default App;
```

##### Checkbox.Group
```tsx
import React from 'react';
import { Checkbox } from '@boruei.chen/materials';

const App: React.FC = () => (
  <Checkbox.Group name="field">
    <Checkbox value="0">Option 1</Checkbox>
    <Checkbox value="1">Option 2</Checkbox>
    <Checkbox value="2">Option 3</Checkbox>
  </Checkbox.Group>
);

export default App;
```

#### Radio
```tsx
import React from 'react';
import { Radio } from '@boruei.chen/materials';

const App: React.FC = () => <Radio value="0">Label text</Radio>;

export default App;
```

##### Radio.Group
```tsx
import React from 'react';
import { Radio } from '@boruei.chen/materials';

const App: React.FC = () => (
  <Radio.Group name="field">
    <Radio value="0">Option 1</Radio>
    <Radio value="1">Option 2</Radio>
    <Radio value="2">Option 3</Radio>
  </Radio.Group>
);

export default App;
```

## Technologies
[![My Skills](https://skillicons.dev/icons?i=react,typescript)](https://skillicons.dev)

## License
This project is licensed under the terms of the [MIT license](/LICENSE).
