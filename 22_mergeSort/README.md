# Exercise 22 - mergeSort

A significant amount of computer science is dedicated to sorting data. An algorithm which uses the "divide and conquer" approach
of recursion is able to reduce a sorting problem to smaller and smaller sub-problems.

Merge sort is one such sorting algorithm, and can be much faster than other algorithms such as bubble sort on the right data sets.

Essentially, merge sort recurses through an array of unsorted data until it reaches its smallest sub-set, a single item.

Of course an array with a single item is considered sorted. Merge sort then merges the single items back together in sorted order. Pretty clever!

To understand what merge sort algorithm is doing check out these resources:
- [Watch this introductory video from Harvard's CS50x course]()
- [Watch this more detailed video explanation by David J. Malan (watch only until 1:58:33)]()
- [The concept of merging and Merge Sort - How it Works part on YouTube to give you a more formal look at this problem if you're still unclear]()
- [Play with this Merge Sort Visualizer to get a better feel for exactly what is happening during a Merge Sort.]()

Write a function `mergeSort` that takes in an array and returns a sorted array, using a recursive merge sort methodology. Example:

```javascript
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) // [0, 1, 1, 2, 3, 5, 8, 13]
```
