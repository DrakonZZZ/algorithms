class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(value) {
        this.heap.push(value);
        let current = this.heap.length - 1;

        // Bubble up until heap property is restored
        while (current > 0 && this.heap[current] < this.heap[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    remove() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const removed = this.heap[0];  // Smallest element
        this.heap[0] = this.heap.pop();  // Move last element to the top
        this.heapDown(0);  // Rebalance the heap
        return removed;
    }

    heapDown(idx) {
        const size = this.heap.length;

        while (true) {
            let min = idx;
            const leftIdx = this.leftChild(idx);
            const rightIdx = this.rightChild(idx);

            // Check if left child is smaller
            if (leftIdx < size && this.heap[leftIdx] < this.heap[min]) {
                min = leftIdx;
            }

            // Check if right child is smaller
            if (rightIdx < size && this.heap[rightIdx] < this.heap[min]) {
                min = rightIdx;
            }

            // If the current node is not the smallest, swap and continue
            if (min !== idx) {
                this.swap(idx, min);
                idx = min;
            } else {
                break;
            }
        }
    }

    parent(idx) {
        return Math.floor((idx - 1) / 2);
    }

    leftChild(idx) {
        return 2 * idx + 1;
    }

    rightChild(idx) {
        return 2 * idx + 2;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    getHeap() {
        return [...this.heap];
    }
}

const minHeap = new MinHeap();
minHeap.insert(10);
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(7);

console.log(minHeap.getHeap());

console.log("Min element removed:", minHeap.remove());

console.log(minHeap.getHeap());