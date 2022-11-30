import React from "react";
import { useRecoilState } from 'recoil'
import './App.scss'
import { firebaseAppState } from "./state";
import { initializeApp } from "firebase/app";
import { FB_CONFIG } from './helpers/config';
import { Menu } from "./components";

export default function App() {
  const [firebaseApp, setFirebaseApp] = useRecoilState(firebaseAppState);

  React.useEffect(() => {
    if (!firebaseApp) {
      setFirebaseApp(initializeApp(FB_CONFIG));
    }
  }, []);
  
  return (
    <main>
      <div>
        React ⚛️ + Vite ⚡ + Replit 🌀
      </div>

      <Menu />
    </main>
  )
}
