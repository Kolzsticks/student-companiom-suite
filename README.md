# 📱 **Student Companion – Learning and Rewards Platform**  

## 📝 **Project Overview**  
**Student Companion** is a mobile-first educational app offering quiz competitions, wallet rewards, and user activity tracking. It integrates **Google Authentication**, **Squad API** for wallet management, and a **Django backend**, along with a **React Admin Dashboard** for user management and quiz tracking.

---

## 🚀 **Project Repository**  
**`student-companion-suite`** with three directories:
- `mobile-app/` (React Native)
- `backend/` (Django)
- `admin-dashboard/` (React + Tailwind)

---

## 👥 **Team Roles**  
- **Akolade – Mobile Frontend (React Native)**: Google Auth (Appwrite), quizzes, leaderboard, wallet display.
- **Justin – Backend (Django)**: User, quiz, and wallet APIs with Squad integration.
- **Ade – Backend (Django)**: Quiz logic, leaderboard, winner notifications.
- **Sultan – Web Frontend (React + Tailwind)**: Admin Dashboard for user management and quiz results.

---

## 📱 **Mobile Screens**  
- **Welcome**: Introduction to the app.
- **Login/Signup**: Google authentication via Appwrite.
- **Profile**: User profile and achievements.
- **Wallet**: View Squad wallet balance.
- **Savings**: Manage savings goals.
- **Quiz Lobby**: View upcoming and active quizzes.
- **Live Quiz**: Participate in real-time quizzes.
- **Quiz Result**: View performance and rewards.
- **Leaderboard**: See top quiz performers.
- **Achievements**: Track milestones and rewards.

---

## 🛠️ **Tech Stack Overview**  
**Mobile App (React Native):** Appwrite (Google Auth), Axios, Context API  
**Backend (Django):** Django REST Framework, PostgreSQL, JWT Auth, Squad API  
**Admin Dashboard (React):** TailwindCSS, Axios, Recharts

---

## 💾 **Setup Commands**  
**Mobile App:**  
```bash
cd mobile-app
npm install
npm start
```
**Backend:**  
```bash
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
**Admin Dashboard:**  
```bash
cd admin-dashboard
npm install
npm run dev
```

---

## 🧪 **Testing Plan**  
- **Mobile:** Test login, wallet balance, and quizzes.  
- **Backend:** API testing with Postman.  
- **Dashboard:** Test user analytics, winners, and admin actions.

---

## 📌 **Next Steps**  
- [ ] Create GitHub Repo: `student-companion-suite`
- [ ] Set Up CI/CD Pipelines (GitHub Actions)
- [ ] Share API Documentation with Frontend Developers

🚀 Let’s Build Something Great Together! 💪🔥
