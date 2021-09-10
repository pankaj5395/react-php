import environment from './base';

const baseApi = 'http://127.0.0.1:8000/api';
const env = environment(baseApi);

const testEnv = {
  ...env,
  // override anything that gets added from base.
  isProduction: false,
  isDevelopment: true,
  isTesting: true,
};

export default testEnv;
