import React, { useEffect, useState } from 'react'
import { App as SendbirdApp, SendBirdProvider } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import { useUser } from '@clerk/clerk-react';
import { GroupChannelList } from '@sendbird/uikit-react/GroupChannelList';
import { GroupChannel } from '@sendbird/uikit-react/GroupChannel';

function MyInbox() {
  
  const {user} = useUser();
  const [userId, setUserId] = useState();
  const [channelUrl, setChannelUrl] = useState();

  useEffect(()=>{
    if (user)
    {
      const id = (user.primaryEmailAddress?.emailAddress).split('@')[0];
      setUserId(id);
    }
  }, [user])

  return user && (
    <div>
      <title>Inbox</title>
      <link rel="icon" type="image/x-icon" href="/logo.svg"></link>
      <div style={{width:'100%', height:'500px' }}>

      <SendBirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID}
      userId={userId}
      nickname={user?.fullName}
      profileUrl={user?.imageUrl}
      allowProfileEdit={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 h-full w-full">
          {/* Channel List */}
          <div className="p-5 border shadow-lg">
            <GroupChannelList
            onChannelSelect={(channel) => {
              setChannelUrl(channel?.url)
            }}
            channelListQueryParams={
              {
                includeEmpty:true
              }
            }
            />
            
          </div>
          {/* Channel Message Area */}
          <div className="md:cols-span-2 shadow-lg md:w-[215%]">
            <GroupChannel channelUrl={channelUrl}/>
          </div>
        </div>

      </SendBirdProvider>

      {/* 
        This super smart component serves as a drop-in chat solution
        
        For advanced 🚀 customizations, use SendbirdProvider:
        https://sendbird.com/docs/chat/uikit/v3/react/essentials/sendbirdprovider
      */}
      
      {/* <SendbirdApp
        appId={import.meta.env.VITE_SENDBIRD_APP_ID}
        userId={'anonymous2'}
        accessToken={'99c4d33550abf10860034632b5d2119f625e93bc'} // Optional, but recommended
      /> */}
      </div>
    </div>
  )
}

export default MyInbox
