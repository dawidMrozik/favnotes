import React from 'react';
import { select, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(49, 100%, 58%)',
      Secondary: 'hsl(196, 83%, 75%)',
      Tertiary: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>Hello frosty</Button>;
  })
  .add('secondary', () => <Button secondary>Hello frosty</Button>);
