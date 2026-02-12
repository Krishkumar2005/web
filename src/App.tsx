import { useEffect, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './components/Home'



function App() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen)

  // Device data from "app"
  const [deviceData, setDeviceData] = useState<{ deviceId: string, status: string } | null>(null);

  

  // Sync handler
  const handleSync = () => {
     // Check UA dynamically at click
    const runningInApp = navigator.userAgent.includes('BentoShell');
    console.log('running app', runningInApp)
    if (!runningInApp) {
      console.log("Device sync not available on web");
      // Optional: Simulate device response
      setDeviceData({ deviceId: "WEB-TEST", status: "Simulated" });
    } else {
      // In real app, send postMessage to native side
      console.log('App is available')
      window.ReactNativeWebView.postMessage("sync");
    }
  };




  useEffect(() => {
  const handleMessage = (event: MessageEvent) => {
    try {
      console.log(event.data)
      const data = JSON.parse(event.data);
      setDeviceData(data); // update UI
      
    } catch {
      console.log("Invalid message received", event.data);
    }
  };

  // Listen for messages from mobile WebView
  window.addEventListener("message", handleMessage);

  return () => window.removeEventListener("message", handleMessage);
}, []);

// Detect environment dynamically (always accurate)
  const isApp = navigator.userAgent.includes('BentoShell');
  console.log('isApp ', isApp)


  return (
    <>
      {!isApp && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      {!isApp && <SideBar isOpen={isOpen} />}
      <Home isOpen={isOpen} deviceData={deviceData} handleSync={handleSync} />
      {!isApp && <Footer isOpen={isOpen} />}
    </>
  )
}

export default App
