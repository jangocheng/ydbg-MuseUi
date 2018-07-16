import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = r => require.ensure([], () => r(require('@/views/Main')), 'Main')
const Demo = r => require.ensure([], () => r(require('@/views/Demo')), 'Demo')
const Home = r => require.ensure([], () => r(require('@/views/Home')), 'Home')
const MailList = r => require.ensure([], () => r(require('@/views/MailList')), 'MailList')
const Message = r => require.ensure([], () => r(require('@/views/Message')), 'Message')
const Schedule = r => require.ensure([], () => r(require('@/views/Schedule')), 'Schedule')
const Work = r => require.ensure([], () => r(require('@/views/Work')), 'Work')


/*muse*/
const Alert = r => require.ensure([], () => r(require('@/components/muse/Alert')), 'Alert')
const AppBar = r => require.ensure([], () => r(require('@/components/muse/AppBar')), 'AppBar')
const Avatar = r => require.ensure([], () => r(require('@/components/muse/Avatar')), 'Avatar')
const Badge = r => require.ensure([], () => r(require('@/components/muse/Badge')), 'Badge')
const BottomNavigation = r => require.ensure([], () => r(require('@/components/muse/BottomNavigation')), 'BottomNavigation')
const BottomSheet = r => require.ensure([], () => r(require('@/components/muse/BottomSheet')), 'BottomSheet')
const Breadcrumbs = r => require.ensure([], () => r(require('@/components/muse/Breadcrumbs')), 'Breadcrumbs')
const Buttons = r => require.ensure([], () => r(require('@/components/muse/Buttons')), 'Buttons')
const Card = r => require.ensure([], () => r(require('@/components/muse/Card')), 'Card')
const Carousel = r => require.ensure([], () => r(require('@/components/muse/Carousel')), 'Carousel')
const Chip = r => require.ensure([], () => r(require('@/components/muse/Chip')), 'Chip')
const DataTable = r => require.ensure([], () => r(require('@/components/muse/DataTable')), 'DataTable')
const Dialog = r => require.ensure([], () => r(require('@/components/muse/Dialog')), 'Dialog')
const Divider = r => require.ensure([], () => r(require('@/components/muse/Divider')), 'Divider')
const Drawer = r => require.ensure([], () => r(require('@/components/muse/Drawer')), 'Drawer')
const ExpansionPanel = r => require.ensure([], () => r(require('@/components/muse/ExpansionPanel')), 'ExpansionPanel')
const GridList = r => require.ensure([], () => r(require('@/components/muse/GridList')), 'GridList')
const Form = r => require.ensure([], () => r(require('@/components/muse/Form')), 'Form')
const DateInput = r => require.ensure([], () => r(require('@/components/muse/DateInput')), 'DateInput')
const Select = r => require.ensure([], () => r(require('@/components/muse/Select')), 'Select')
const SelectControls = r => require.ensure([], () => r(require('@/components/muse/SelectControls')), 'SelectControls')
const TextField = r => require.ensure([], () => r(require('@/components/muse/TextField')), 'TextField')
const AutoComplete = r => require.ensure([], () => r(require('@/components/muse/AutoComplete')), 'AutoComplete')
const List = r => require.ensure([], () => r(require('@/components/muse/List')), 'List')
const LoadMore = r => require.ensure([], () => r(require('@/components/muse/LoadMore')), 'LoadMore')
const Menu = r => require.ensure([], () => r(require('@/components/muse/Menu')), 'Menu')
const Pagination = r => require.ensure([], () => r(require('@/components/muse/Pagination')), 'Pagination')
const Paper = r => require.ensure([], () => r(require('@/components/muse/Paper')), 'Paper')
const DatePicker = r => require.ensure([], () => r(require('@/components/muse/DatePicker')), 'DatePicker')
const TimePicker = r => require.ensure([], () => r(require('@/components/muse/TimePicker')), 'TimePicker')
const Popover = r => require.ensure([], () => r(require('@/components/muse/Popover')), 'Popover')
const Progress = r => require.ensure([], () => r(require('@/components/muse/Progress')), 'Progress')
const SlidePicker = r => require.ensure([], () => r(require('@/components/muse/SlidePicker')), 'SlidePicker')
const Slider = r => require.ensure([], () => r(require('@/components/muse/Slider')), 'Slider')
const Snackbar = r => require.ensure([], () => r(require('@/components/muse/Snackbar')), 'Snackbar')
const Stepper = r => require.ensure([], () => r(require('@/components/muse/Stepper')), 'Stepper')
const SubHeader = r => require.ensure([], () => r(require('@/components/muse/SubHeader')), 'SubHeader')
const Tabs = r => require.ensure([], () => r(require('@/components/muse/Tabs')), 'Tabs')
const Tooltip = r => require.ensure([], () => r(require('@/components/muse/Tooltip')), 'Tooltip')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      redirect: '/main/demo',
      children: [
        {
          name: 'Demo',
          path: 'demo',
          component: Demo,
        },
        {
          name: 'Home',
          path: 'home',
          component: Home,
        },
        {
          name: 'MailList',
          path: 'mailList',
          component: MailList,
        },
        {
          name: 'Message',
          path: 'message',
          component: Message,
        },
        {
          name: 'Schedule',
          path: 'schedule',
          component: Schedule,
        },
        {
          name: 'Work',
          path: 'work',
          component: Work,
        },
      ],
    },

    /*muse*/
    {
      path: '/alert',
      name: 'Alert',
      component: Alert,
    },
    {
      path: '/app-bar',
      name: 'AppBar',
      component: AppBar,
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: Avatar,
    },
    {
      path: '/badge',
      name: 'Badge',
      component: Badge,
    },
    {
      path: '/bottom-navigation',
      name: 'BottomNavigation',
      component: BottomNavigation,
    },
    {
      path: '/bottom-sheet',
      name: 'BottomSheet',
      component: BottomSheet,
    },
    {
      path: '/breadcrumbs',
      name: 'Breadcrumbs',
      component: Breadcrumbs,
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons,
    },
    {
      path: '/card',
      name: 'Card',
      component: Card,
    },
    {
      path: '/carousel',
      name: 'Carousel',
      component: Carousel,
    },
    {
      path: '/chip',
      name: 'Chip',
      component: Chip,
    },
    {
      path: '/data-table',
      name: 'DataTable',
      component: DataTable,
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog,
    },
    {
      path: '/divider',
      name: 'Divider',
      component: Divider,
    },
    {
      path: '/drawer',
      name: 'Drawer',
      component: Drawer,
    },
    {
      path: '/expansion-panel',
      name: 'ExpansionPanel',
      component: ExpansionPanel,
    },
    {
      path: '/grid-list',
      name: 'GridList',
      component: GridList,
    },
    {
      path: '/form',
      name: 'Form',
      component: Form,
    },
    {
      path: '/date-input',
      name: 'DateInput',
      component: DateInput,
    },
    {
      path: '/select',
      name: 'Select',
      component: Select,
    },
    {
      path: '/select-controls',
      name: 'SelectControls',
      component: SelectControls,
    },
    {
      path: '/text-field',
      name: 'TextField',
      component: TextField,
    },
    {
      path: '/auto-complete',
      name: 'AutoComplete',
      component: AutoComplete,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
    {
      path: '/load-more',
      name: 'LoadMore',
      component: LoadMore,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: Pagination,
    },
    {
      path: '/paper',
      name: 'Paper',
      component: Paper,
    },
    {
      path: '/date-picker',
      name: 'DatePicker',
      component: DatePicker,
    },
    {
      path: '/time-picker',
      name: 'TimePicker',
      component: TimePicker,
    },
    {
      path: '/popover',
      name: 'Popover',
      component: Popover,
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress,
    },
    {
      path: '/slide-picker',
      name: 'SlidePicker',
      component: SlidePicker,
    },
    {
      path: '/slider',
      name: 'Slider',
      component: Slider,
    },
    {
      path: '/snackbar',
      name: 'Snackbar',
      component: Snackbar,
    },
    {
      path: '/stepper',
      name: 'Stepper',
      component: Stepper,
    },
    {
      path: '/subHeader',
      name: 'SubHeader',
      component: SubHeader,
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: Tabs,
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip,
    },


    {
      path: '*',
      redirect: '/'
    }
  ]
})
