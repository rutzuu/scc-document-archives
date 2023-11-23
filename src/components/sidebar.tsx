'use client'

import {
  MoreVertical,
  Files,
  Settings,
  BookUser,
  GraduationCap,
  FileArchive,
  Home,
  PanelRightOpen,
  PanelLeftOpen,
} from 'lucide-react'
import { useContext, createContext, useState } from 'react'
import logo from 'public/scc-online-logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { SearchCommandComponent } from './search-command'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import LevelSwitcher from './level-switcher'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import DashboardPage from '@/app/(client)/dashboard/page'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const SidebarContext = createContext(true)

const sidebarItems = [
  { icon: Home, text: 'Home', active: true },
  { icon: BookUser, text: 'Student Info' },
  { icon: GraduationCap, text: 'Grades', alert: true },
  { icon: Files, text: 'Documents', alert: true },
  { icon: FileArchive, text: 'Archives', alert: true },
  { icon: Settings, text: 'Settings' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={clsx('h-screen transition-all', expanded ? 'sm:w-1/4 xl:w-1/6' : 'w-[86px]')}>
      <nav className='h-screen flex flex-col bg-background transition ease-in-out border-r shadow-sm'>
        <div className='border-t flex p-3 justify-between gap-2'>
          {/* <img
            src='https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true'
            alt=''
            className={clsx('w-10 h-10 rounded-md', expanded ? '' : 'mx-auto')}
          />
          <div
            className={clsx(
              'flex justify-between items-center overflow-hidden transition-all',
              expanded ? 'w-52 ml-3' : 'w-0'
            )}>
            <div className='leading-4'>
              <h4 className='font-semibold'>John Doe</h4>
              <span className='text-xs text-gray-600'>johndoe@gmail.com</span>
            </div>
          </div> */}
          <div className={clsx(expanded ? '' : 'hidden')}>
            <LevelSwitcher />
          </div>
          <div className={clsx(expanded ? '' : 'mx-auto')}>
            <ModeToggle />
          </div>
        </div>
        <div className='flex p-3 w-full'>
          <Button
            variant='outline'
            size='icon'
            className='w-full flex items-center justify-between px-2 cursor-pointer'
            asChild>
            <p className='text-sm text-muted-foreground'>
              <span className={clsx(expanded ? '' : 'hidden')}>Search...</span>
              <kbd
                className={clsx(
                  'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
                  expanded ? '' : 'mx-auto'
                )}>
                <span className='text-xs'>⌘</span>J
              </kbd>
            </p>
          </Button>
          <SearchCommandComponent />
        </div>
        <SidebarContext.Provider value={expanded}>
          <Accordion
            type='multiple'
            className='flex-1 px-3'>
            {sidebarItems.map((sidebarItem) => (
              <SidebarItem
                icon={sidebarItem.icon}
                text={sidebarItem.text}
                active={sidebarItem.active}
                alert={sidebarItem.alert}
              />
            ))}
            {/* <AccordionItem value='Dashboard'>
              <AccordionTrigger>Dashboard</AccordionTrigger>
              <AccordionContent>
                <Button>Test</Button>
              </AccordionContent>
            </AccordionItem> */}
          </Accordion>
          {/* <ul className='flex-1 px-3'>
            {sidebarItems.map((sidebarItem) => (
              <SidebarItem
                icon={sidebarItem.icon}
                text={sidebarItem.text}
                active={sidebarItem.active}
                alert={sidebarItem.alert}
              />
            ))}
          </ul> */}
        </SidebarContext.Provider>

        <div className='p-3 pb-2 flex justify-between items-center'>
          <Image
            src={logo}
            width={30}
            height={30}
            className={clsx('overflow-hidden transition-all rounded-md', expanded ? 'sm:w-12' : 'w-0')}
            alt=''
          />
          <Button
            variant='outline'
            size='icon'
            onClick={() => setExpanded((curr) => !curr)}
            className={clsx(expanded ? '' : 'mx-auto')}>
            {expanded ? <PanelRightOpen /> : <PanelLeftOpen />}
          </Button>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({
  icon: Icon,
  text,
  active,
  alert,
}: {
  icon: React.ComponentType<{ className?: string }>
  text: string
  active?: boolean
  alert?: boolean
}) {
  const expanded = useContext(SidebarContext)

  return (
    <AccordionItem
      className={clsx(
        'relative font-medium rounded-md cursor-pointer transition-colors group px-4',
        active ? 'bg-border text-foreground' : 'hover:bg-border text-muted-foreground'
      )}
      value={text}>
      <AccordionTrigger>
        <div className='flex justify-start'>
          <Icon className={clsx('w-6 h-6', expanded ? '' : 'mx-auto')} />
          <span className={clsx('overflow-hidden transition-all', expanded ? 'ml-3' : 'w-0')}>{text}</span>
          {alert && (
            <div className={clsx('absolute right-2 w-2 h-2 rounded bg-primary', expanded ? '' : 'top-2')}></div>
          )}

          {!expanded && (
            <div
              className={
                'absolute z-40 left-full rounded-md px-2 py-1 ml-2 bg-card text-popover-foreground border-2 border-accent text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
              }>
              {text}
            </div>
          )}
        </div>
      </AccordionTrigger>
      <AccordionContent>test</AccordionContent>
    </AccordionItem>
    // <li
    //   className={clsx(
    //     'relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group',
    //     active ? 'bg-border text-foreground' : 'hover:bg-border text-muted-foreground'
    //   )}>
    //   <Icon className={clsx('w-6 h-6', expanded ? '' : 'mx-auto')} />
    //   <span className={clsx('overflow-hidden transition-all', expanded ? 'w-52 ml-3' : 'w-0')}>{text}</span>
    //   {alert && <div className={clsx('absolute right-2 w-2 h-2 rounded bg-indigo-400', expanded ? '' : 'top-2')}></div>}

    //   {!expanded && (
    //     <div
    //       className={
    //         'absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
    //       }>
    //       {text}
    //     </div>
    //   )}
    // </li>
  )
}
