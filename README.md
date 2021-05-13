# mm-challenge-juanjo-garcia-question5
Codeceptjs repository


In order to make a run of the test you just need to run the next command from root of the project:

- npm run codeceptjs

It is configured to run in headless mode, if you want to run it over a visible browser you will need to modify 'show' property to 'true' at 'codecept.conf.js' file.


Also has Allure plugin as a reporter system, in order to be able to use it locally you will need to:

- Install Allure plugin -> npm install -g allure-commandline --save-dev

Once you have the plugin installed, after every run you will be able to see the report over it running:

- allure serve output
