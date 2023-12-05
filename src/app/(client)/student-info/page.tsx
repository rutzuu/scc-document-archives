import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'
import { z } from 'zod'

import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { studentInfoSchema } from './_data/schema'
import { PlusCircleIcon } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Student Information',
  description: '',
}

// Simulate a database read for studentInfos.
async function getStudentInfo() {
  const data = await fs.readFile(path.join(process.cwd(), './src/app/(client)/student-info/_data/student-info.json'))

  const studentInfo = JSON.parse(data.toString())

  return z.array(studentInfoSchema).parse(studentInfo)
}

export default async function StudentInfoPage() {
  const studentInfo = await getStudentInfo()

  return (
    <>
      <div className='flex items-center justify-between space-y-2'>
        <PageTitle title={'Student Information'} />
        <div className='flex items-center space-x-2'>
          <Link href='/student-info/new'>
            <Button>
              <PlusCircleIcon className='mr-2 h-5 w-5' />
              Add Student
            </Button>
          </Link>
        </div>
      </div>
      {/* TODO: Add Search Student Information */}
      {/* TODO: Add Sort By Student Information */}
      {/* TODO: Add View By Student Information */}
      {/* TODO: Add Table Student Information */}
      {/* TODO: Table Headers: 
            Student Number
            Full Name(Last Name, First Name, Middle Initial)
            Course
            Year Level
            Section
            Status
        */}
      <div className='space-y-4'>
        <div className='h-full'>
          {/* <div className='flex items-center justify-between space-y-2'>
            <div>
              <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
              <p className='text-muted-foreground'>Here&apos;s a list of your tasks for this month!</p>
            </div>
            <div className='flex items-center space-x-2'>
              <UserNav />
            </div>
          </div> */}
          <DataTable
            data={studentInfo}
            columns={columns}
          />
        </div>
      </div>
    </>
  )
}
