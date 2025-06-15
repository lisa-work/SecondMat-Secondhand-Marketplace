import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service'
import { useUser } from '@clerk/clerk-react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function OwnersDetail({itemDetail}) {

  const {user} = useUser();

  const navigate = useNavigate();

  const onMessageOwnerButtonClock=async()=>{
    const userId = user.primaryEmailAddress.emailAddress.split('@')[0];
    const ownerUserId=itemDetail?.createdBy.split('@')[0];

    try {
      
      await Service.CreateSendBirdUser(userId,user?.fullName,user?.imageUrl)
      .then(resp=> {
        console.log(resp);
      })
    } catch(e){}
    try{
      
      await Service.CreateSendBirdUser(ownerUserId, itemDetail?.userName, itemDetail?.userImageUrl)
      console.log(ownerUserId);

    } catch(e){}

    // Create Channel
    try {
      await Service.CreateSendBirdChannel([userId, ownerUserId], itemDetail?.listingTitle)
      .then(resp=> {
        console.log(resp);
        console.log("Channel Created");
        navigate('/profile');
      })
    } catch(e) {

    }
  }

  return (
    <div className="p-3 border rounded-xl shadow-md mt-1 lg:mt-7 hover:shadow-lg">
      
        <h2 className="font-bold text-green-800 text-2xl my-3">Owner's Contact</h2>

        <div className="flex flex-col xl:flex-row justify-start items-start">
          <img src="/UserImage.svg" className="w-[70px] h-[70px] rounded-full"/>
          <div className="flex flex-col justify-start">
          <h2 className="mt-2 font-bold text-xl text-gray-700">{itemDetail?.userName}</h2>
          <h2 className="mt-2 text-gray-500 hover:opacity-75 cursor-pointer">{itemDetail?.createdBy}</h2>
          </div>
        </div>

        <Link to={'/coming-soon'}>
                <Button 
                  className="w-full mt-6 bg-green-900 hover:bg-green-800 cursor-pointer">
                  <p className="text-md">Download our app to message the owner</p>
                </Button>
        </Link>
    </div>
  )
}

export default OwnersDetail