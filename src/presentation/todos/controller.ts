import { Request, Response } from "express";

const todos = [
    { id: 1, text: 'Buy some milk' },
    { id: 2, text: 'Pick up kids from school' },
    { id: 3, text: 'Pay bills' },
];

export class TodosController {

    //* DI
    constructor(){}

    public getTodos = (req: Request, res: Response) => {
        return res.json(todos);
    }

    public getTodoById = (req: Request, res: Response) => {
        const todo = todos.find(todo => todo.id === parseInt(req.params.id));

        if( isNaN(parseInt(req.params.id)) ) return res.status(400).json({ message: 'ID Argument is not a number' });

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }
        return res.json(todo);
    }

    public createTodo = (req: Request, res: Response) => {

        const body = req.body;
        const { text } = body;

        if (!text) {
            return res.status(400).json({ message: 'Todo is required' });
        }

        const newTodo = {
            id: todos.length + 1,
            text: text
        };

        todos.push(newTodo);

        return res.json(newTodo);
    }

    public updateTodo = (req: Request, res: Response) => {

        const { id } = req.params;
        const body = req.body;
        const { text } = body;

        const todo = todos.find(todo => todo.id === parseInt(id));
        

        if (!todo) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        if (!text) {
            return res.status(400).json({ message: 'Todo is required' });
        }

        todo.text = text;

        return res.json(todo);
    }

    public deleteTodo = (req: Request, res: Response) => {
        const { id } = req.params;
        const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));

        if (todoIndex === -1) {
            return res.status(404).json({ message: 'Todo not found' });
        }

        todos.splice(todoIndex, 1);

        return res.json({ message: 'Todo deleted' });
    }
}