import * as React from 'react';

import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Label, Stack, TextField } from 'office-ui-fabric-react';

import { Double } from '@monorepo/shared-utils/src';

const HelloWorld = () => {
   const [ doubleValue, setDoubleValue ] = React.useState(null as Number);

    const onChange = (newValue: string) => {
      const value = parseFloat(newValue);
      if (!isNaN(value)) {
        setDoubleValue(Double(value));
      } else {
        setDoubleValue(NaN);
      }
    }

    return (
      <Stack>
        <TextField onChange={(evt, newVal) => onChange(newVal)} type="n" />
        <Label>{doubleValue }</Label>
      </Stack>
    );
}
export default HelloWorld;