# MatchDay Chat

## Description

MatchDay Chat is a web-based application that enables the user to post a Premiere league soccer match & discuss their opinions about the match

- A user will be able to sign up for an account.
- A user will be able to login after signing up for an account.
- A user will be able to post a new match
- A user will be able to view and post comments to all matches that are posted.
- A user will be able to view, update and delete Matches that they posted.
- A user will be able to view, update and delete comments that they posted.



## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- MatchDay Chat account



## Setup

- Download, set Ruby version and start Sqlite database

```console
$ git clone https://github.com/eastflatbushbk/matchday 

```
- Install Rails dependencies. migrate and seed database

```console
$ bundle install
$ rails db:migrate db:seed

```
- Start Rails server
```console

$ rails start

```
- Install React dependencies and start server

```console
$ npm install --prefix client
$ npm start --prefix client

```

