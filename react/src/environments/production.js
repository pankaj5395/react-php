import environment from './base';

/*
 * base.ts is the default environment for production.
 * You shouldn't have override anything.
 */

const baseApi = 'http://127.0.0.1:8000/api';
const env = environment(baseApi);

const productionEnv = {
  ...env,
  // override anything that gets added from base.
};

export default productionEnv;
