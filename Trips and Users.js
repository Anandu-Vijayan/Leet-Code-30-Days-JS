// 262. Trips and Users

// Hard Topics

// Companies

// Pandas Schema

// SQL Schema >

// Table: Trips

// 6

// Column Name Type

// id client_id

// driver_id

// city_id

// status

// request_at

// int int

// int

// int

// enum

// varchar

// request_at as "Day",

// round(sum(status "Cancellation Rate"

// 'completed')/count(*),

// from

// Trips where

// client_id in (select users_id from

// and driver_id in (select

// 10

// Users where banned = "No")

// users_id from Users where banned "No") and request_at between

// "2013-10-01" and "2013-10-03"

// 11 group by

// 12

// 13

// request_at order by

// request_at asc

// 15

// users_id

// banned

// role

// int

// enum

// enum

// users_id is the primary key (column with unique

// values) for this table.

// The table holds all users. Each user has a unique users_id, and role is an ENUM type of ('client',

// 'driver', 'partner').

// banned is an ENUM (category) type of ('Yes', 'No').

// The cancellation rate is computed by dividing the number of canceled (by client or driver) requests with unbanned users by the total number of requests with unbanned users on that day.

// Write a solution to find the cancellation rate of requests with unbanned users (both client and driver must not be banned) each day between "2013-10-01" and "2013-10-03" with at least one trip. Round

// Cancellation Rate to two decimal points.

// Return the result table in any order.

// The result format is in the following example.

// Example 1:

// Input: Trips table:

// | id | client_id | driver_id | city_id | status

// request_at

// 1|1

// 10

// completed

// 2013-10-01

// 11

// 1

// 22

// cancelled_by_driver
