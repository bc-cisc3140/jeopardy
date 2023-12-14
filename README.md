# jeopardy

this is a class project of building the jeopardy game from scratch

### 1. Getting started

This project is maintained using Git version control system. To obtain a copy of files, or contribute to the project, use git commands. [video demonstration](https://youtu.be/a88o1bEFeCU) 

Once you have a copy, go into the `src` folder and install node dependencies to operate the server.

Because we are using GitHub to store this project, please note that you will need to fork a copy of this project to your account before you make pull requests. When you're ready to contribute your changes, create a pull request. 

##### Starting localhost server

**Start localhost** 

From the `src` folder, run `node server.js`

Then in the browser go to http://localhost:8000/app to view the gameboard

### 2. Project goals

The documentation outlining goals for the project can be found in the `design_docs` folder.


### 3. What was done

The frontend is designed to look the jeopardy game with 5 topics and 5 value categories for each topic. Each of them is a button that when clicked shows the question and a button to click when the user wants to show the answer. Only after show answer is clicked can the user exit the question screen.

The backend contains the database where there is a 1-1 correspondence between questions to the number of options the user has on the frontend. The database is query's through the node js framework.

### 4. What was left out

- The list of topics is limited and does not cover all the class work.
- Within each category there is no variation having each topics category have a list of 5+ questions from which 1 is randomly selected would be more comprehensive.
- The query's return the text with quotations escaped, however, this should not be displayed to the user.
- A way to keep score.