import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import Navbar from '../components/NavBar';
import { Avatar } from '@mui/material';
import Accountimg from '../assets/Account.png';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.log(e.message);
    }
  };

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(localStorage.getItem('profileImageUrl') || null);

  useEffect(() => {
    // Check if there is a profile image URL in local storage
    const storedImageUrl = localStorage.getItem('profileImageUrl');
    if (storedImageUrl) {
      setUrl(storedImageUrl);
    }
  }, []);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((imageUrl) => {
            setUrl(imageUrl);
            // Persist the image URL in local storage
            localStorage.setItem('profileImageUrl', imageUrl);
          })
          .catch((error) => {
            console.log(error.message, "error getting image URL");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message, "error uploading image");
      });
  };

  return (
    <div>
      <Navbar />
      <div className="w-full bg-white py-12 px-4">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2">
          
          <div className="flex flex-col justify-center">
            <div className="flex justify-center">
              <p className="mb-10 text-lg font-semibold">User Profile</p>
            </div>
            <div className="h-auto lg:w-[550px] md:w-[550px] sm:w-[500px] mx-auto bg-white shadow-md rounded-lg dark:bg-gray-800 dark:border-gray-700">
              <div className="flex justify-center">
                <Avatar
                  alt="Remy Sharp"
                  src={url}
                  sx={{ width: 100, height: 100 }}
                />
              </div>
              <div className="flex justify-center">
                <p>{user && user.email}</p>
              </div>
              <div className="px-4">
                <div className="grid grid-cols-2 py-4">
                  <input type="file" onChange={handleImageChange} />
                  <button onClick={handleSubmit}>Submit</button>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <p>Edit stuff on acc</p>
                  <p className="place-self-end">arrow</p>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <p>Edit stuff on acc</p>
                  <p className="place-self-end">arrow</p>
                </div>
                <div className="grid grid-cols-2 py-4">
                  <p>Edit stuff on acc</p>
                  <p className="place-self-end">arrow</p>
                </div>
              </div>
            </div>
          </div>
          <img className="md:w-[450px] sm:w-[300px] mx-auto my-4 overflow-hidden" src={Accountimg} alt="/" />
        </div>
      </div>
      <h1 className="text-2xl font-bold py-4">Account</h1>
      <button onClick={handleLogout} className="border px-6 py-2 my-4">
        Logout
      </button>
    </div>
  );
};

export default Account;
