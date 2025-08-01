# React Todo App Assignment

A modern, responsive Todo List application built with React and Vite. This project demonstrates fundamental React concepts including component architecture, state management, event handling, and modern CSS styling.

## 🚀 Features

- ✅ **Add Todos**: Type your task and press Enter to add new todos
- ✅ **Mark Complete**: Click checkbox to mark todos as completed/incomplete
- ✅ **Edit Todos**: Double-click on text or click Edit button to modify todos
- ✅ **Delete Todos**: Remove unwanted todos with the Delete button
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✅ **Modern UI**: Clean, intuitive interface with hover effects and animations

## 🛠️ Technologies Used

- **React 19.1.0** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with flexbox, animations, and responsive design
- **ESLint** - Code linting and quality assurance

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-todo-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── App.jsx          # Main application component
├── App.css          # Application styles
├── Header.jsx       # Header component
├── ToDoList.jsx     # Todo list container component
├── ToDoItem.jsx     # Individual todo item component
├── main.jsx         # Application entry point
└── index.css        # Global styles
```

## 🎯 Component Architecture

### App.jsx
- Main component managing the application state
- Handles all todo operations (add, delete, toggle, edit)
- Manages the list of todos using React's `useState` hook

### Header.jsx
- Simple presentational component displaying the app title

### ToDoList.jsx
- Container component that renders the list of todos
- Maps over todos array and renders individual ToDoItem components

### ToDoItem.jsx
- Individual todo item with full CRUD functionality
- Handles inline editing with save/cancel options
- Manages its own editing state

## 🎨 Key Features Explained

### Adding Todos
- Users can type in the input field and press Enter to add new todos
- Input validation ensures empty todos aren't added
- Each todo gets a unique ID based on timestamp

### Editing Todos
- Double-click on todo text to enter edit mode
- Click "Edit" button to enter edit mode
- Save changes with "Save" button or press Enter
- Cancel changes with "Cancel" button or press Escape

### Completing Todos
- Checkbox toggles completion status
- Completed todos get visual styling (strikethrough, opacity)

### Deleting Todos
- "Delete" button removes todos from the list
- Immediate removal with no confirmation (as per typical todo app UX)

## 🎭 Styling Features

- **Responsive Design**: Adapts to different screen sizes
- **Hover Effects**: Interactive elements respond to mouse hover
- **Smooth Animations**: Transitions for better user experience
- **Modern Color Scheme**: Clean, professional appearance
- **Accessible**: Good contrast ratios and focus indicators

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🚀 Deployment

The app can be deployed to various platforms:

1. **Build the project**:
```bash
npm run build
```

2. **Deploy the `dist` folder** to your preferred hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## 🔧 Development Notes

- Uses modern React functional components with hooks
- Follows React best practices for state management
- Implements proper component composition
- Uses controlled components for form inputs
- Follows consistent code formatting and naming conventions

## 📚 Learning Objectives

This project demonstrates:
- React component lifecycle and state management
- Event handling in React
- Conditional rendering
- List rendering with keys
- Component communication via props
- Modern CSS techniques
- Project structure and organization

## 👨‍💻 Author

Basant Saini

## 📄 License

This project is open source and available under the MIT License.
