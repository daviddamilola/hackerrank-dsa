class TrieNode {
    constructor(key) {
      this.parent = null;
      this.key = key;
      this.children = {};
      this.end = false
    }
  
    getWord() {
      let output = [];
      let node = this;
      while (node !== null) {
        output.unshift(node.key)
        node = node.parent
      }
      return output.join('');
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode(null)
    }
  
    insert(word) {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
        if (!node.children[word[i]]) {
          //create new node
          node.children[word[i]] = new TrieNode(word[i]);
          // point its parent to the current node
          node.children[word[i]].parent = node;
        }
        //node is now the next children depth in the trie
        node = node.children[word[i]];
  
        if (i === word.length - 1) {
          node.end = true
        }
  
      }
    }
  
    contains(word) {
      let node = this.root;
  
      for (let i = 0; i < word.length; i++) {
  
        if (node.children[word[i]]) {
          node = node.children[word[i]];
        } else {
          return false
        }
      }
  
      return node.end;
    }
  
    find(prefix) {
      // start at the root node
      let node = this.root;
      let output = [];
      // for each letter in the prefix
      for (let i = 0; i < prefix.length; i++) {
        //does the children contain that prefix? yes:set the node to that: no?: return current output
        if (node.children[prefix[i]]) {
          node = node.children[prefix[i]]
        } else {
          return output;
        }
      }
      // recursively find all words on this node, will mutate the output array
      Trie.findAllWords(node, output)
      // return the filled output array.
      return output;
    }
  
    remove (word) {
      let root = this.root;
  
      if(!word) return;
  
      const removeWord = (node, word) => {
        if(node.end && node.getWord() === word) {
          let hasChildren = Object.keys(node.children).length > 0;
  
          if(hasChildren){
            node.end = false // no longer a word
          } else {
            node.parent.children = {}
          }
  
          return true
        }
  
        for(let key in node.children) {
          removeWord(node.children[key], word)
        }
        return false;
      };
  
      removeWord(root, word);
    }
  
    static findAllWords(node, array) {
      if (node.end) {
        array.unshift(node.getWord())
      }
  
      for (let child in node.children) {
        Trie.findAllWords(node.children[child], array);
      }
    } 
  
  
  }
  
  const trie = new Trie();
  
  // insert few values
  trie.insert("peter");
  trie.insert("piper");
  trie.insert("picked");
  trie.insert("pickled");
  trie.insert("pepper");
  
  // check contains method
  console.log(trie.contains("picked"));  
  console.log(trie.contains("pepper")); 
  
  // check find method
  console.log(trie.find("pi"));  
  console.log(trie.find("pe")); 
  
  trie.remove("pepper");
  console.log(trie.find("pe")); 