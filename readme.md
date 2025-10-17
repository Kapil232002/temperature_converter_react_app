## 🚀 Getting Started: Installation & Setup Guide

Follow these instructions carefully to get the project up and running on your local machine.

### Prerequisites

Please ensure you have the following software installed on your system:
*   *Python* (version 3.8 or newer)
*   *Node.js* and *npm* (version 16.x or newer)

### Step 1: Clone the Repository

Open your terminal or command prompt and clone this project from GitHub:

git clone https://github.com/Kapil232002/temperature_converter_react_app.git
cd temperature_converter_react_app


### Step 2: Set Up and Run the Backend (Django)

The backend server is the "brain" of the application.

1.  *Install Python Packages Globally*
    
⁠     pip install django-cors-headers
     ⁠

2.  *Run the Django Server*
    From the project's main directory (the one containing ⁠ manage.py ⁠), run:
    
⁠     python manage.py runserver
     ⁠
    Your backend API is now running at ⁠ http://127.0.0.1:8000 ⁠. *Keep this terminal window open.*

### Step 3: Set Up and Run the Frontend (React)

The frontend is what the user sees and interacts with. *Open a new terminal window* for these commands.

1.  *Navigate to the Frontend Directory*
    
⁠     cd temp_react_frontend
     ⁠

2.  *Install Node.js Packages*
    This will download all the necessary libraries for the React application.
    
⁠     npm install
     ⁠

3.  *Run the Frontend Development Server*
    
⁠     npm run dev
     ⁠
    Your React application will now start and automatically open in your default web browser at ⁠ http://localhost:5173 ⁠.

🎉 *Success!* The TemperatureScaler application is now fully set up and running on your local machine.

---

## 📁 Project Structure Overview

```
TEMPERATURE-CHECKING-APP/
├── temp/                  # Django App (Handles conversion logic)
│   ├── urls.py            # API URL routing
│   └── views.py           # The view that performs the conversion
├── temp_react_frontend/   # React Frontend (The User Interface)
│   ├── src/
│   │   ├── App.css        # All styling for the application
│   │   └── App.jsx        # The main React component with all UI and logic
│   └── vite.config.js     # Vite configuration, including the backend proxy
├── temperature/           # Main Django Project
│   ├── settings.py      # Project settings (CORS, installed apps)
│   └── urls.py          # Main URL router
└── manage.py              # Django's primary command-line tool