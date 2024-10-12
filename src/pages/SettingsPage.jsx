import React from 'react'
import Profile from '../componets/settings/Profile'
import DangerZone from '../componets/settings/DangerZone'
import Header from '../componets/Common/Header'
import Notifications from '../componets/settings/Notifications'
import Security from '../componets/settings/Security'
import ConnectedAccounts from '../componets/settings/ConnectedAccounts'


const SettingsPage = () => {
    return (
		<div className='flex-1 overflow-auto relative z-10 bg-white text-custom-gray'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto py-6 px-4 lg:px-8'>
                <Profile />
                <Notifications />
                <Security />
                <ConnectedAccounts />
                <DangerZone />
            </main>
    </div>
  )
}

export default SettingsPage
