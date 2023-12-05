'use client'

import { ColumnDef } from '@tanstack/react-table'

import { Checkbox } from '@/components/ui/checkbox'

import { schoolLevels, courses } from '../_data/data'
import { StudentInfo } from '../_data/schema'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

export const columns: ColumnDef<StudentInfo>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Student Number'
      />
    ),
    cell: ({ row }) => <div className='w-[40px]'>{row.getValue('id')}</div>,
    enableHiding: false,
  },
  {
    accessorKey: 'studentFullName',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Name'
      />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-[500px] truncate font-medium'>{row.getValue('studentFullName')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'schoolLevel',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='School Level'
      />
    ),
    cell: ({ row }) => {
      const schoolLevel = schoolLevels.find((schoolLevel) => schoolLevel.value === row.getValue('schoolLevel'))

      if (!schoolLevel) {
        return null
      }

      return (
        <div className='flex items-center'>
          {/* {schoolLevel.icon && <schoolLevel.icon className='mr-2 h-4 w-4 text-muted-foreground' />} */}
          <span>{schoolLevel.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'course',
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title='Course'
      />
    ),
    cell: ({ row }) => {
      const course = courses.find((course) => course.value === row.getValue('course'))

      if (!course) {
        return null
      }

      return (
        <div className='flex w-[100px] items-center'>
          {/* {course.icon && <course.icon className='mr-2 h-4 w-4 text-muted-foreground' />} */}
          <span>{course.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
