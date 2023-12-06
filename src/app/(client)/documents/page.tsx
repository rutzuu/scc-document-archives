import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'
import { promises as fs } from 'fs'
import path from 'path'
import { Metadata } from 'next'
import { z } from 'zod'

import { columns } from './_components/columns'
import { DataTable } from './_components/data-table'
import { documentSchema } from './_data/schema'

export const metadata: Metadata = {
  title: 'Documents',
  description: '',
}

// Simulate a database read for documents.
async function getDocuments() {
  const data = await fs.readFile(path.join(process.cwd(), './src/app/(client)/documents/_data/documents.json'))

  const documents = JSON.parse(data.toString())

  return z.array(documentSchema).parse(documents)
}

export default async function DocumentsPage() {
  const documents = await getDocuments()

  return (
    <>
      <div className='flex items-center justify-between space-y-2'>
        <PageTitle title={'Documents'} />
        <div className='flex items-center space-x-2'>
          <Button>Download</Button>
        </div>
      </div>
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
            data={documents}
            columns={columns}
          />
        </div>
      </div>
    </>
  )
}
