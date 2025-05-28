import React, { useState, useEffect, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Profile = () => {
  const { token } = useContext(ShopContext);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        // Updated to use the correct API endpoint structure and token format
        const response = await axios.get('http://localhost:4000/api/user/profile', {
          headers: { token }
        });
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile information');
        setLoading(false);
        toast.error('Failed to load profile information');
      }
    };

    fetchProfile();
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4">Please log in to view your profile</h2>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-800 mb-4"></div>
        <p className="text-lg">Loading profile information...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold mb-4 text-red-600">{error}</h2>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">My Profile</h1>
        </div>
        
        <div className="p-6">
          {profile && (
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                    <p className="text-lg font-medium">{profile.name}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                    <p className="text-lg font-medium">{profile.email}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                    <p className="text-lg font-medium">{profile.phone || 'Not provided'}</p>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Account Created</h3>
                    <p className="text-lg font-medium">
                      {profile.createdAt ? new Date(profile.createdAt).toLocaleDateString() : 'N/A'}
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Default Shipping Address</h3>
                    <p className="text-lg font-medium">
                      {profile.address ? (
                        <>
                          {profile.address.street}, {profile.address.city}, {profile.address.state} {profile.address.zipCode}
                        </>
                      ) : (
                        'No address saved'
                      )}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <button 
                  className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-md hover:from-gray-700 hover:to-gray-500 transition-all duration-300"
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
