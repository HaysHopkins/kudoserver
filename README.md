# Note the extra setup instructions added below.
## Tasks

1) 
-[x] Give kudos to other users
-[x] See kudos given to him/her by other users
-[x] View all kudos another user has received

2) Additionally, take a swing at adding one or two of the following improvements:

-[x]  Allow users to be associated with an organization
-[x] Allow logging in as different users (authentication)
  -This needs work to be production ready, but basic outline is there
-[x] Prevent users from being able to do things they shouldn't (authorization)
  -Scoping by team effectively accomplishes this; also prevent self-kudos
-[ ] Enforce a limit on giving kudos (for example, up to 3 kudos per week)
-[ ] Limit the number of information displayed on each page (pagination)


TODO: tests tests tests; change more components to functional/ui, kudos n+1, make sure counter is working (might need to manually update count before reload); empty states; use refresh tokens; need some more sanity limits on validations (FE, BE and DB); get toast to auto close properly


## Setup
1) Install dependencies with `bundle install`
2) Configure your database settings in `config/database.yml`
3) Build your database with `rails db:setup db:seed`
4) Prepare the front end with `npm install`
5) Start your rails server with `rake start`

## Testing
You can hit API endpoints via commandline with curl:

GET: `curl localhost:3000/users`

POST: `curl -H "Content-Type: application/json" -d '{"username":"daenerys", "first_name":"daenerys", "last_name":"targaryen"}' localhost:3000/users`

## API Documentation

### Kudos
**Request:**

`GET /kudos` - list all received kudos of currently logged-in user

**Response**: 

`200 OK`

`Content-Type: application/json`

*Body*:

```json
[
    {
        "created_at": "2017-09-12T21:18:27.321Z",
        "giver_id": 1,
        "id": 1,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:18:27.321Z"
    },
    {
        "created_at": "2017-09-12T21:34:04.793Z",
        "giver_id": 1,
        "id": 2,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:34:04.793Z"
    }
]
```

**Request**:

`GET /users/:user_id/kudos` - list all received kudos of user_id

*Parameters*:

`user_id` - integer ID of user who you wish to get kudos for

**Response**: 

`200 OK`

`Content-Type: application/json`

*Body*:

```json
[
    {
        "created_at": "2017-09-12T21:18:27.321Z",
        "giver_id": 1,
        "id": 1,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:18:27.321Z"
    },
    {
        "created_at": "2017-09-12T21:34:04.793Z",
        "giver_id": 1,
        "id": 2,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:34:04.793Z"
    }
]
```

**Request**: 

`GET /users/:user_id/kudos` - list all received kudos of user_id

*Parameters*:

`user_id` - integer ID of user who you wish to get kudos for

**Response**: 

`200 OK`

`Content-Type: application/json`

*Body*:

```json
[
    {
        "created_at": "2017-09-12T21:18:27.321Z",
        "giver_id": 1,
        "id": 1,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:18:27.321Z"
    },
    {
        "created_at": "2017-09-12T21:34:04.793Z",
        "giver_id": 1,
        "id": 2,
        "receiver_id": 1,
        "text": "Test Kudo",
        "updated_at": "2017-09-12T21:34:04.793Z"
    }
]
```

**Request**:

`POST /kudos` - create a new kudos record

*Body*:

```json
{
  "text": "This is a kudo",
  "receiver_id": 1,
  "giver_id: 2
}
```

**Response**: 

`201 Created`

`Content-Type: application/json`

*Body*:

```json
{
    "created_at": "2017-09-12T22:28:14.304Z",
    "giver_id": 2,
    "id": 1,
    "receiver_id": 1,
    "text": "This is a kudo",
    "updated_at": "2017-09-12T22:28:14.304Z"
}
```

**Request**:

`DELETE /kudos/:id` - delete a kudos record

*Parameters*:  

`id` - integer ID of the kudo you wish to delete

**Response**:

`204 No Content`

### Users

**Request**:

`GET /users` - list all user records

**Response**: 

`200 OK`

`Content-Type: application/json`

*Body*:

```json
[
    {
        "created_at": "2017-09-12T21:17:31.908Z",
        "id": 1,
        "kudos_given_count": 4,
        "kudos_received_count": 4,
        "updated_at": "2017-09-12T21:17:31.908Z",
        "username": "daenerys",
        "first_name": "Daenerys",
        "last_name": "Targaryen"
    }
]
```

**Request**:

`POST /user` - create a new user record

*Body*:

```json
{
  "username": "daenerys",
  "first_name": "Daenerys",
  "last_name": "Targaryen"
}
```

**Response**: 

`201 Created`

`Content-Type: application/json`

*Body*:

```json
{
    "created_at": "2017-09-12T22:33:49.495Z",
    "id": 2,
    "kudos_given_count": 1,
    "kudos_received_count": 1,
    "updated_at": "2017-09-12T22:33:49.495Z",
    "username": "daenerys",
    "first_name": "Daenerys",
    "last_name": "Targaryen"
}
```

**Request**:

`GET /users/:id` - get user info for ID

*Parameters*:

`id` - integer ID of the user you wish to get

**Response**: 

`200 OK`

`Content-Type: application/json`

*Body*:

```json
{
    "created_at": "2017-09-12T22:33:49.495Z",
    "id": 2,
    "kudos_given_count": 1,
    "kudos_received_count": 1,
    "updated_at": "2017-09-12T22:33:49.495Z",
    "username": "daenerys",
    "first_name": "Daenerys",
    "last_name": "Targaryen"
}
```