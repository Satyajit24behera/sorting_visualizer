

# Sorting Visualizer

Welcome to the Sorting Visualizer! This tool allows you to visualize 10 different sorting algorithms in action. You can adjust the size of the array and the speed of the visualization to gain a deeper understanding of each algorithm.

You can check out the live demo [here](https://dakshesh1234.github.io/Sorting-Visualizer/).

## Implemented Algorithms

1. **Bubble Sort**
2. **Selection Sort**
3. **Insertion Sort**
4. **Merge Sort**
5. **Quick Sort**
6. **Heap Sort**
7. **Cycle Sort**
8. **Counting Sort**
9. **Bucket Sort**
10. **Radix Sort**

## Features

### Colored Representation of Steps

- **Comparison-Based Algorithms**:
  - **rgb(7, 178, 171)**: Default color
  - **Yellow**: Being compared
  - **Red**: Identified as in incorrect position and to be moved
  - **Green**: In correct position with respect to some partitions (in Merge and Quick Sort)
  - **Green**: In final correct position

- **Counting-Based Algorithms**:
  - **rgb(7, 178, 171)**: Default color
  - **Lightblue**: Being counted
  - **Lightgreen**: Being copied to other array in correct position
  - **Green**: In correct position (for Radix Sort, it is also green when the corresponding digits are in the correct position)

**Note:** For Bucket Sort, all elements are initially copied to the bucket (`lightgreen`), then copied back to the original array and sorted using insertion sort in the original array.

### Visualization Controls

1. **Speed of Visualization**: 6 speed levels
2. **Data Size**: Adjustable array size
3. **New Data Generation**: Randomly generate new data

### Complexity Display

The time and space complexity of the currently visualized algorithm are displayed.

## Acknowledgements

This project was inspired by the [Sorting Visualizer tutorial on YouTube](https://www.youtube.com/watch?v=pFXYym4Wbkc).

## How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Sorting-Visualizer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Sorting-Visualizer
   ```
3. Open the `index.html` file in your browser to start the visualizer.

Alternatively, you can view the visualizer directly online [here](https://dakshesh1234.github.io/Sorting-Visualizer/).

---

Feel free to replace `https://github.com/your-username/Sorting-Visualizer.git` with your actual GitHub repository URL. 

