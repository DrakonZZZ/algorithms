//<----------------------- using recursion-------------------------->

class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findPath(root, targetValue, path = []){
    if(!root){
        return null;
    }

    if(root.value === targetValue){
        return path;
    }

    const leftPath = findPath(root.left, targetValue, [...path, 'left']);
    if(leftPath){
        return leftPath;
    }

    const rightPath = findPath(root.right, targetValue, [...path, 'right']);
    if(rightPath){
        return rightPath;
    }

    return null;
}

function findNodeByPath(root, path){
    let current = root;

    for(let direction of path){
        if(!current){
            return null;
        }

        current = direction === 'left' ? current.left : current.right;
    }

    return current;
};


const createTree = () => {
    const root = new Node('root');
    root.left = new Node('a');
    root.right = new Node('b');
    root.left.left = new Node('c');
    root.left.right = new Node('d');
    root.right.left = new Node('e');
    root.right.right = new Node('f');
    return root;
}

const t1 = createTree();
const t2 = createTree();

const targetValue = 'd';
const pathToTarget = findPath(t1, targetValue);

console.log(`Path to ${targetValue} in t1:`, pathToTarget);

const correspondingNode = findNodeByPath(t2, pathToTarget)

console.log(`Node in t2 with the same path:`, correspondingNode ? correspondingNode.value : 'Not found');


//<----------------------- using stacks-------------------------->
function correspondingNodes(t1, t2, node){
     const stack1 = [t1];
     const stack2 = [t2];

     while(stack1.length){
        const current1 = stack1.pop();
        const current2 = stack2.pop();

        if(current1 === node){
            return current2;
        }
        stack1.push(...current1.children);
        stack2.
        push(...current2.children);
     }

     return -1;
}

