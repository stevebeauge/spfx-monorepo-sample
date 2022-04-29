import * as React from 'react';
import strings from 'SpfxComponentsStrings';
import { Text } from '@microsoft/sp-core-library';
import { BaseComponentContext } from '@microsoft/sp-component-base';
import styles from './LocalizeTest.module.scss';

const LocalizeTest = (props: { context: BaseComponentContext }) => {
    const welcomeMessage = Text.format(strings.GreetingsFormat, props.context.pageContext.user.displayName);
    return (
        <h1 className={styles.message}>{welcomeMessage}</h1>
    );
};

export default LocalizeTest;
