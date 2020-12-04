export const description = `
Tests using a destroyed buffer on a queue.

- used in {writeBuffer,
  setBindGroup, copyB2B {src,dst}, copyB2T, copyT2B,
  setIndexBuffer, {draw,dispatch}Indirect, ..?}
- x= if applicable, {in pass, in bundle}
- x= {destroyed, not destroyed (control case)}

TODO: implement. (Search for other places some of these cases may have already been tested.)
`;

import { makeTestGroup } from '../../../../../common/framework/test_group.js';
import { ValidationTest } from '../../validation_test.js';

export const g = makeTestGroup(ValidationTest);
