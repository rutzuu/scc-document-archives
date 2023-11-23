'use client'

import * as React from 'react'
import { Check, ChevronsUpDown, PlusCircle } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const groups = [
  {
    label: 'School Level',
    levels: [
      {
        label: 'Tertiary',
        value: 'tertiary',
      },
      {
        label: 'Secondary',
        value: 'secondary',
      },
      {
        label: 'Primary',
        value: 'primary',
      },
    ],
  },
]

type Level = (typeof groups)[number]['levels'][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface LevelSwitcherProps extends PopoverTriggerProps {}

export default function LevelSwitcher({ className }: LevelSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewLevelDialog, setShowNewLevelDialog] = React.useState(false)
  const [selectedLevel, setSelectedLevel] = React.useState<Level>(groups[0].levels[0])

  return (
    <Dialog
      open={showNewLevelDialog}
      onOpenChange={setShowNewLevelDialog}>
      <Popover
        open={open}
        onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant='outline'
            role='combobox'
            aria-expanded={open}
            aria-label='Select a level'
            className={cn('justify-between', className)}>
            <Avatar className='mr-2 h-5 w-5'>
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedLevel.value}.png`}
                alt={selectedLevel.label}
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className='pr-4'>{selectedLevel.label}</span>
            <ChevronsUpDown className='ml-auto h-4 w-4 shrink-0 opacity-50' />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandList>
              <CommandInput placeholder='Search level...' />
              <CommandEmpty>No level found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup
                  key={group.label}
                  heading={group.label}>
                  {group.levels.map((level) => (
                    <CommandItem
                      key={level.value}
                      onSelect={() => {
                        setSelectedLevel(level)
                        setOpen(false)
                      }}
                      className='text-sm'>
                      <Avatar className='mr-2 h-5 w-5'>
                        <AvatarImage
                          src={`https://avatar.vercel.sh/${level.value}.png`}
                          alt={level.label}
                          className='grayscale'
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {level.label}
                      <Check
                        className={cn(
                          'ml-auto h-4 w-4',
                          selectedLevel.value === level.value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
            <CommandList>
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewLevelDialog(true)
                    }}>
                    <PlusCircle className='mr-2 h-5 w-5' />
                    Create Team
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>Add a new team to manage products and customers.</DialogDescription>
        </DialogHeader>
        <div>
          <div className='space-y-4 py-2 pb-4'>
            <div className='space-y-2'>
              <Label htmlFor='name'>Team name</Label>
              <Input
                id='name'
                placeholder='Acme Inc.'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='plan'>Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder='Select a plan' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='free'>
                    <span className='font-me  dium'>Free</span> -{' '}
                    <span className='text-muted-foreground'>Trial for two weeks</span>
                  </SelectItem>
                  <SelectItem value='pro'>
                    <span className='font-medium'>Pro</span> -{' '}
                    <span className='text-muted-foreground'>$9/month per user</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            variant='outline'
            onClick={() => setShowNewLevelDialog(false)}>
            Cancel
          </Button>
          <Button type='submit'>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
