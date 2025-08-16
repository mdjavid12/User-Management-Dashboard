# User Management Dashboard (Live Demo)

[![Live Demo](https://img.shields.io/badge/demo-live-green?style=for-the-badge)](https://user-management-dashboard-berly.vercel.app/)  
*A React frontend for managing user data with mock API (JSONPlaceholder).*


## Key Features
- **CRUD Operations**: View, edit, and delete users in a responsive table.
- **Form Validation**: Modal with error handling for edits.
- **Mock API**: Uses [JSONPlaceholder](https://jsonplaceholder.typicode.com) (changes aren’t persisted).

## Tech Stack
- ⚛️ React (Vite)  
- 🔄 Axios for API calls  
- 🎨 DaisyUI/TailwindCSS for styling  

## How It Works
1. Fetches user data on page load.
2. Edit/delete actions trigger API calls (simulated).
3. Form validation prevents invalid submissions.

## For Developers (Optional)
To run locally:
```bash
git clone https://github.com/mdjavid12/User-Management_Dashboard.git
pnpm install
pnpm dev
