create table user (
    id INTEGER, 
    name VARCHAR, 
    date DATE
    );
create table tweets (
    userid INTEGER, 
    twtid INTEGER, 
    tweet TEXT
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
(1, 1, "tweet 11111111"), 
(1, 2, "tweet 2222222222222"), 
(1, 3, "tweet 333333333333"), 
(2, 4, "1111111111111222222222"), 
(3, 5, "helooooooooooooooooooooo"), 
(3, 6, "hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii"), 
(4, 7, "what's going on?"), 
(4, 8, "i don't know what to say."), 
(5, 9, "nothing");

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
order by twtid desc 
limit 10;


-- Use a join to get a user's info along with their tweets.
select * 
from user as u 
join tweets as t 
on u.id = t.userid;


-- Find which user has the most followers.
select u.name, max(c.count)
from (
    select userid, count(follower) as count
    from follow as f 
    group by userid
    ) as c
join user as u
on u.id = c.userid;