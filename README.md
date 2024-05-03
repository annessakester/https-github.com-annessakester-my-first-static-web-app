# How to run the project

## Install dependencies
1. Open Visual Studio Code
2. Open the project directory
3. Open the terminal on Visual Studio Code
4. Run `npm install`, then make sure to run step 2.
5. Run `npm run install-client`, to install client dependencies.

## Run the project
1. Run `npm run dev`, when testing the project locally.

## Deploying the project to Azure

1. Make sure you create an account with Azure, [Follow Azure Here](https://azure.microsoft.com/en-us/)
2. Open the extension panel on Visual Studio Code and search for "Azure App Service", it'll be the only one available with that name. By now it has about 1.8M installs, and a rating of 3.5 stars.
3. Once installed it'll appear on your extensions panel. Click on the Azure extension icon.
4. It'll ask you to sign in to Azure, Proceed in doing so.
5. In order to deploy the site, click on the blue, upwards facing arrow with a line on the top icon.
6. Choose the folder you want to deploy and click enter. `Remember that the folder to deploy is the project folder`.
7. A window with options to create a new web app will appear at the top, select `Create new Web App...`.
8. An input field will appear, `enter the name of the project`, this will be the project domain. Make sure that the name does not contain spaces. or enter it like this: `social-media-site`, then click enter.
9. Select a resource group, use the default `NodeAzure`.
10. Select an OS, i recommend you select `Windows` as your preferred OS.
11. Create an App Service Plan, click on it and enter the name on step 8. Select the pricing plan as `F1 Free`. Then choose the option `Skip For Now`.
12. Choose the location resource near you.
13. After all the prompts VS code shows the azure resources that are being created for your app in its notification pop-up. It's going to take some time.
14. Click on `Yes`, on the `Always deploy the workspace "#####", to "###################"?` pop-up.
15. since you selected "Windows" as your preferred OS, theres  a bit of configuration to make sure that your web-app is deployed correctly.
16. Click on your Azure Subscription and select your web-app and expand it.
17. Right click on the `Application Settings` and select `Add New Settings`. In the prompt write `WEBSITE_NODE_DEFAULT_VERSION` and then press Enter. On the second prompt enter `20.11.0` or your current node version.
18. Open the `.env` file on the project root.
19. Right click on the `Application Settings` and select `Add New Settings`. In the prompt write `MONGO_URL` and then press Enter. On the second prompt enter `mongo databasse url`.
20. Right click on the `Application Settings` and select `Add New Settings`. In the prompt write `JWT_SECRET` and then press Enter. On the second prompt enter `e@ac-9lhesha-shard-00-00.g1prveh.mongodb.net:27017,ac-9lhesha-shard` or any string that can be used as encryption string.
1. Right click on the `Application Settings` and select `Refresh`.
22. Right click on your web-app and select `Restart`.
23. Right click on your web-app and select `Browse Website`. Your web-app will be opened on your browser.

