
# 📱 **Student Companion – Learning and Rewards Platform**  

## 📝 **Project Overview**  
**Student Companion** is a mobile-first educational app that offers quiz competitions, wallet rewards, and user activity tracking. This app integrates Google Authentication, Squad API for wallet management, and a Django backend. It also features a web-based admin dashboard for managing users and tracking quiz winners.  

---

## 🚀 **Project Repository Name Suggestion:**  
**`student-companion-suite`**  
A unified repository with three subdirectories:  
- `mobile-app/` (React Native)  
- `backend/` (Django)  
- `admin-dashboard/` (React + Tailwind)  

---

## 👥 **Team Members and Roles**  

### **Akolade – Mobile Frontend Developer & Team Lead (React Native)**  
- Leads the project, coordinates team efforts, and manages deadlines.  
- Develops the **React Native** mobile application.  
- Implements **Google Authentication** using Appwrite.  
- Manages user registration, login, and profile screens.  
- Displays wallet balances via API calls to the Django backend.  
- Implements quiz and leaderboard functionalities.  
- Integrates **Axios** for API calls.  
- Works closely with backend developers to finalize API structures.  

### **Justin – Backend Developer (Django)**  
- Designs the **Django REST API** for user management and quizzes.  
- Implements endpoints for user creation, wallet management, and quiz results.  
- Integrates the **Squad API** for wallet creation and transactions.  
- Sets up authentication and API security using Django REST Framework.  
- Develops models for Users, Quizzes, Scores, and Wallets.  
- Provides API documentation using **Swagger or Postman**.  

### **Ade – Backend Developer (Django)**  
- Collaborates with Justin to build additional backend features.  
- Implements quiz logic and result tracking.  
- Manages quiz competition scoring and leaderboard endpoints.  
- Develops endpoints for fetching winners based on quiz results.  
- Implements notifications for winners.  
- Ensures database optimization and API performance.  
- Handles database migrations and backups.  

### **Sultan – Web Frontend Developer (React + Tailwind)**  
- Develops an **Admin Dashboard** using React and TailwindCSS.  
- Displays a list of all users, quiz results, and wallet balances.  
- Implements filtering, searching, and sorting for users.  
- Adds admin controls for banning users or adjusting quiz scores.  
- Creates pages for viewing quiz winners and activity logs.  
- Fetches data from the Django backend using **Axios**.  
- Secures the dashboard with an admin login system.  

---

## 📂 **Project Structure**  
\`\`\`plaintext
student-companion-suite/
├── mobile-app/                # React Native Mobile App
├── backend/                   # Django Backend (API)
└── admin-dashboard/           # React Admin Dashboard
\`\`\`  

---

## 🔑 **Key Features**  

### 🟡 **Mobile App (React Native)**  
- **Google Authentication:** Users sign in using their Google accounts via Appwrite.  
- **Wallet Management:** Users can view their Squad wallet balance.  
- **Quiz Competitions:** Users can participate in quizzes.  
- **Leaderboard:** Displays top quiz performers.  
- **Profile Management:** Users can edit profiles and view achievements.  

### 🟢 **Backend API (Django)**  
- **User Management:** Create, update, and delete users.  
- **Wallet Integration (Squad API):** Automatically create wallets for users.  
- **Quiz Handling:** Create quizzes and store results.  
- **Leaderboard:** API to fetch top scorers.  
- **Admin Controls:** Endpoint for dashboard data.  
- **Security:** API authentication using JWT tokens.  

### 🟠 **Admin Dashboard (React + Tailwind)**  
- **User Analytics:** View user sign-ups and quiz performance.  
- **Quiz Results:** View recent quiz winners.  
- **Wallet Management:** View user balances.  
- **Admin Actions:** Ban users, reset scores, or award bonuses.  
- **Responsive Design:** Works on both mobile and desktop.  

---

## 🗂️ **API Endpoints Overview (Django)**  

<details>
<summary>🔐 Authentication Endpoints</summary>

- `POST /api/users/` – Create user from Appwrite login  
- `POST /api/token/` – Obtain JWT token  
- `POST /api/token/refresh/` – Refresh token  
- `GET /api/users/{id}/` – Get user details  
</details>  

<details>
<summary>💰 Wallet Endpoints (Squad API)</summary>

- `POST /api/wallet/create/` – Create a wallet for a user  
- `GET /api/wallet/{user_id}/` – Retrieve wallet balance  
- `POST /api/wallet/transfer/` – Transfer funds between wallets  
</details>  

<details>
<summary>🏆 Quiz & Leaderboard Endpoints</summary>

- `POST /api/quizzes/` – Create a new quiz  
- `GET /api/quizzes/{quiz_id}/` – Retrieve quiz details  
- `POST /api/quiz/submit/` – Submit quiz answers  
- `GET /api/leaderboard/` – View top performers  
</details>  

<details>
<summary>👨‍💼 Admin Endpoints</summary>

- `GET /api/admin/users/` – View all users  
- `GET /api/admin/winners/` – View quiz winners  
- `PATCH /api/admin/users/{id}/ban/` – Ban a user  
</details>  

---

## 🛠️ **Tech Stack**  

### 📱 Mobile App:  
- **Framework:** React Native  
- **UI:** TailwindCSS, Native Components  
- **Auth:** Appwrite (Google Auth)  
- **API:** Axios  
- **State Management:** React Context API  

### 🖥️ Backend API:  
- **Framework:** Django Rest Framework  
- **Database:** PostgreSQL  
- **Auth:** JWT (Simple JWT)  
- **External API:** Squad Wallet API  
- **Docs:** Swagger / Postman  

### 🧑‍💻 Admin Dashboard:  
- **Framework:** React.js  
- **UI Library:** TailwindCSS  
- **Charts:** Recharts or Chart.js  
- **API Handling:** Axios  

---

## 💾 **Development Environment Setup**  

### 📱 Mobile App (React Native)  
\`\`\`bash
cd mobile-app
npm install
npm start
\`\`\`  

### 🖥️ Backend (Django)  
\`\`\`bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
\`\`\`  

### 🧑‍💻 Admin Dashboard (React)  
\`\`\`bash
cd admin-dashboard
npm install
npm run dev
\`\`\`  

---

## 🧪 **Testing Plan**  
### ✅ **Mobile App:**  
- Test login (Google) flow  
- Test wallet balance display  
- Test quiz participation and submission  

### ✅ **Backend:**  
- Test API endpoints using **Postman**  
- Test user creation, wallet creation, and leaderboard endpoints  

### ✅ **Admin Dashboard:**  
- Test user analytics display  
- Test banning users and viewing winners  

---

## 📝 **Timeline (1 Month)**  

| Week | Task                          | Responsible      |
|------|-------------------------------|------------------|
| 1    | Set up repo & project structure | Akolade         |
| 1    | Backend: User & Wallet APIs   | Justin & Ade    |
| 2    | Mobile: Google Auth & User Profile | Akolade     |
| 2    | Backend: Quiz endpoints       | Justin & Ade    |
| 3    | Admin Dashboard (User list)   | Sultan          |
| 3    | Mobile: Quiz & Leaderboard    | Akolade         |
| 4    | Integration Testing           | All             |
| 4    | Bug Fixing & Deployment       | All             |

---

## 🚀 **Deployment Plan**  

| Platform | Service             |
|----------|---------------------|
| Backend  | Heroku or Railway   |
| Database | AWS RDS or Supabase |
| Mobile   | Play Store (Expo)   |
| Web      | Vercel or Netlify   |

---

## 📌 **Next Steps**  
- [ ] **Create GitHub Repo:** `student-companion-suite`  
- [ ] **Set Up CI/CD Pipelines** (GitHub Actions)  
- [ ] **Share API Documentation** with Frontend Developers  

---

**🚀 Let’s Build Something Great Together!** 💪🔥  
