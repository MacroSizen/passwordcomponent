# Password Component Assessment

## Problem Description
We have many different React frontend applications, all of which currently use their own password validation for users creating a new password. This is less than ideal, since whenever there’s an issue we sometimes fix it in one frontend, and not another. Recently, the security consultants have told us we need to add another constraint to all our applications on passwords, so now is the time to refactor these applications to use a single, shared library.
However, not all our applications have the same password requirements - some of our applications require longer passwords in order to comply with certain regulations, some require special characters and others don’t, etc.
The design team has put together a design for how they’d like this component to look like that we’d add to our component library, with interactivity shown in the gif below.


## Steps to follow in order to run the project

Installation of the dependencies:

### `npm install`

Run the application:
### `npm start`

Run tests:

### `npm test`


## About

- In this project I've decided to go for a simple but efficient solution to the designed problem.

- I've included some tests in order to check the correct rendering of some of the components.

- This component could be used in any view and can take any desired validations as requested.

- In this example, the App.js file, makes use of all 4 validations, feel free to modify that with any validation that you want.

- More tests could be added if needed, I've made use of jest and Enzyme for the unit tests.

## Contact

- Any doubts or questions you wanna ask me, feel free to reach me out:
    - This is my contact info:
    Email: tomasgiraudo97@gmail.com

### Thank you!