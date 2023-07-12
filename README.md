# Expense Tracker Software

A simple expense tracking system. Tracks user income and expense

# Tool

Nest JS

# Features

- Validation of request body and params using nest js pipes
- File Organization using modules

# How to run this project

- Clone the project into local machine
- **cd expense-app**
- **yarn install**
- **yarn start:dev**

# Endpoints

## Reports

| Method | Endpoint            | Description               |
| ------ | ------------------- | ------------------------- |
| GET    | /reports            | Get all reports           |
| GET    | /reports/income     | Get all Income reports    |
| POST   | /reports/income     | Add an income report      |
| GET    | /reports/expense    | Get all expense report    |
| POST   | /reports/expense    | Add an expense report     |
| GET    | /reports/income/id  | Get single income report  |
| PUT    | /reports/income/id  | Update an income report   |
| DELETE | /reports/income/id  | Delete an income report   |
| GET    | /reports/expense/id | Get single expense report |
| PUT    | /reports/expense/id | Update an expense report  |
| DELETE | /reports/expense/id | Delete an expense report  |

## Summary

| Method | Endpoint         | Description                          |
| ------ | ---------------- | ------------------------------------ |
| GET    | /summary         | Get sub-total of all reports         |
| GET    | /summary/income  | Get sub-total of all income reports  |
| GET    | /summary/expense | Get sub-total of all expense reports |
