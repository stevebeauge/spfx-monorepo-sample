import * as React from 'react';

import { Calculator } from '@monorepo/shared-components';
import LocalizeTest from '@monorepo/spfx-components/lib/components/LocalizeTest';
import { BaseComponentContext } from '@microsoft/sp-component-base';

const HelloWorld = (props: { context: BaseComponentContext }) => {
  return (<>
    <Calculator />
    <hr />
    <LocalizeTest context={props.context}/>
  </>
  )
}
export default HelloWorld;