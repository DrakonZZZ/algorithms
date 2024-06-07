const shadyLabel = document.getElementById('root');

const createBatchAppender = (batchSize, content) => {
  return () => {
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < batchSize; i++) {
      const h1 = document.createElement('h1');
      h1.textContent = content;
      fragment.appendChild(h1);
    }
    shadyLabel.appendChild(fragment);
  };
};

const BATCH_SIZE = 1000, TOTAL_ELEMENTS = 10000;

// Split them into chunks
const fullBatches = Math.floor(TOTAL_ELEMENTS / BATCH_SIZE);

// Elements remaining after dividing into full batches
const remainingElements = TOTAL_ELEMENTS % BATCH_SIZE;

const fullBatch = createBatchAppender(BATCH_SIZE, 'Eminem Houdini');

// Add full batches
for (let i = 0; i < fullBatches; i++) {
  fullBatch();
}

const remainingBatch = createBatchAppender(remainingElements, 'Eminem Houdini');

// Add remaining elements if any
if (remainingElements > 0) {
  remainingBatch();
}