class Storage{
    constructor(){
        this.collection = new Map();
        this.id  = '0';
    }
    add(object){
        if (typeof (object) === 'object'){
            this.id = String(Number(this.id) + 1);
            this.collection.set(this.id, object);
            return this.id;
        }
        else{
            console.log("Коллекция принимает только объекты!");
            return null;
        }
    }
    getAll(){
        return this.collection;
    }
    getById(id){
        if (typeof id === 'string'){
            if (collection.has(id)){
                return collection.get(id);
            }
            else {
                return null;
            }
        }
        else {
            console.log("ID - строковый параметр, но был передан как параметр другого типа!");
            return null;
        }

    }
    deleteById(id){
        if (typeof id === 'string'){
            if (collection.has(id)){
                let temp = collection.get(id);
                collection.delete(id);
                return temp;
            }
            else {
                return null;
            }
        }
        else {
            console.log("ID - строковый параметр, но был передан как параметр другого типа!");
            return null;
        }
    }
    updateById(id, object){
        if (typeof id === 'string'){
            if (typeof object === 'object'){
                for (let key in object) {
                    this.collection.get(id)[key] = object[key];
                }
                return this.collection.get(id);
            }
            else {
                console.log("object - должен являться объектом, но был передан как параметр другого типа!");
                return null;
            }
        }
        else {
            console.log("ID - строковый параметр, но был передан как параметр другого типа!");
            return null;
        }
    }
    replaceById(id, object){
        if (typeof id === 'string'){
            if (typeof object === 'object'){
                return this.collection.set(id, object);
            }
            else {
                console.log("object - должен являться объектом, но был передан как параметр другого типа!");
                return null;
            }
        }
        else {
            console.log("ID - строковый параметр, но был передан как параметр другого типа!");
            return null;
        }
    }
}

const storage = new Storage();

let id1 = storage.add({
    some: 1
});
let id2 = storage.add({
    name: 'Denis',
    sname: 'Alkhazov'
});
let id3 = storage.add({
   name: 'Denis2',
   sname: 'Alkhazov2'
});

let collection = storage.getAll();
console.log(collection);
console.log('--------------------------------------------');
console.log(storage.getById(1));
console.log('--------------------------------------------');
console.log(storage.getById(id1));
console.log('--------------------------------------------');
console.log(storage.deleteById(id2));
console.log('--------------------------------------------');
console.log(storage.updateById(id3, {
    name: 'I am Denis',
    sname: 'Alkhazov'
}));
console.log('--------------------------------------------');
console.log(storage.replaceById(id3, {
    name: 'SwepID',
    sname: 'SwepID',
    contributor: 'Vikentii Ekgart'
}));


