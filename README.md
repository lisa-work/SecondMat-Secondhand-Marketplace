# 👋 About Me

Hi! I'm Ngoc Anh Thu, but I go by Lisa :>. I’ve just completed my first year in Information Technology, and this app is inspired by a MATLAB project I worked on last semester. Yes, you read that right — a MATLAB project inspired this web application!
More importantly, this project serves as a testing ground where I apply what I've learned so far. As such, you'll likely spot some flaws at first glance. Nevertheless, if you're looking for a challenge or an opportunity to improve a web app, I hope you enjoy exploring and building upon my work.

# 📦 Secondhand Marketplace Web App (SecondMat)
## Demo: https://secondhand-marketplace-web-app-8pnt.vercel.app/home
A full-stack web application that allows users to post, browse, and manage secondhand items for sale. (Yes, it's just that simple)

# 🚀 Features
🔐 User authentication via Clerk
📸 Upload and manage images with Firebase Storage
🛍️ Create, edit, move items to deleted listings and delete items permanently with rich details
📦 View all items in a responsive UI
🔎 Search and filter items (excluding items in deleted listing)
📅 Timestamped listings using Moment.js

# 🛠️ Tech Stack
**Frontend:** React + Tailwind CSS
**Backend/Database:** Firebase + Drizzle ORM
**Authentication:** Clerk
**Deployment:** Vercel
**Other:** Moment.js, Shadcn, Lucide Icons, Faker

# 🚧 Areas for Improvement
1. Implement sorting functionality to allow users to sort listings by price or view count, in both ascending and descending order
2. Integrate a chat feature (initial implementation used Sendbird, which has a 30-day trial limitation)
3. Enable real-time updates of listings based on selected search filters, eliminating the need to manually click the search icon.
4. Dynamically set the maximum price filter based on the highest price available in the current database (using Drizzle ORM).
5. Support multi-criteria search functionality
6. Ensure listing images reflect updates immediately after editing.
7. Enhance the responsiveness of the user interface to ensure optimal usability across various screen sizes and devices.
## ✅ Explore the web app and feel free to identify additional areas for improvement!

# ⚛️ React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
"# secondhand-marketplace-web-app" 
