import Sidebar from '@/components/sidebar'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex h-screen'>
        <Sidebar></Sidebar>
        <div className='flex flex-1 self-stretch'>
          <div className='flex-col flex self-stretch w-full h-screen'>
            {/* <div className='border-b'>
              <div className='flex h-16 items-center px-4'>
                <TeamSwitcher />
                <MainNav className='mx-6' />
                <div className='ml-auto flex items-center space-x-4'>
                  <Search />
                  <UserNav />
                </div>
              </div>
            </div> */}
            <div className='w-full flex-1 space-y-4 p-8 pt-6'>{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
