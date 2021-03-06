/* TypeScript file generated from ActiveLink.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const ActiveLinkBS = require('./ActiveLink.bs');

import {Router_t as Next_Router_t} from '../../src/bindings/Next.gen';

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly activeClassName: string; 
  readonly children: React.ReactNode; 
  readonly href: string; 
  readonly router?: (null | undefined | Next_Router_t)
};

export const $$default: React.ComponentType<{
  readonly activeClassName: string; 
  readonly children: React.ReactNode; 
  readonly href: string; 
  readonly router?: (null | undefined | Next_Router_t)
}> = function ActiveLink(Arg1: any) {
  const $props = {activeClassName:Arg1.activeClassName, children:Arg1.children, href:Arg1.href, router:(Arg1.router == null ? undefined : (Arg1.router == null ? undefined : Arg1.router))};
  const result = React.createElement(ActiveLinkBS.default, $props);
  return result
};

export default $$default;
