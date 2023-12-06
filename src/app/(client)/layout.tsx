import LevelSwitcher from '@/components/level-switcher'
import { MainNav } from '@/components/main-nav'
import { Search } from '@/components/search'
import Sidebar from '@/components/sidebar'
import { UserNav } from '@/components/user-nav'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex'>
        {/* TODO: Fix Sidebar and Main Layout */}
        <Sidebar />
        <div className='flex-1 justify-stretch w-full min-h-screen'>
          <div className='w-full h-screen'>
            <div className='border-b'>
              <div className='flex h-16 items-center px-4'>
                <LevelSwitcher />
                <MainNav className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                  <Search />
                  <UserNav />
                </div>
              </div>
            </div>
            <div className='w-full space-y-4 p-8 pt-6'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
