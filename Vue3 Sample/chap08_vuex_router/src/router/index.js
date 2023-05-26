import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@views/HomeComp.vue'
import About from '@views/AboutComp.vue'
import GetContactList from '@views/GetContactList.vue'
import GetContact from '@views/GetContact.vue'
import AddContact from '@views/AddContact.vue'
import UpdateContact from '@views/UpdateContact.vue'
import UpdatePhoto from '@views/UpdatePhoto.vue'

const routes = [
  { path: '/',                name: 'home',     component:  Home},
  { path: '/About',           name: 'about',    component:  About},
  { path: '/GetContactList',  name: 'list',     component:  GetContactList},
  { path: '/GetContact/:no',  name: 'contact',  component:  GetContact,     props: true},
  { path: '/AddContact',      name: 'add',      component:  AddContact},
  { path: '/UpdateContact',   name: 'update',   component:  UpdateContact},
  { path: '/UpdatePhoto/:no', name: 'photo',    component:  UpdatePhoto,    props: true},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
