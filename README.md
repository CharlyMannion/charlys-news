# Northcoders News

## Description

Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of [Reddit](https://www.reddit.com/).

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.


## User Stories

**As a user, I should be able to...**

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

**Error-handling: As a user, I should...**

10. see a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
11. see a 400 error if I go on a invalid article ID.
12. not be allowed to post a comment if I have not filled in all of the form boxes.

**As a hiring partner, I should be able to...**

13. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
14. follow the readme instructions to easily run the project locally.
15. find a link to the hosted version of the project in the readme. (use a placeholder if not yet hosted!)
16. find a link to the back-end repository of the project in the readme.
17. find a link to the hosted version of the back-end project in the readme.

## Diagrams

### Views
![Screenshot 2020-10-19 at 13 35 01](https://user-images.githubusercontent.com/28218869/96453497-77969280-1212-11eb-98cb-1ea2f05ea580.png)



### Component Diagram
![Screenshot 2020-10-21 at 16 34 44](https://user-images.githubusercontent.com/28218869/96742962-5fae4280-13bb-11eb-8ab3-a629d0e2643d.png)
