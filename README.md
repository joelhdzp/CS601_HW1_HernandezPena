# CS601 - Assignment 1: Interactive Web Form  
*Created by Joel Hernandez Pena*

## 📄 Project Description
This web application is a fully client-side interactive form built with HTML5, CSS3, and JavaScript. It demonstrates real-time validation, styled feedback, and DOM manipulation—showcasing key front-end web development skills as part of the CS601 course at Boston University.

---

## 📁 Project Structure
```
CS601_HW1_HernandezPena/
├── css/
│   └── main.css        → Styling for form layout, inputs, and summary feedback
├── js/
│   └── main.js         → JavaScript logic for form validation and DOM control
├── index.html          → Main HTML form interface
└── README.md           → Project overview and instructions
```

---

## 💡 Features
- Form with:
  - First Name and Last Name (minimum 2 letters)
  - Valid Email input (existing domain)
  - Dropdown for selecting a package (Bronze, Silver, Gold, or Platinum)
  - Newsletter subscription checkbox (required)
- Real-time validation using JavaScript with `RegEx`
- Error messages shown in a floating list to the right
- Summary displayed after successful form submission
- Automatic hiding of form and heading elements on success
- Clean, responsive styling with animations

---

## 🧪 How to Use
1. Open the `index.html` file in your browser
2. Fill in all required fields
3. Click **Submit**
- If there are any validation errors, they appear in a floating list on the right
- If successful, a personalized message is displayed and the form disappears

---

## 🧠 Concepts Demonstrated
- JavaScript DOM manipulation
- `addEventListener()` and event handling
- `preventDefault()` to intercept form behavior
- Arrow functions, `map()`, `filter()` for processing
- Form validation using Regular Expressions
- Layout with Flexbox and custom styles

---

## 🌐 GitHub Repository Setup
If you want to publish this project online:
1. Push the project folder to a public GitHub repository
2. Go to **Settings > Pages**
3. Set branch to `main` and folder to `/root`
4. Your form will be live at:  
   ```
   https://<your-github-username>.github.io/CS601_HW1_lastName/
   ```

---

## 📌 Author
**Joel Hernandez Pena**  
MET CS601 – Web Application Development  
Boston University
