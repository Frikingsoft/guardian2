const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/locals/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Locals.vue') },
      { path: ':id', component: () => import('pages/LocalDetail.vue') },
      { path: 'edit/:id', component: () => import('pages/EditLocal.vue') },
      { path: 'create', component: () => import('pages/CreateLocal.vue') }
    ]
  },
  {
    path: '/outgoings/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Outgoings.vue') },
      { path: ':id', component: () => import('pages/OutgoDetail.vue') },
      { path: 'create', component: () => import('pages/CreateOutgo.vue') },
    ]
  },
  {
    path: '/incidents/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Incidents.vue') },
      { path: ':id', component: () => import('pages/IncidentDetail.vue') }
    ]
  },
  {
    path: '/schedules/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Schedules.vue') },
      { path: ':id', component: () => import('pages/ScheduleDetail.vue') },
      { path: 'edit/:id', component: () => import('pages/EditSchedule.vue') },
      { path: 'create', component: () => import('pages/CreateSchedule.vue') }
    ]
  },
  {
    path: '/employees/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Employees.vue') },
      { path: ':id', component: () => import('pages/EmployeeDetail.vue') },
      { path: 'edit/:id', component: () => import('pages/EditEmployee.vue') }
    ]
  },
  {
    path: '/registro',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Registro.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
