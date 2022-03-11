# Welcome to EnSee-NewZ app!

## Overview

This app was created as the front end interface for my API endpoints (https://kostas-nc-news.herokuapp.com/) and can be found at:

https://ensee-newz.netlify.app/

## To run this app, use the command: `npm start`

## Instructions

### User Logins

The app has a pre-logged-in account (jessjelly) but you can select any of the following in order to be able and utilise the funtionalities of it.

The available usernames are:

- tickle112
- grumpy19
- happyamy2016
- cooljmessy
- weegembump
- jessjelly

### Functionalities of the app

The available functionalities are:

- View a list of all articles.
- View a filtered list of articles based upon a selected topic.
- View an individual detailed article.
- View an individual article's comments.
- Sort the list of articles by (ascending and/or descending order):
  - Date
  - Title
  - User
  - Votes
  - Comments
- Log into a user account.
- Log out of a user account.
- Delete only logged-in user's comment(s).
- Post a new comment to an article.
- Vote on an article.
- Remove only logged-in user's vote from an article.
- Vote on a comment.
- Remove only logged-in user's vote from a comment.
- See appropriate feedback when:
  - Loading/Waiting for page contents.
  - Instant update on comment post.
  - Instant update on comment deletion.
  - Instant update on vote change.
- See an appropriate error when:
  - Trying to access an invalid route (e.g. ./northcoders).
  - Trying to access an invalid article page (e.g. ./articles/northcoders)
  - Trying to access an non-existent article page (e.g. ./articles/344)
  - Invalid username on login.
  - Incomplete form submission in comments.