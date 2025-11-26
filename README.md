# Weather App (React + Vite)

This is a weather application built using **React**, **Vite**, and the **OpenWeather API**.  
The application includes a **login screen** and a **weather dashboard** that displays real-time weather information.

## Features

- **Login page** with dummy credentials (username: **malaka**, password: **1234**)
- **Search weather by city**
- Displays **temperature**, **humidity**, and **wind speed**
- Loads a **default city (Matugama)** on startup
- Uses **custom weather icons**
- Fetches live data from the **OpenWeather API**

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add your API key:

```env
VITE_APP_ID=openweather_api_key
```

### 3. Start the development server

```bash
npm run dev
```









