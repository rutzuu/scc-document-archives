import { PageTitle } from '@/components/page-title'
import { Button } from '@/components/ui/button'

export default function ArchivesPage() {
  return (
    <>
      <div className='flex items-center justify-between space-y-2'>
        <PageTitle title={'Archives'} />
        <div className='flex items-center space-x-2'>
          <Button>Download</Button>
        </div>
      </div>
    </>
  )
}
