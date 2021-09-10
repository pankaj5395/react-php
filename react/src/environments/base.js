/*
 * Base is the default environment for production.
 * Add everything here and override value in other files if needed.
 * https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
 */
export default function baseEnv(baseApi) {
  return {
    route: {
      baseRoute: '', // Fixes issue with Github Pages
    },
    api: {
      tag: `${baseApi}/tags`,
      notes: `${baseApi}/notes`,
    },
    apiContentType : 'application/x-www-form-urlencoded',
    isProduction: true,
    isDevelopment: false,
    isTesting: false,
  };
}
