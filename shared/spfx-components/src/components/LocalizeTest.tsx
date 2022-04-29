import * as React from 'react';
import strings from 'LocalizeTestWebPartStrings';
import { Text } from '@microsoft/sp-core-library';
import { BaseComponentContext } from '@microsoft/sp-component-base';
import styles from './LocalizeTest.module.scss';

const LocalizeTest = (props: { context: BaseComponentContext }) => {
    const welcomeMessage = Text.format(strings.GreetingsFormat, props.context.pageContext.user.displayName);
    return (
        <h3 className={styles.message}>{welcomeMessage}</h3>
    );
};

export default LocalizeTest;
