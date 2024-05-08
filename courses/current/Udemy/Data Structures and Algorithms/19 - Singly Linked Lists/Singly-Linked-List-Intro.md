# Singly Linked Lists <!-- omit in toc -->



- [Outline & Objectives](#outline--objectives)
- [Linked List](#linked-list)
  - [Visualizing Data Structures - Linked List](#visualizing-data-structures---linked-list)
- [Comparisons with Arrays](#comparisons-with-arrays)

## Outline & Objectives

- Define what a Singly Linked List is.
- Compare and contrast Linked Lists with Arrays.
- Implement insertion, removal, and traversal methods on Singly Linked Lists.

## Linked List

A **Linked List** is a data structure that contains a **head**, **tail** and **length¸** property.

Linked Lists *consists of nodes*, and each **node** has a **value** and a **pointer** to another node or *null*.

There is no index in a linked list, you can't directly reference data by its index number. It's as the terminology suggests, it's a linked list of data.

### Visualizing Data Structures - Linked List

[VisuAlgo.net](https://visualgo.net/en) is a site that helps explain algorithms with visual examples of their data structures.

[VisuAlgo - Linked List](https://visualgo.net/en/list?slide=1)

Linked List is a data structure consisting of a **group of vertices** (nodes) which *together represent a sequence*. 

Under the simplest form, each vertex is composed of a **data** and a **reference** (link) to the *next vertex in the sequence*. 

Linked List and its variations are used as underlying data structure to implement:

- List
- Stack
- Queue ADTs
- Deque ADTs 
 
> read this [Wikipedia article about ADT](https://en.wikipedia.org/wiki/Abstract_data_type), if you are not familiar with Abstract Data Types.

## Comparisons with Arrays

Linked Lists:
- Do not have indexes!
- Connected via nodes with a **next** pointer.
- Random access is not allowed. You do not have direct access to the data. You have to traverse the nodes from the beginning to the data.

Linked Lists are great for *insertion* and *deletion*.

Arrays:
- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be access at a specific index

