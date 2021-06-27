class Queue {
    constructor () {
        this.dataStore = [];
    }

    enqueue(elemeent){
        this.dataStore.push(elemeent)
    }

    dequeue(){
        this.dataStore.shift();
    }

    front(){
        return this.dataStore[0]
    }

    back(){
        return this.dataStore[this.dataStore.length -1]
    }

    toString(){
        let retStr =  ""
        for(const element of this.dataStore){
            retStr += `${element} \n`
        }
        return retStr;
    }

    empty(){
        return this.dataStore.length === 0
    }
}

//test
const q = new Queue();

q.enqueue('Mary');
q.enqueue('Jane');
q.enqueue('Ann');
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log(`Front of queue: ${q.front()}`);
console.log(`Back of queue: ${q.back()}`);