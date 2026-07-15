# Iron Dome project

## Description

Built a backend for an Iron Dome Operations Management System.

Operators sitting in a control room need to:

- create operators (people using the system)
- open incidents when a threat is detected
- update an incident's status as it progresses
- view all currently open incidents

Behind the scenes, the system also keeps a log of important actions.

Everything is stored in MySQL.

### Main Entities

1. Operators

Represents the people operating the system.

Example:

| id | name | rank |
| --- | --- | --- |
| 1 | John | Captain |

2. Incidents

Represents operational events.

Example:

|id	|code_name|	threat_level|	status	|operator_id|
| --- | --- | --- | --- | --- |
|5	|RED |SKY	HIGH	|OPEN	|1|



3. Logs

This table records actions.

For example:

|action	|description|
| --- | --- |
|INCIDENT_CREATED|	New incident created|
|STATUS_UPDATED|	Status changed to INTERCEPTED|

A log belongs to:

one incident
one operator
Endpoints

How many endpoints are actually required?

I count four.

POST /operators

Create an operator.

POST /incidents

Create an incident.

PATCH /incidents/:id/status

Update only the status.

GET /incidents/open

Return all incidents whose status is OPEN.

Here's something interesting

When you create an incident...

Should the system only insert into the incidents table?

Look back at the project description.

It says the system should document actions.

So after creating an incident, what else should happen?

(Think about this before reading further.)

The answer is: it should also create a row in the logs table.

So one API request actually performs two database operations:

POST /incidents

↓

Insert into incidents

↓

Insert into logs

That's exactly why the project introduces the Service layer—to coordinate multiple repository operations.

Architecture

The project is also testing whether you understand responsibility separation.

Let's walk through one request:

POST /incidents

Where should the SQL query live?

Not in the route.

Not in the controller.

The flow should be:

Client

↓

Route

↓

Controller

↓

Service

↓

Repository

↓

MySQL

Each layer has one job:

Route: maps the URL to a controller.
Controller: receives req and res, extracts data, and calls the service.
Service: contains business logic (for example: "create an incident, then create a log").
Repository: performs SQL queries only.
Project Plan

Before coding, I'd break it into these phases:

Project setup
Express
dotenv
mysql2
nodemon
Docker
Create docker-compose.yml
Start the MySQL container
Verify it's running
Database
Create database.sql
Create the database
Create the three tables
Add foreign keys
Express structure
Create the folders (routes, controllers, services, repositories, etc.)
Connect to MySQL with a connection pool
Implement the endpoints
Start with operators (simplest)
Then incidents
Then status updates
Then get open incidents
Error handling
Invalid status
Missing operator
Missing incident
Database errors

Dependencies

npm install express mysql2 dotenv

Dev Dependency

npm install --save-dev nodemon

Backstory
An air defense unit operates an internal system for managing operational events in real time.
During operational activity, reports are received from various radar and sensor systems.
When a threat is detected — an operational incident is opened in the system.

Operators can:
● Open an incident
● Update incident status
● View open incidents
● Record actions performed
● The system will save all data using: MySQL

Project Goal
To build a Backend server using:
Node.js ●
Express.js ●
MySQL ●
mysql2 ●
Docker ●
Using a basic architecture and an organized folder structure.

Project Requirements
.1 Create an Operator
Endpoint

POST /operators
Body
{
"name": "John",
"rank": "Captain"
}

.2 Open an operational incident
Endpoint

POST /incidents
Body
{
"codeName": "RED SKY",
"threatLevel": "HIGH",
"operatorId": 1
}

.3 Change Incident status
Endpoint

PATCH /incidents/:id/status
Body
{
"status": "INTERCEPTED"
}

Possible statuses:
OPEN ●
TRACKING ●
INTERCEPTED ●
CLOSED ●

.4 Retrieving all open incidents

Endpoint

GET /incidents/open

Database requirements
You must use MySQL.

Table: operators
Column Type

id INT AUTO_INCREMENT PRIMARY KEY

name VARCHAR(100)

rank VARCHAR(100)

Table: incidents

Column Type

id INT AUTO_INCREMENT PRIMARY KEY

code_name VARCHAR(100)

threat_level VARCHAR(50)

status VARCHAR(50)

operator_id INT FK(operators(id))

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

Table: logs
Column Type

id INT AUTO_INCREMENT PRIMARY KEY

action VARCHAR(100)

incident_id INT FK(incidents(id))

operator_id INT FK(operators(id))

description TEXT

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

Foreign Keys
● incidents.operator_id → operators.id
● logs.operator_id → operators.id
● logs.incident_id → incidents.id

Examples of Logs
When creating an Incident

action description

INCIDENT_CREATED New incident created

When changing status

action description

STATUS_UPDATED Status changed to INTERCEPTED

Recommended architecture

● project/
● │
● │
● ├── controllers/
● ├── services/
● ├── repositories/
● ├── routes/

● ├── db/
● ├── middleware/
● ├── utils/
● ├── app.js
● ├── Dockerfile
● ├── docker-compose.yml
This file should include clear instructions for running the project - for example, which md.readme● ├──
.‘Required environment variables, etc., DOCKER command will run for me
● └── .env

Distribution of Responsibility
Routes
Define Endpoints only.

Controllers
receive
request ●
response ●
and ​​do not contain business logic.

Services
are responsible for the business logic.
For example:
● Creating an Incident
● Changing Status
● Creating a Log
● Health Checks

Repositories
are responsible for all work with MySQL.
SQL queries should not be executed from within the Service.
All SQL queries should be exclusively within the Repository layer.

Workflow
Request ●
●
↓ ●
●
Route ●
●
↓ ●
●
Controller ●
●
↓ ●
●
Service ●
●
↓ ●
●
Repository ●
●
↓ ●
●
MySQL ●

Technical Requirements
You must use:

Express ●
mysql2 ●
dotenv ●
Docker ●
Docker Compose ●

Dependencies

npm install express mysql2 dotenv

Dev Dependency

npm install --save-dev nodemon

Docker
You must create a MySQL container using Compose Docker.
Example:

services:

mysql:

image: mysql:8

container_name: iron-dome-db

restart: always

ports:
- "3306:3306"

environment:
MYSQL_ROOT_PASSWORD: root
MYSQL_DATABASE: iron_dome

volumes:
- mysql-data:/var/lib/mysql

volumes:

mysql-data:

.env file
PORT=3000 ●
●
DB_HOST=localhost ●
DB_PORT=3306 ●
DB_USER=root ●
DB_PASSWORD=root ●
DB_NAME=iron_dome ●

Connect to the database

Create a file

db/database.js

For example:

import mysql from "mysql2/promise";

const pool = mysql.createPool({
host: process.env.DB_HOST,
port: process.env.DB_PORT,
user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME
});

export default pool;

Creating the database
After the Container is up, the tables must be created using an SQL file.

For example:

database.sql

Which will include:
CREATE DATABASE ●
CREATE TABLE operators ●
CREATE TABLE incidents ●
CREATE TABLE logs ●
Foreign Keys ●

Important highlights

.1 Separation of responsibilities
Do not write all the code in one file.

.2 Organized code
Clear names for functions, variables and files.

Error Handling .3
Yes Handle at least the following cases:
● Incident does not exist
● Operator does not exist
● Status is invalid
● Database connection error

Bonus (optional)
Validation ●
● Middleware for handling errors
● Using Foreign Keys

Using DEFAULT CURRENT_TIMESTAMP●
● Using 2mysql's Connection Pool

Recommended work time

Time phase

Setup of Docker and running MySQL 30 minutes

Creating the database and tables 30 minutes

Services + Repository 1 hour and a quarter

Routes + Controllers 1 hour

Architecture and code cleaning 1 hour

What will you learn from the project?
● Working with REST API
● Working with MySQL using 2mysql
● Working with Docker and Compose Docker
● Working with multiple tables and relations
● Basic Backend architecture
● Separation of responsibilities between layers
● Working with Express
● Professional system design

Examples of Threat Levels
LOW ●
MEDIUM ●
HIGH ●

CRITICAL ●

Examples of Code Names
RED SKY ●
BLACK FALCON ●
IRON SHIELD ●
NIGHT ARROW ●
SILENT DOME ●

Docker Requirements
Before starting server development, the following steps must be performed:

1. Create a docker-compose.yml file

2. Set up a MySQL container using:

docker compose up -d

3. Verify