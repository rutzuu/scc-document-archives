import {
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  CheckCircleIcon,
  CircleIcon,
  XCircleIcon,
  HelpCircleIcon,
  TimerIcon,
} from 'lucide-react'

export const labels = [
  {
    value: 'documentation',
    label: 'Documentation',
  },
  {
    value: 'form',
    label: 'Form',
  },
  {
    value: 'certificate',
    label: 'Certificate',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: 'Backlog',
    icon: HelpCircleIcon,
  },
  {
    value: 'todo',
    label: 'Todo',
    icon: CircleIcon,
  },
  {
    value: 'in progress',
    label: 'In Progress',
    icon: TimerIcon,
  },
  {
    value: 'done',
    label: 'Done',
    icon: CheckCircleIcon,
  },
  {
    value: 'canceled',
    label: 'Canceled',
    icon: XCircleIcon,
  },
]

export const priorities = [
  {
    label: 'Low',
    value: 'low',
    icon: ArrowDownIcon,
  },
  {
    label: 'Medium',
    value: 'medium',
    icon: ArrowRightIcon,
  },
  {
    label: 'High',
    value: 'high',
    icon: ArrowUpIcon,
  },
]
