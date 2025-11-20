1. And how do you handle database migration in a live system?
ANS:- 🔹 Database migration is the process of making changes to the database schema or moving data without losing existing information.

example:-
 a. deleting ,adding or renaming the table or column.
 b. chnaging datatype
 c. tranfering data from one datbase tp another.
 d. creating or updating indexes.


⚙️ Two Main Types of Database Migration

1.Schema Migration:
Changing the structure — like adding, renaming, or removing columns/tables.

2.Data Migration:
Moving data from one place to another — for example:
From old columns to new ones,
From one database to another (like from MySQL → PostgreSQL).


handling database migration in live simly mean carefull planning to avoid 
a.downtime(period when a database system is unavailable and inaccessible to users, which can be planned or unplanned),
b.data loss,
c.breaking existing functionality. 

2. What is Sharding?
ANS:-Sharding in MongoDB means splitting (dividing) a large collection of data into smaller, more manageable chunks and distributing them across multiple servers (called shards).

3. What is a Replica in MongoDB?

A replica in MongoDB means having copies of the same data stored on multiple MongoDB servers.
This system of maintaining copies is called a Replica Set.

👉 In simple words:

Replication = Data Backup + High Availability

It ensures that even if one server fails, the system continues to work using the copies on other servers.
