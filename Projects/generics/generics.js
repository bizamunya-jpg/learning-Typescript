"use strict";
class Database {
    data = [];
    // adds an item to the end of the array
    add(item) {
            this.data.push(item);
        }
        // Returns the entire array
    getAll() {
            return this.data;
        }
        //uses array indexing to find specific data
    find(index) {
            return this.data[index];
        }
        // removes an item using splice
    remove(index) {
            this.data.splice(index, 1);
        }
        //returns an empty array
    clear() {
            this.data = [];
        }
        // uses the array length property to see how many elements are in the array
    count() {
            return this.data.length;
        }
        //checks if the array is empty
    isEmpty() {
            return this.data.length === 0;
        }
        //grabs the last element in the array
    last() {
            return this.data[this.data.length, -1];
        }
        //grabs the first element in the array
    first() {
            return this.data.at(0);
        }
        // updates information associated to that id
    update(id, updateitem) {
            const index = this.data.findIndex(item => item.id === id);
            if (index !== -1) {
                this.data[index] = updateitem;
            }
        }
        // deletes all information to do with that id
    deleteId(id) {
            const index = this.data.findIndex(item => item.id === id);
            if (index !== -1) {
                this.data.splice(index, 1);
            }
        }
        // checks if id exists and returns a boolean expression
    exists(id) {
        const index = this.data.findIndex(item => item.id === id);
        if (index !== -1) {
            return true;
        }
        return false;
    }
}
const studentDB = new Database();
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