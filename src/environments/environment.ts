// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const url1 = 'https://angular-ecommerce.cloudns.ph/wp-json/wc/v3';
const authUrl1 = 'https://angular-ecommerce.cloudns.ph/wp-json/jwt-auth/v1/token'; // this is teh endpoint for the authentification
const tokenVerifyUrl1 = 'https://angular-ecommerce.cloudns.ph/wp-json/jwt-auth/v1/token/validate';

export const environment = {
  production: false,
  backendApiUrl: url1,
  authUrl: authUrl1,
  tokenVerifyUrl: tokenVerifyUrl1,
  readOnlyKeys: {
    consumerKey: 'ck_76f749d7cbae5700eb5c94a9df4d9a81c644fcf6',
    consumerSecret: 'cs_f810e5b1ce227bc184ab4c42ad64354f5efed271'
  },
  writableKeys: {
    consumerKey: 'ck_1d3c4cccef5d239e922a41d245f4939ad7e7131d',
    consumerSecret: 'cs_c70613e384dffc16bdabc90213143a4ee1c69a47'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
