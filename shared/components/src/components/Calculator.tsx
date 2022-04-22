import React from 'react';
import { Double } from '@monorepo/shared-utils/src'
import { Label, Stack, TextField } from 'office-ui-fabric-react';

const Calculator = () => {
    const [doubleValue, setDoubleValue] = React.useState(0);

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
            <TextField onChange={(evt, newVal) => onChange(newVal || '')} type="n" />
            <Label>{doubleValue}</Label>
        </Stack>
    );
}
export { Calculator };