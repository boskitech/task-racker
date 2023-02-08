export interface Itodo {
    id: string,
    todoName:string,
    todoDate:string,
    priority:string,
    todoItem: string,
    todoQuantity:string,
    todoType:string,
    addItemField:[{
        item:string,
        quantity: any,
        subTodoType:any,
    }]
}