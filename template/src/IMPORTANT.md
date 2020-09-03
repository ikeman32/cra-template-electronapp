# Copy and paste this into the command line of the root folder of you project

### first 
npm i or yarn install

### next
npm i concurrently electron electron-builder wait-on -D

                    or

yarn add concurrently electron electron-builder wait-on -D

## Why the additional devDependencies?
Presently the create-react-app template do not allow configuration of devDependencies so it is neccessary to add the needed devDependencies to the project.


# Requirements

[Yarn Install instructions](https://classic.yarnpkg.com/en/docs/install/)

## Deploy to Desktop
1. Run the build process
```
npm run build
```
2. Go into your project folder using your file explorer. Navigate to the `dist` folder and open it. Then double-click `<your-project-name>` Setup 0.1.0. Your app should open and there should now be an icon on your desktop for this app.

## Credits
This react template is based upon the following [repository](https://github.com/willjw3/react-electron)