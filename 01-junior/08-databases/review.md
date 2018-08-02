# Review of Databases


## Takeaways
    * rDBMS does: Managing our file system in a way that is UNKNOWN to us.
    * rDMBS how does it know what we want to do to our file system: It interprets SQL commands.
    * rDBMS makes it self available: by hosting a server ready to listen for requests in SQL on a particular port on your machine (typically 5432). It also returns data in the form of a string.
    * Schema Design: How do I separate my data stored from how I use my data.

## Questions
    * Good resources for SQL
        * 1. Find online places where you can actually just practice querying, or download prebuilt databases and see if you can get what you want.
        * SQLBolt
        * CodeSchool -- SQL class
        * UDEMY -- SQL resources as well. $9.99 for discount days.
    * Good resources for designing schema.
        * Not just schema, but also organizing a DATA SYSTEM.
        * I need to look this up. 
    * PSQL ....what is it actually doing? How is it doing this?
        * All it is, is a postgres client that can SPEAK the postgres protocol.... https:// ... postgres://
        * Someone wrote this command line tool to speak this protocol
    * What do services like MongoDB do? 
        * MongoDB uses a sort-of document storage model.
        * All look up at level 1 is always o (log (n)).
        * MongoDB has a HUGE advantage in terms of single level operations but fails to be able to JOIN easily.
        let puppy = {
            name: ,
            age: ,
            ownerId: 
        }
    * How can we find the average age of a person in a people table?
        ```
            SELECT AVG(age)
            FROM users
        ```
