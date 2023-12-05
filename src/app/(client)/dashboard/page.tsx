import Sidebar from '@/components/sidebar'
import { Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CalendarDateRangePicker } from '@/components/date-range-picker'
import { Overview } from '@/components/overview'
import { PageTitle } from '@/components/page-title'

// export const metadata: Metadata = {
//   title: 'Dashboard',
//   description: 'Example dashboard app built using the components.',
// }

export default function DashboardPage() {
  return (
    <>
      <div className='flex items-center justify-between space-y-2'>
        <PageTitle title={'Dashboard'} />
        <div className='flex items-center space-x-2'>
          <CalendarDateRangePicker />
          <Button>Download</Button>
        </div>
      </div>
      <Tabs
        defaultValue='overview'
        className='space-y-4'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='analytics'>Analytics</TabsTrigger>
          <TabsTrigger value='reports'>Reports</TabsTrigger>
        </TabsList>
        <TabsContent
          value='overview'
          className='space-y-4'>
          <Overview />
        </TabsContent>
        <TabsContent
          value='analytics'
          className='space-y-4'>
          <Overview />
        </TabsContent>
        <TabsContent
          value='reports'
          className='space-y-4'>
          <Overview />
        </TabsContent>
      </Tabs>
    </>
  )
}
