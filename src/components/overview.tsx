'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { RecentDocuments } from './recent-documents'
import { BookUser, FileArchive, Files, GraduationCap } from 'lucide-react'

const data = [
  {
    name: 'Certificate',
    total: Math.floor(Math.random() * 100) + 100,
  },
  {
    name: 'Document',
    total: Math.floor(Math.random() * 100) + 100,
  },
  {
    name: 'Card',
    total: Math.floor(Math.random() * 100) + 100,
  },
  {
    name: 'Registration Form',
    total: Math.floor(Math.random() * 100) + 100,
  },
  {
    name: 'Miscellaneous',
    total: Math.floor(Math.random() * 100) + 100,
  },
  {
    name: 'Other',
    total: Math.floor(Math.random() * 100) + 100,
  },
]

export function Overview() {
  return (
    <>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Documents</CardTitle>
            <Files className='h-5 w-5 text-muted-foreground' />
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='h-4 w-4 text-muted-foreground'>
              <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
            </svg> */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>89</div>
            <p className='text-xs text-muted-foreground'>+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Students</CardTitle>
            <BookUser className='h-5 w-5 text-muted-foreground' />
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='h-4 w-4 text-muted-foreground'>
              <path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
              <circle
                cx='9'
                cy='7'
                r='4'
              />
              <path d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75' />
            </svg> */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>300</div>
            <p className='text-xs text-muted-foreground'>+180.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Grades</CardTitle>
            <GraduationCap className='h-5 w-5 text-muted-foreground' />
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='h-4 w-4 text-muted-foreground'>
              <rect
                width='20'
                height='14'
                x='2'
                y='5'
                rx='2'
              />
              <path d='M2 10h20' />
            </svg> */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-xs text-muted-foreground'>+19% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Archives</CardTitle>
            <FileArchive className='h-5 w-5 text-muted-foreground' />
            {/* <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              className='h-4 w-4 text-muted-foreground'>
              <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
            </svg> */}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>+573</div>
            <p className='text-xs text-muted-foreground'>+201 since last hour</p>
          </CardContent>
        </Card>
      </div>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className='pl-2'>
            <OverviewTable />
          </CardContent>
        </Card>
        <Card className='col-span-3'>
          <CardHeader>
            <CardTitle>Recent Documents</CardTitle>
            <CardDescription>You added 26 documents this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentDocuments />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

function OverviewTable() {
  return (
    <ResponsiveContainer
      width='100%'
      height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey='name'
          stroke='#888888'
          fontSize={14}
          tickLine={true}
          axisLine={true}
        />
        <YAxis
          stroke='#888888'
          fontSize={14}
          tickLine={true}
          axisLine={true}
          tickFormatter={(value) => `${value}`}
        />
        <Bar
          dataKey='total'
          fill='#dc2626'
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}
