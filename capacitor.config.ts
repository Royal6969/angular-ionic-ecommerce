import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.angular.ecommerce',
  appName: 'angular-ecommerce',
  bundledWebRuntime: false,
  npmClient: 'npm', // we added this option to nodeModules/@capacitor/cli/dist/declarations.d.ts to try to fix solve capacitor error
  webDir: 'www',
};

export default config;
