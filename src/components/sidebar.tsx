'use client'

import {
  Files,
  Settings,
  BookUser,
  GraduationCap,
  FileArchive,
  Home,
  PanelRightOpen,
  PanelLeftOpen,
  ChevronDownIcon,
  SearchIcon,
} from 'lucide-react'
import { useContext, createContext, useState } from 'react'
import logo from 'public/scc-online-logo.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { SearchCommandComponent } from './search-command'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'
import LevelSwitcher from './level-switcher'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Separator } from './ui/separator'

const SidebarContext = createContext(true)

const sidebarItems = [
  { icon: Home, title: 'Home', path: '/dashboard' },
  {
    icon: BookUser,
    title: 'Student Info',
    path: '/student-info',
    submenu: true,
    subMenuItems: [
      { title: 'Primary', path: '/student-info/primary' },
      { title: 'Secondary', path: '/student-info/secondary' },
      { title: 'Tertiary', path: '/student-info/tertiary' },
    ],
  },
  {
    icon: GraduationCap,
    title: 'Grades',
    alert: true,
    path: '/grades',
    submenu: true,
    subMenuItems: [
      { title: 'Primary', path: '/grades/primary' },
      { title: 'Secondary', path: '/grades/secondary' },
      { title: 'Tertiary', path: '/grades/tertiary' },
    ],
  },
  { icon: Files, title: 'Documents', alert: true, path: '/documents' },
  {
    icon: FileArchive,
    title: 'Archives',
    alert: true,
    path: '/archives',
    submenu: true,
    subMenuItems: [
      { title: 'Primary', path: '/archives/primary' },
      { title: 'Secondary', path: '/archives/secondary' },
      { title: 'Tertiary', path: '/archives/tertiary' },
    ],
  },
  { icon: Settings, title: 'Settings', path: '/settings' },
]

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  return (
    <aside className={clsx('h-screen transition-all', expanded ? 'sm:w-1/4 xl:w-1/6' : 'w-[60px]')}>
      <nav className='fixed h-screen flex flex-col bg-background transition ease-in-out border-r shadow-sm p-2'>
        <div className='flex justify-between gap-2 mt-2 mb-3'>
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
        <Separator />
        <div className='flex w-full'>
          <Button
            variant='outline'
            size='icon'
            className='w-full flex my-3 items-center justify-between cursor-pointer'
            asChild>
            <p className='text-sm text-muted-foreground px-2'>
              <SearchIcon className={clsx(expanded ? '' : '')} />
              <span className={clsx(expanded ? '' : 'hidden')}>Search...</span>
              <kbd
                className={clsx(
                  'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100',
                  expanded ? '' : 'hidden'
                )}>
                <span className='text-xs'>⌘</span>J
              </kbd>
            </p>
          </Button>
          <SearchCommandComponent />
        </div>
        <SidebarContext.Provider value={expanded}>
          <div className='flex flex-1 flex-col space-y-2 pt-2'>
            {sidebarItems.map((sidebarItem) => (
              <SidebarItem
                icon={sidebarItem.icon}
                title={sidebarItem.title}
                alert={sidebarItem.alert}
                path={sidebarItem.path}
                submenu={sidebarItem.submenu}
                subMenuItems={sidebarItem.subMenuItems}
              />
            ))}
          </div>
          {/* <Accordion
            type='multiple'
            className='flex-1 px-3'>
            {sidebarItems.map((sidebarItem) => (
              <SidebarItem
                icon={sidebarItem.icon}
                title={sidebarItem.title}
                active={sidebarItem.active}
                alert={sidebarItem.alert}
                path={sidebarItem.path}
                submenu={sidebarItem.submenu}
                subMenuItems={sidebarItem.subMenuItems}
              />
            ))}
            <AccordionItem value='Dashboard'>
              <AccordionTrigger>Dashboard</AccordionTrigger>
              <AccordionContent>
                <Button>Test</Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion> */}
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

        <div className='py-2 flex justify-between items-center'>
          <Image
            src={logo}
            width={30}
            height={30}
            className={clsx('overflow-hidden transition-all rounded-md', expanded ? 'sm:w-12' : 'w-0')}
            alt=''
          />
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setExpanded((curr) => !curr)}
            className={clsx('text-muted-foreground', expanded ? '' : 'mx-auto w-full')}>
            {expanded ? <PanelRightOpen /> : <PanelLeftOpen />}
          </Button>
        </div>
      </nav>
    </aside>
  )
}

export function SidebarItem({
  icon: Icon,
  title,
  alert,
  path,
  submenu,
  subMenuItems,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  alert?: boolean
  path: string
  submenu?: boolean
  subMenuItems?: { title: string; path: string }[]
}) {
  const pathname = usePathname()
  const expanded = useContext(SidebarContext)
  const [subMenuOpen, setSubMenuOpen] = useState(false)
  const toggleSubMenu = () => setSubMenuOpen((curr) => !curr)

  return (
    <div className=''>
      {submenu ? (
        <>
          <Button
            onClick={toggleSubMenu}
            variant={pathname.includes(path) ? 'outline' : 'ghost'}
            className={clsx(
              'relative font-medium rounded-md cursor-pointer transition-colors group px-2 flex flex-row items-center w-full',
              pathname.includes(path) ? 'bg-border text-foreground' : 'hover:bg-border text-muted-foreground',
              expanded ? 'justify-between' : 'justify-center'
            )}>
            <div className='flex flex-row items-center'>
              <Icon className={clsx('w-6 h-6', expanded ? '' : 'mx-auto')} />
              <span className={clsx('overflow-hidden transition-all', expanded ? 'ml-3' : 'w-0')}>{title}</span>
              {alert && (
                <div
                  className={clsx(
                    'absolute right-4 w-2 h-2 rounded bg-primary',
                    expanded ? 'bottom-2 left-[1.9rem]' : 'top-6 right-[0.3rem]'
                  )}></div>
              )}
              {!expanded && (
                <div
                  className={
                    'absolute z-40 left-full rounded-md px-2 py-1 ml-2 bg-card text-popover-foreground border-2 border-accent text-xs invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
                  }>
                  {title}
                </div>
              )}
            </div>

            {expanded && (
              <div className={`${subMenuOpen ? 'rotate-180' : ''} flex`}>
                <ChevronDownIcon className='h-4 w-4' />
              </div>
            )}
          </Button>

          {subMenuOpen && (
            <div className='my-2 ml-2 flex flex-col'>
              {subMenuItems?.map((subItem, idx) => {
                return (
                  <Link
                    key={idx}
                    href={subItem.path}
                    className={clsx(
                      'w-full hover:bg-border rounded-md transition ease-in-out text-xs text-muted-foreground px-4 py-2',
                      subItem.path === pathname ? 'font-medium' : ''
                    )}>
                    <span>{subItem.title}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </>
      ) : (
        <Link href={path}>
          <Button
            variant={pathname.includes(path) ? 'outline' : 'ghost'}
            className={clsx(
              'relative font-medium rounded-md cursor-pointer transition-colors group px-2 flex flex-row items-center w-full justify-start',
              path === pathname ? 'bg-border text-foreground' : 'hover:bg-border text-muted-foreground'
            )}>
            <Icon className={clsx('w-6 h-6', expanded ? '' : 'mx-auto')} />
            <span className={clsx('overflow-hidden transition-all', expanded ? 'ml-3' : 'w-0')}>{title}</span>
            {alert && (
              <div
                className={clsx(
                  'absolute right-2 w-2 h-2 rounded bg-primary',
                  expanded ? 'bottom-2 left-[1.9rem]' : 'top-6 right-[0.3rem]'
                )}></div>
            )}
            {!expanded && (
              <div
                className={
                  'absolute z-40 left-full rounded-md px-2 py-1 ml-2 bg-card text-popover-foreground border-2 border-accent text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
                }>
                {title}
              </div>
            )}
          </Button>
        </Link>
      )}
    </div>
    // <AccordionItem
    //   className={clsx(
    //     'relative font-medium rounded-md cursor-pointer transition-colors group px-4',
    //     active ? 'bg-border text-foreground' : 'hover:bg-border text-muted-foreground'
    //   )}
    //   value={title}>
    //   <AccordionTrigger>
    //     <div className='flex justify-start'>
    //       <Icon className={clsx('w-6 h-6', expanded ? '' : 'mx-auto')} />
    //       <span className={clsx('overflow-hidden transition-all', expanded ? 'ml-3' : 'w-0')}>{title}</span>
    //       {alert && (
    //         <div className={clsx('absolute right-2 w-2 h-2 rounded bg-primary', expanded ? '' : 'top-2')}></div>
    //       )}

    //       {!expanded && (
    //         <div
    //           className={
    //             'absolute z-40 left-full rounded-md px-2 py-1 ml-2 bg-card text-popover-foreground border-2 border-accent text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0'
    //           }>
    //           {title}
    //         </div>
    //       )}
    //     </div>
    //   </AccordionTrigger>
    //   <AccordionContent>test</AccordionContent>
    // </AccordionItem>
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
