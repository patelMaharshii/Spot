# Booking Scheduler App

This project is a React Native application built using Expo, designed to allow users to schedule and manage their events. The app supports a two-week date picker for easy navigation and scheduling. It is integrated with [Supabase](https://supabase.com/) as the backend service for authentication, database, and real-time functionalities.

Authors: Maharshii Patel & Krish Mehta

---

## Features

- **Two-Week Date Picker**: Smooth navigation between days and weeks.
- **Event Management**: Add, edit, and delete events.
- **Supabase Integration**: User authentication and event data storage.
- **Responsive Design**: Optimized for iOS and Android devices.
- **Modern UI/UX**: Clean, intuitive, and user-friendly design.

---

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Supabase Project (Follow [Supabase setup guide](https://supabase.com/docs/))
- A code editor like [VS Code](https://code.visualstudio.com/)

---

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/booking-scheduler.git
cd booking-scheduler
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Supabase

1. Create a Supabase account and project.
2. Note down your **Supabase URL** and **Public API Key**.
3. Create a `.env` file in the root directory and add your Supabase credentials:
   ```env
   SUPABASE_URL=https://your-supabase-url.supabase.co
   SUPABASE_API_KEY=your-public-api-key
   ```

4. Set up the required database tables:
   - **Events Table**:
     ```sql
     CREATE TABLE events (
       id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
       user_id UUID REFERENCES auth.users (id),
       title TEXT NOT NULL,
       description TEXT,
       date TIMESTAMP NOT NULL,
       created_at TIMESTAMP DEFAULT now()
     );
     ```

### 4. Start the Development Server
```bash
npm start
```
- Use the Expo Go app on your iPhone or Android device to scan the QR code and preview the app.

---

## Project Structure

```
booking-scheduler/
├── assets/           # Image and font assets
├── components/       # Reusable React components
├── screens/          # Application screens
├── utils/            # Helper functions and constants
├── App.js            # Entry point of the app
├── .env              # Environment variables
└── README.md         # Project documentation
```

---

## Scripts

- **Start development server**:
  ```bash
  npm start
  ```
- **Run on iOS**:
  ```bash
  npm run ios
  ```
- **Run on Android**:
  ```bash
  npm run android
  ```
- **Build production-ready app**:
  ```bash
  expo build
  ```

---

## Supabase Integration

This app uses Supabase for:

1. **Authentication**: User login and registration.
2. **Database**: Storing user events.
3. **Real-time Updates**: Automatically update schedules as changes are made.

To integrate with Supabase:
- Install the Supabase client:
  ```bash
  npm install @supabase/supabase-js
  ```
- Initialize Supabase in your app:
  ```javascript
  import { createClient } from '@supabase/supabase-js';

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_API_KEY;
  export const supabase = createClient(supabaseUrl, supabaseKey);
  ```

---

## Technologies Used

- **Frontend**: React Native, Expo
- **Backend**: Supabase (PostgreSQL)
- **UI Components**: `react-native-swiper`, `react-native-vector-icons`
- **Date Management**: `moment.js`

---

## Future Improvements

- Add notifications for scheduled events.
- Offline data synchronization.
- Improved accessibility and internationalization support.
- Support for recurring events.

---

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for feature requests or bug fixes.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [Expo](https://expo.dev/) for providing an easy-to-use development platform.
- [Supabase](https://supabase.com/) for backend services.
- [React Native](https://reactnative.dev/) for enabling cross-platform development.

