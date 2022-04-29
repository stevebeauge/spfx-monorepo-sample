import React from 'react';
import { Double, Half } from '@monorepo/shared-utils';
import { Label, Stack, TextField } from 'office-ui-fabric-react';

const Calculator = () => {
    const [doubleValue, setDoubleValue] = React.useState(0);
    const [halfValue, setHalfValue] = React.useState(0);

    const onChangeDouble = (newValue: string) => {
        const value = parseFloat(newValue);
        if (!isNaN(value)) {
            setDoubleValue(Double(value));
        } else {
            setDoubleValue(NaN);
        }
    }

    const onChangeHalf = (newValue: string) => {
        const value = parseFloat(newValue);
        if (!isNaN(value)) {
            setHalfValue(Half(value));
        } else {
            setHalfValue(NaN);
        }
    };
    
    return (
        <Stack>
            <Stack>
                <TextField onChange={(evt, newVal) => onChangeDouble(newVal || '')} placeholder="Enter a number!" />
                <Label>{doubleValue}</Label>
            </Stack>
            <Stack>
                <TextField onChange={(evt, newVal) => onChangeHalf(newVal || '')} placeholder="Enter a number!" />
                <Label>{halfValue}</Label>
            </Stack>
        </Stack>);
}
export { Calculator };