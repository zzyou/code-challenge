create table user (
    id INTEGER, 
    name VARCHAR, 
    date DATE
    );
create table tweets (
    userid INTEGER, 
    twtid INTEGER,
    tweet TEXT,
    twtdate DATE
    );
create table follow (
    userid INTEGER, 
    follower INTEGER
    );

insert into user 
values 
(1, "Alice", "2018-01-01"), 
(2, "Belle", "2017-03-09"), 
(3, "Cathy", "2016-10-22"), 
(4, "Doris", "2000-12-31"), 
(5, "Emily", "1990-06-01");

insert into tweets 
values 
(1, 1, "OK, start my tweet!", "2018-01-01"), 
(1, 2, "Day 2, what should I write?", "2018-01-02"), 
(1, 3, "Emmmm, interesting!", "2018-01-03"), 
(2, 4, "Someone asked me to have a tweet account.", "2018-01-04"), 
(3, 5, "Hello, I am Cathy!", "2018-01-05"), 
(3, 6, "Hello World!", "2018-01-06"), 
(4, 7, "What's going on?", "2018-01-07"), 
(4, 8, "I don't know what to say.", "2018-01-08"), 
(5, 9, "Nothing.", "2018-01-09"),
(1, 10, "Back to work!", "2018-01-10"),
(2, 11, "Maybe I should delete this account.", "2018-01-11"),
(3, 12, "Hello again!", "2018-01-12"),
(4, 13, "OK, say something. I am Doris.", "2018-01-13"),
(5, 14, "Still nothing.", "2018-01-14"),
(1, 15, "How are you doing?", "2018-01-15");

insert into follow 
values 
(1, 2), 
(1, 3), 
(1, 4), 
(1, 5), 
(2, 1), 
(2, 3), 
(2, 4), 
(3, 1), 
(3, 2), 
(3, 4), 
(3, 5), 
(4, 1), 
(4, 3), 
(5, 1);


-- All the tweets by a given user.
select tweet 
from tweets 
where userid = 4;


-- The 10 most recent tweets.
select tweet 
from tweets 
order by twtdate desc 
limit 10;


-- Use a join to get a user's info along with their tweets.
select u.id, u.name, t.tweet, t.twtdate 
from user as u 
join tweets as t 
on u.id = t.userid;


-- Find which user has the most followers.

-- This 1st method with "max" only gets "Alice 4", but no "Cathy 4".
select u.name, max(c.count)
from (
    select userid, count(follower) as count
    from follow as f 
    group by userid
    ) as c
join user as u
on u.id = c.userid;


-- The 2nd method with "limit and order by" only gets "Cathy 4 | Belle 3", but no "Alice 4".
select u.name, c.count
from (
    select userid, count(follower) as count
    from follow as f 
    group by userid
    ) as c
join user as u
on u.id = c.userid
group by c.count
order by c.count desc
limit 2;


-- The 3rd method with "having" gets "Alice 4 | Cathy 4". But if I change "fc = 4" to "fc = max(fc)", it won't work.
select u.name, count(f.follower) as fc
from user as u
join follow as f
on u.id = f.userid
group by f.userid
having fc = 4;
