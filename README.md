# 📱 **Student Companion – Learning and Rewards Platform**  

## 📝 **Project Overview**  
**Student Companion** is a mobile-first educational app that offers quiz competitions, wallet rewards, and user activity tracking. This app integrates Google Authentication, Squad API for wallet management, and a Django backend. It also features a web-based admin dashboard for managing users and tracking quiz winners.  

---

## 🎨 **Application Theme Colors**  
The app follows the **Bright Future** theme, designed to be youthful and motivational:  

- **Primary:** `#4CAF50` (Green – Represents growth and success)  
- **Secondary:** `#FF9800` (Orange – Warmth, creativity, and enthusiasm)  
- **Accent:** `#03A9F4` (Sky Blue – Trust, clarity, and focus)  
- **Background:** `#F5F5F5` (Light Gray – Soft, neutral canvas for content)  

This theme creates a fun and motivating learning experience, especially for students.  

---

## 📂 **Project Structure**  
```
student-companion-suite/
├── mobile-app/                # React Native Mobile App
├── backend/                   # Django Backend (API)
└── admin-dashboard/           # React Admin Dashboard
```

---

## 🖥️ **Screens & User Flow**  

### 📱 **Mobile App Screens**  
1. **Welcome Screen** – Introduction to the app with a motivational message  
2. **Login/Signup** – Google Authentication using Appwrite  
3. **Profile** – User details and profile settings  
4. **Wallet** – View Squad API wallet balance and transaction history  
5. **Savings** – Save and manage in-app earnings  
6. **Quiz Lobby** – Available quizzes and upcoming live events  
7. **Live Quiz** – Real-time quiz participation screen  
8. **Quiz Result** – Performance summary after quiz completion  
9. **Leaderboard** – Displays top performers based on quiz scores  
10. **Achievements** – Badges and accomplishments for engagement  

---

## 🔑 **Key Features**  

### 🟡 **Mobile App (React Native)**  
- **Google Authentication:** Users sign in using their Google accounts via Appwrite  
- **Wallet Management:** Users can view their Squad wallet balance  
- **Quiz Competitions:** Users can participate in quizzes  
- **Leaderboard:** Displays top quiz performers  
- **Profile Management:** Users can edit profiles and view achievements  

### 🟢 **Backend API (Django)**  
- **User Management:** Create, update, and delete users  
- **Wallet Integration (Squad API):** Automatically create wallets for users  
- **Quiz Handling:** Create quizzes and store results  
- **Leaderboard:** API to fetch top scorers  
- **Admin Controls:** Endpoint for dashboard data  
- **Security:** API authentication using JWT tokens  

### 🟠 **Admin Dashboard (React + Tailwind)**  
- **User Analytics:** View user sign-ups and quiz performance  
- **Quiz Results:** View recent quiz winners  
- **Wallet Management:** View user balances  
- **Admin Actions:** Ban users, reset scores, or award bonuses  
- **Responsive Design:** Works on both mobile and desktop  

---

## 🗂️ **API Endpoints Overview (Django)**  

<details>
<summary>🔐 Authentication Endpoints</summary>

- POST /api/users/ – Create user from Appwrite login  
- POST /api/token/ – Obtain JWT token  
- POST /api/token/refresh/ – Refresh token  
- GET /api/users/{id}/ – Get user details  
</details>  

<details>
<summary>💰 Wallet Endpoints (Squad API)</summary>

- POST /api/wallet/create/ – Create a wallet for a user  
- GET /api/wallet/{user_id}/ – Retrieve wallet balance  
- POST /api/wallet/transfer/ – Transfer funds between wallets  
</details>  

<details>
<summary>🏆 Quiz & Leaderboard Endpoints</summary>

- POST /api/quizzes/ – Create a new quiz  
- GET /api/quizzes/{quiz_id}/ – Retrieve quiz details  
- POST /api/quiz/submit/ – Submit quiz answers  
- GET /api/leaderboard/ – View top performers  
</details>  

<details>
<summary>👨‍💼 Admin Endpoints</summary>

- GET /api/admin/users/ – View all users  
- GET /api/admin/winners/ – View quiz winners  
- PATCH /api/admin/users/{id}/ban/ – Ban a user  
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
```bash
cd mobile-app
npm install
npm start
```

### 🖥️ Backend (Django)  
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### 🧑‍💻 Admin Dashboard (React)  
```bash
cd admin-dashboard
npm install
npm run dev
```

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
- [ ] **Create GitHub Repo:** student-companion-suite  
- [ ] **Set Up CI/CD Pipelines** (GitHub Actions)  
- [ ] **Share API Documentation** with Frontend Developers  

---

**🚀 Let’s Build Something Great Together!** 💪🔥  
