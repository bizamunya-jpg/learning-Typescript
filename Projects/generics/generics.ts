interface Student {
    id: number;
    name: string;
    age: number;
}
interface HasId {
    id: number;
}

class Database<T extends HasId> {
    private data: T[] = [];
// adds an item to the end of the array
    add(item: T) {
        this.data.push(item);
    }
    // Returns the entire array
    getAll(): T[] {
        return this.data;
    }
    //uses array indexing to find specific data
    find(index: number): T | undefined {
        return this.data[index];
    }
// removes an item using splice
    remove(index: number): void {
        this.data.splice(index, 1);
    }
    //returns an empty array
    clear(): void {
        this.data = [];
    }
    // uses the array length property to see how many elements are in the array
    count(): number {
        return this.data.length;
    }
    //checks if the array is empty
    isEmpty(): boolean {
        return this.data.length === 0;
    }
    //grabs the last element in the array
    last(): T | undefined {
        return this.data[this.data.length, -1]
    }
    //grabs the first element in the array
    first(): T | undefined {
        return this.data.at(0);
    }
// updates information associated to that id
    update(id: number, updateitem: T): void {

        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data[index] = updateitem;
        }
    }
    // deletes all information to do with that id
    deleteId(id: number): void {

        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            this.data.splice(index, 1);
        }

    }
    // checks if id exists and returns a boolean expression
    exists(id: number): boolean {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            return true;
        }
        return false;
    }
}



const studentDB = new Database<Student>();

studentDB.add({
    id: 1,
    name: "munya",
    age: 65
});

studentDB.add({
    id: 2,
    name: "mary",
    age: 75
});

console.log(studentDB.getAll());

console.log(studentDB.find(0));

studentDB.remove(1);

console.log(studentDB.count());

studentDB.clear();

console.log(studentDB.exists(1));

console.log(studentDB.isEmpty());

console.log(studentDB.getAll());

