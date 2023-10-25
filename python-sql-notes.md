## Python3 + SQL for Technical Interviews

### String Operations
```python
# Concatenate Strings
result = str1 + str2

# String Length
length = len(string)

# String Slicing
substring = string[start_index:end_index]

# String Reversal
reversed_str = string[::-1]

# String to List of Characters
char_list = list(string)

# Count Occurrences
count = string.count(substring)

# Find Substring
index = string.find(substring)
```

### List Operations
```python
# Create Generic List
my_list = [None]*n

# Range (iteratable, but convert to list)
my_list = list(range(start_incl, end_excl))
my_list = list(range(end_excl))

# List Length
length = len(my_list)

# Append to List
my_list.append(element)

# Remove from List
my_list.remove(element)

# List Slicing
sublist = my_list[start_incl:end_excl]

my_string = "0123456"
my_string[2:5] # '234'
my_string[-6:-3] # '123'
my_string[:3] # Output: '012'
my_string[4:] # '456'
my_string[-5:-2] # Output: '234'

# List Comprehension
squared_numbers = [x**2 for x in iteratable] # iteratable = range(10), my_list, enumerate(my_list)

# Check if Element in List
is_present = element in my_list

# Sort List
sorted_list = sorted(my_list)

# Extend
list1.extend(list2)

# Check condition
any_true = any(x > 5 for x in my_list) 
all_true = all(x > 5 for x in my_list)

# Zip into Tupples
names = ['Alice', 'Bob', 'Charlie'] 
ages = [25, 30, 35] 
combined = list(zip(names, ages)) # [('Alice', 25), ...]

# Enumerate
list(enumerate(['A', 'B', 'C'])) # = [(0, 'A'), (1, 'B'), (2, 'C')]

for index, val in enumerate(my_list):
	print(f"Index: {index}, Value: {value}")

# Generator Expression (memory efficient iteratable)
squares_gen = (x**2 for x in range(10))
```

### Set/Dict Operations
```python
# Create Set
my_set = set()

# Create Non-Empty Set
my_set = {'element1', 'element2', 'element3'}

# Set Comprehention
my_set = {expression for item in iterable}

# Add to Set
my_set.add(element)

# Remove from Set
my_set.remove(element)

# Check if Element in Set
is_present = element in my_set

# Create Dictionary
my_dict = {}

# Create Non-Empty set
my_dict = {'key1': 'value1', 'key2': 'value2', 'key3': 'value3'}

# Access Dictionary Value
value = my_dict[key]

# Dictionary Keys
keys = my_dict.keys()

# Dictionary Values
values = my_dict.values()

# Delete Entry
del my_dict['key2']
```

### Other Data Structures
```python
# Queue
from collections import deque 

	queue = deque()
	
	# Enqueue (add to the end) 
	queue.append(element) 
	
	# Dequeue (remove from the front) 
	element = queue.popleft() 
	
	# Check if Queue is Empty 
	is_empty = not queue 
	
	# Size of Queue 
	size = len(queue)


# Stack
stack = []

	# Push (add to the top)
	stack.append(element)
	
	# Pop (remove from the top)
	element = stack.pop()
	
	# Peek (view the top element without removing)
	top_element = stack[-1]
	
	# Check if Stack is Empty
	is_empty = not stack


# Linked List (Singly)
class Node:
    def __init__(self, data=None):
        self.data = data
        self.next = None

	# Insert at the Beginning
	new_node.next = head
	head = new_node
	
	# Insert at the End
	current = head
	while current.next is not None:
	    current = current.next
	current.next = new_node
	
	# Delete Node
	previous.next = current.next


# Priority Queue using heapq
import heapq

	# Create an Empty Heap
	heap = []
	heapq.heapify(heap)
	
	# Push (add element with priority)
	heapq.heappush(heap, (priority, element))
	
	# Pop (remove and return the smallest element)
	element = heapq.heappop(heap)
	
	# Peek (view the smallest element without removing)
	top_element = heap[0]


# Tree Node
	# Binary Tree Node
	class TreeNode:
	    def __init__(self, value):
	        self.value = value
	        self.left = None
	        self.right = None
	
	# Tree Traversal (Inorder, Preorder, Postorder)
	def traversal(node):
	    if node:
			# Do Preorder stuff Here
	        traversal(node.left)
	        # Do Inorder stuff Here
	        traversal(node.right)
	        # Do Postorder stuff Here
```

### Functional Programming
```python
# Functional Programming

# Lambda Function
add = lambda x, y: x + y

# Map
my_list = [1, 2, 3, 4, 5]
squared_numbers = list(map(lambda x: x**2, my_list))

# Filter
even_numbers = list(filter(lambda x: x % 2 == 0, my_list))

# Map and Filter in a Chain
result = list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, my_list)))

# Reduce with Different Types and Initial Accumulator
from functools import reduce
concatenate_strings = lambda acc, value: acc + str(value)
result_string = reduce(concatenate_strings, my_list, "My List: ")
```

### Graph Algorithms (Pseudocode)
```python
# Breadth-First Search (BFS)
queue = []
visited = set()
while queue:
    node = queue.pop(0)
    if node not in visited:
        visited.add(node)
        queue.extend(graph[node] - visited)

# Depth-First Search (DFS)
def dfs(node, visited):
    visited.add(node)
    for neighbor in graph[node]:
        if neighbor not in visited:
            dfs(neighbor, visited)

# Dijkstra's Algorithm
import heapq
distances = {node: float('infinity') for node in graph}
distances[start] = 0
priority_queue = [(0, start)]
while priority_queue:
    current_distance, current_node = heapq.heappop(priority_queue)
    if current_distance > distances[current_node]:
        continue
    for neighbor, weight in graph[current_node].items():
        distance = current_distance + weight
        if distance < distances[neighbor]:
            distances[neighbor] = distance
            heapq.heappush(priority_queue, (distance, neighbor))
```

### SQL Basics
```sql
-- Select All Columns from a Table
SELECT * FROM table_name;

-- Select Specific Columns
SELECT column1, column2 FROM table_name;

-- Example 1: Rows where 'column1' is equal to 'value1' and 'column2' is greater than 10 
SELECT * FROM table_name WHERE column1 = 'value1' AND column2 > 10;

-- Example 2: Rows where 'column3' starts with 'prefix'
SELECT * FROM table_name WHERE column3 LIKE 'prefix%'; 

-- Example 3: Rows where 'column4' is either 'value2' or 'value3' 
SELECT * FROM table_name WHERE column4 IN ('value2', 'value3'); 

-- Example 4: Rows where 'column5' is not equal to 'value4' 
SELECT * FROM table_name WHERE NOT column5 = 'value4';

-- Order By
SELECT * FROM table_name ORDER BY column_name;

-- Aggregate Functions
SELECT COUNT(column_name) FROM table_name;
SELECT AVG(column_name) FROM table_name;
SELECT MAX(column_name) FROM table_name;
SELECT MIN(column_name) FROM table_name;
SELECT SUM(column_name) FROM table_name;

-- Query on Another Query with Aggregation 
-- Selects all countries from the result of the first query
-- where the country name starts with "United" and calculates the 
-- total revenue for these countries. 
SELECT SUM(revenue) as total_revenue 
FROM ( 
	SELECT * FROM your_table 
	WHERE country_name LIKE 'United%' 
) AS united_countries;

-- Join Tables 
-- Combines rows from table1 and table2 where the values in table1.column 
-- match the values in table2.column. The result includes all columns from 
-- both tables. If there is no match, the row is excluded from the result.
SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;

-- Insert into Table
INSERT INTO table_name (column1, column2, column3) VALUES (value1, value2, value3);

-- Insert with Default Values
INSERT INTO table_name DEFAULT VALUES;
```