# Todo_app_TGH

Hosted using render
https://todoapp-6qai.onrender.com/


API

Models
taskmodel

      {
        taskname:String,
        priority:Number,
        completed:Boolean,
        cancelled:Boolean
        }
    
    
usermodel

    {
        username:String,
        password:String
    }

Endpoints

1 /signup
    POST -Create new user
    
    
2 /login
    POST -login with user
    
    
3 /api/task
    POST - add new task
    
    
4 /completetask/:id
    GET - complete task using id
    
    
5 /canceltask/:id
    GET - Cancel task
    
    
6 /deletetask/:id
    GET - Delete task
    
    
7 /api/alltasks
    GET - Get all tasks
    
    
8 /api/report
    GET - Get reports




