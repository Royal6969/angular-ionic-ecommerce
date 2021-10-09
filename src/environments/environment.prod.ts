const url1 = 'https://angular-ecommerce.cloudns.ph/wp-json/wc/v3';
const authUrl1 = 'https://angular-ecommerce.cloudns.ph/wp-json/jwt-auth/v1/token'; // this is teh endpoint for the authentification
const tokenVerifyUrl1 = 'https://angular-ecommerce.cloudns.ph/wp-json/jwt-auth/v1/token/validate';

export const environment = {
  production: true,
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
