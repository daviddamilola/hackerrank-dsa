class  Vertex {
    constructor(label){
        this.label = label;
    }
}

class Graph {
    constructor(v) {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];
        this.marked = [];
        for (let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
            this.adj[i].push(null);
        }
        for (let i= 0; i <  this.vertices; i++){
            this.marked[i] = false;
        }
    }

    addEdge(v, w) {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }
    
    showGraph() {
        for (let i=0; i < this.vertices; i++){
            console.log(`${i} --> ${
                this.adj[i].filter(
                    each => each !== undefined
                )
            }`) 
        }
    }

    dfs(v) {
        this.marked[v] = true;
        if(this.adj[v] != undefined){
            console.log(`visited vertice is ${v}`)
            this.adj[v].forEach(
                each =>{
                     if(!this.marked[each]){
                         this.dfs(each)
                        }
                }
            )
        }
    }

    bfs(v) {
        let queue = [];
        this.marked[v] = true;
        queue.push(v)
        while(queue.length > 0 ) {
            console.log( 'queue is',queue);
            let v = queue.shift();
            console.log(`visited ${v } `)
            if(this.adj[v] == undefined){
            v = queue.shift();
                continue;
            }else{
            this.adj[v].forEach( 
                each => {
                   if(!this.marked[each] && each != null){
                       this.marked[each] = true;
                       queue.push(each)
                   }
                }
            )}
        }
        console.log('finished the search')
    }
}

const g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
g.bfs(0);
