# 📱 **EduQuest – Learn, Compete & Earn!**  

## 📝 **Project Overview**  
**EduQuest** is a fun and rewarding mobile app for students. It offers live quiz challenges where students can compete, win prizes, and save their earnings in a digital wallet. With reminders for classes and exciting competitions, EduQuest helps students learn, stay organized, and earn rewards—all in one app!  

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
eduquest-suite/
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
11. **Class Reminders** – Set and manage reminders for classes (New!)  

---

### 🧭 **Navigation Structure**  
The app uses a combination of **Bottom Tab Navigation** and **Stack Navigation** for seamless user experience:  

#### **Bottom Tab Navigation (Main Tabs):**  
- **🏠 Home** – Combines **Profile** and **Wallet** screens  
- **💰 Savings** – Manage in-app earnings and savings  
- **🎉 Quiz** – Access live quizzes and competitions  
- **🏆 Leaderboard** – View top performers and rankings  
- **⚙️ Settings** – App settings and preferences  

#### **Stack Navigation:**  
- **Login/Signup** – Authentication flow  
- **Quiz Details** – Navigate to specific quizzes  
- **Quiz Results** – View performance after quiz completion  
- **Class Reminders** – Set and manage reminders  

📌 **Implementation:**  
- Use **React Navigation** for both Bottom Tabs and Stack Navigation.  
- Ensure smooth transitions between screens and proper back navigation.  

---

## 🔑 **Key Features**  

### 🟡 **Mobile App (React Native)**  
- **Live Quiz Competitions:** Students can join real-time quizzes and compete for rewards  
- **Google Authentication:** Users sign in using their Google accounts via Appwrite  
- **Wallet Management:** Users can view their Squad wallet balance and transaction history  
- **Class Reminders:** Notifications to help students stay organized  
- **Savings Feature:** Students can save their quiz earnings for future use  
- **Leaderboard & Achievements:** Displays top performers and badges earned  

---

## 📅 **Class Reminders & Push Notifications**  

### **How Class Reminders Work in EduQuest**  
To integrate **class reminders**, we need:  
1. **A Screen to Set Reminders** (UI)  
2. **A Way to Store Reminders** (Database/API)  
3. **A Notification System** (Local & Push Notifications)  

---

### 📱 **1. UI - Class Reminder Setup**  
We'll create a **Class Reminders** screen where users can:  
✅ Add new reminders (class title, time, date, repeat option)  
✅ View upcoming reminders  
✅ Edit or delete reminders  

📌 **New Screen:** `ClassReminders.tsx`  
This screen will be accessible from the **Profile** or **Dashboard**.  

#### 🔹 **Class Reminders Screen (UI Features)**  
- **Input Fields:**  
  - Class Name  
  - Date & Time Picker  
  - Repeat Options (Daily, Weekly)  
  - Notification Type (Popup, Push Notification)  
- **Reminders List:** Shows upcoming reminders  
- **Delete/Edit Option:** Users can modify their reminders  

---

### 🛠 **2. Storing Reminders - Database/API**  
We have **two ways** to store the reminders:  
1. **Local Storage (AsyncStorage or SQLite)** → Works offline but is device-specific  
2. **Backend API (Django + PostgreSQL)** → Syncs reminders across devices  

📌 **Recommended Approach:** Store reminders **locally** and sync to the backend if logged in.  

#### 🔹 **API Endpoints (If Using Backend Storage)**  
- `POST /api/reminders/` → Save a new reminder  
- `GET /api/reminders/` → Fetch user reminders  
- `DELETE /api/reminders/{id}/` → Delete a reminder  

📌 If offline, we store in `AsyncStorage` and sync when online.  

---

### 🔔 **3. Implementing Notification Reminders**  
We’ll use **React Native Push Notifications** to alert users.  

#### **🔹 Local Notifications (For Offline Use)**  
We can use:  
- **Expo Notifications** (if using Expo)  
- **react-native-push-notification** (for bare React Native)  

📌 **Setup for Local Notifications:**  
1. Store reminder in AsyncStorage  
2. Use `setTimeout` to trigger notifications  
3. Display notification at the scheduled time  

```tsx
import PushNotification from "react-native-push-notification";

// Schedule Reminder Notification
const scheduleNotification = (title, date) => {
  PushNotification.localNotificationSchedule({
    message: `Reminder: ${title} starts soon!`,
    date: new Date(date), 
    allowWhileIdle: true, 
  });
};
```

---

#### **🔹 Push Notifications (For Online Users)**  
For **cloud-based reminders**, we need:  
- **Firebase Cloud Messaging (FCM)**  
- **Expo Push Notifications (If using Expo)**  

📌 **Steps for Push Notifications:**  
1. Users allow notifications  
2. Firebase stores their device token  
3. Django backend schedules notifications  
4. Firebase sends reminders to the user  

#### **Django Push Notification Example**  
```python
from firebase_admin import messaging

def send_notification(user_token, title, body):
    message = messaging.Message(
        notification=messaging.Notification(title=title, body=body),
        token=user_token,
    )
    response = messaging.send(message)
    return response
```

---

### ✅ **Final Implementation Plan**
| Feature          | Implementation |
|-----------------|---------------|
| **UI** | `ClassReminders.tsx` for setting reminders |
| **Local Storage** | `AsyncStorage` or `SQLite` for offline storage |
| **Notifications (Offline)** | `react-native-push-notification` for local alerts |
| **Backend API (If Needed)** | Django API to sync reminders across devices |
| **Push Notifications** | Firebase Cloud Messaging for remote notifications |

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

<details>
<summary>🔔 Reminder Endpoints (New!)</summary>

- POST /api/reminders/ – Save a new reminder  
- GET /api/reminders/ – Fetch user reminders  
- DELETE /api/reminders/{id}/ – Delete a reminder  
</details>  

---

## 🛠️ **Tech Stack**  

### 📱 Mobile App:  
- **Framework:** React Native  
- **UI:** TailwindCSS, Native Components  
- **Auth:** Appwrite (Google Auth)  
- **API:** Axios  
- **State Management:** React Context API  
- **Navigation:** React Navigation (Bottom Tabs + Stack)  
- **Notifications:** `react-native-push-notification` or Expo Notifications  

### 🖥️ Backend API:  
- **Framework:** Django Rest Framework  
- **Database:** PostgreSQL  
- **Auth:** JWT (Simple JWT)  
- **External API:** Squad Wallet API  
- **Push Notifications:** Firebase Cloud Messaging (FCM)  
- **Docs:** Swagger / Postman  

### 🧑‍💻 Admin Dashboard:  
- **Framework:** React.js  
- **UI Library:** TailwindCSS  
- **Charts:** Recharts or Chart.js  
- **API Handling:** Axios  

---

## 🧪 **Testing Plan**  
### ✅ **Mobile App:**  
- Test login (Google) flow  
- Test wallet balance display  
- Test quiz participation and submission  
- Test notifications for class reminders  
- Test navigation flow (Bottom Tabs + Stack)  

### ✅ **Backend:**  
- Test API endpoints using **Postman**  
- Test user creation, wallet creation, and leaderboard endpoints  
- Test reminder creation and notification scheduling  

### ✅ **Admin Dashboard:**  
- Test user analytics display  
- Test banning users and viewing winners  

---

## 📝 **Timeline (1 Month MVP)**  

| Week | Task                          | Responsible      |
|------|-------------------------------|------------------|
| 1    | Set up repo & project structure | Akolade         |
| 1    | Backend: User & Wallet APIs   | Justin & Ade    |
| 2    | Mobile: Google Auth & User Profile | Akolade     |
| 2    | Backend: Quiz endpoints       | Justin & Ade    |
| 3    | Admin Dashboard (User list)   | Sultan          |
| 3    | Mobile: Quiz & Leaderboard    | Akolade         |
| 3    | Mobile: Class Reminders UI    | Akolade         |
| 4    | Backend: Reminder Endpoints   | Justin & Ade    |
| 4    | Mobile: Notification System   | Akolade         |
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
- [ ] **Create GitHub Repo:** eduquest-suite  
- [ ] **Set Up CI/CD Pipelines** (GitHub Actions)  
- [ ] **Share API Documentation** with Frontend Developers  
- [ ] **Implement Class Reminders UI**  
- [ ] **Set Up Firebase for Push Notifications**  
- [ ] **Implement Navigation Structure** (Bottom Tabs + Stack)  

---

**🚀 Let’s Build EduQuest and Make Learning Fun & Rewarding!** 🎉  
