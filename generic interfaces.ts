// instead of 
interface Student {
    id: number;
    name: string;
}
// we can make the interface generic.
interface ApiResponse<T> {
    success: boolean;
    data: T;
}
interface Book {
    id: number;
    title: string;
} 
 
const response: ApiResponse<student> = {
    success: true,
    data:{
        id: 1,
        name: "Munya"
    }
}

const books: ApiResponse<Book[]> = {
    success: true,
    data: [
        {
            id: 1,
            title: "Clean code"
        }
    ]
}
