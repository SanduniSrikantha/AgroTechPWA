import React from 'react'
import {useEffect} from 'react'
import { messaging } from '../firebase'
import {getToken} from 'firebase/messaging'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Cart1 from '../components/Cart1'


const Cart = () => {

  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if(permission === 'granted') {
      // token
      const token = await getToken(messaging, {vapidKey: 'BFov0C1YSRNkpLn9aKIIC6N8jh4gK9yWJKh88eUjueQB2ar7vJjYwa0iOzr3Obu-KoMEpux5cwmWpAhP7MBlkGA',})
      console.log('Token generated', token);
    } else if(permission === 'denied'){
      alert('You have denied notifications');

    }
  }

  useEffect(() => {
    // req for notif permission
    requestPermission()
  }, [])
  return (
    <div>
      <NavBar/>
      <Cart1/>
      <Footer/>
      
    </div>
  )
}

export default Cart

