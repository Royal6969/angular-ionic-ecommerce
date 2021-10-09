Before create the project you need to install these tools:

- node.js
- Postman Agent
- Xampp
- MySQL community
- Visual Studio Code
- Android Studio

Note: Before create the project, I also create a wordpress account,
and configure the apache server, with a free SSL certificate from ZeroSSL website, implemented in a free DNS zone from CloudDNS website ...

---------------------------------------------------------------------------

Before create the project you need to (install) run these commands:

- npm install -g @angular/cli
- npm install -g @ionic/cli
- npm install @capacitor/core
- npm install @capacitor/cli --save-dev
- npx cap init

To create the project you need to run this command:

- ionic start YourProjectName tabs --type=angular --capacitor

---------------------------------------------------------------------------

Note: When I run the command "ionic capacitor add android",
I experimented an error that says "error: unknown option '--npm-client'".

[ERROR] An error occurred while running subproces capacitor.

> capacitor.cmd init angular-ecommerce io.ionic.starter --npm-client npm ... exited with exit code 1.

I was looking for how to fix this error but most I found was more about that ... https://forum.ionicframework.com/t/ionic-capacitor-v3-unknown-option-npm-client/210496

I have the latest @ionic/cli version, and to fix the error I added for myself the @capacitor/android with the command: "npm install @capacitor/android".
Also, I modified capacitor.config.ts file to incorporate the npmClient option, and I created the capacitor.config.json for try to solve the error...

---------------------------------------------------------------------------

- To generate the product service, run the command "ionic generate" and it will display you some options to create it.

- To generste the productModel inrerface, run the command "ionic generate" and it will display you some options to create it.

---------------------------------------------------------------------------

Useful URLs:

- Angular DOC
https://angular.io/guide/setup-local

- XAMPP Apache + MariaDB + PHP + Perl
https://www.apachefriends.org/es/index.html

- MySQL Community
https://dev.mysql.com/downloads/mysql/

- Ionic-Angular/cli DOC
https://ionicframework.com/docs/cli

- Android Studio 
https://developer.android.com/studio

- Capacitor DOC
https://capacitorjs.com/docs/getting-started

- WordPress
https://wordpress.com/es/

- Cloud DNS
https://www.cloudns.net/index/show/login/

- Zero SSL
https://www.sslforfree.com/

- Ionic UI Components
https://ionicframework.com/docs/components

- WooCommerce REST API DOC
https://woocommerce.github.io/woocommerce-rest-api-docs/#product-properties

---------------------------------------------------------------------------

