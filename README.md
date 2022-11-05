Follow these steps to build your PostgreSQL application:

Create a github repo named dealers_choice_pg.
Set up a file structure for your database and express application. A reasonable file structure could have the following files:
server.js
db.js
Create a relational database schema for your chosen subject.
Set up your data model using the node-postgres (pg) module.
Seed your database with data for your chosen subject.
Create a GET / route that displays a list of your items using the data in your database.
Create a GET /<your choice>/:id route, where <your choice> is the name of your subject (for example, “books”) and :id is the id of an item in your database. This route should display the properties of each item.
From the item list page, a user should be able to click on an item to navigate to the item detail page.
From the item detail page, a user should be able to navigate back to the list by clicking on a link or button.
You can refer to the following simple wireframe when building out your application:

A wireframe for the express application. The first page is hosted at the "GET /" route. The wireframe shows an application labeled "Your App" containing a list of item names: "item 1", "item 2", "item 3". Each item is on a new line. An arrow points from "item 1" on the first page to the wireframe of the second page to indicate that selecting "item 1" will navigate the user to the second page. The second page is hosted at the "GET /<your choice>/:id" route. The wireframe shows an application labeled "Your App" containing the selected item name, "item 1", followed by "item 1 details" to indicate that additional properties of the selected item should be listed on the page.

Once you have completed the steps detailed in this section, feel free to add additional features if you have time.
