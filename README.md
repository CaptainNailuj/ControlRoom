# ControlRoom

-Control room To do list application
    
    The idea is to create a To Do List application, a minimalist looking application that at least meets the following features and characteristics:


User-Friendly Interface:

    Intuitive and easy-to-use design with a clean and clutter-free interface.

Task Management:

    Create, edit, and delete tasks quickly.
    Support for due dates, start dates, deadlines, and recurring tasks.
    Ability to organize tasks into lists or categories for better organization.

Reminders and Notifications:

    Customizable reminders for due dates and times.

Priority and Labels:

    Options for setting task priorities (e.g., high, medium, low) and labels (e.g., work, personal, errands).
    Color-coded tags or labels for easy identification.


Style and look of the application

It should have a sober and minimalist appearance that allows the user to easily identify the tools


What are you going to see when you open the application?

the idea is to have a big board style screen where you can see little labels, you should be capable of changing the size of those labels
and write inside them with a little toolbar where you can change the style of the text

you should be able to move around the labels.

you should be able to set a timer on each label so you get a notification on your screen when the timer meet the deadline.

with just a button you can create new labels.


CHECKLIST STEP BY STEP

1- Create folder for components and the structure of the folder should look like this:

todo-app/
  ├── src/
  │    ├── components/
  │    │    ├── Toolbar.js
  │    │    ├── TodoBoard.js
  │    │    └── TodoItem.js
  │    ├── App.js
  │    ├── App.css
  │    └── index.js
  ├── package.json
  └── ...



2- Install the required library (you need to check documentation at https://www.npmjs.com/package/react-beautiful-dnd)

3- Create the toolbar component to contain your two buttons for creating  and deleting task

4-Create the TodoBoard.js component to represent the task board with two sections for "In Progress" and "Finished" tasks. we'll use the Beautiful dnd library for this. within the doc we can check the drag and drop feature.

5- Create the TodoItem.js component to represent each individual task as a draggable item within the "In Progress" and "Finished" sections.

6-Now, you can work your App.js component, which assembles everything! very important.

7-we know can check a render of a work in progress, we use the index.js to render app component.


nose que hijueputas.