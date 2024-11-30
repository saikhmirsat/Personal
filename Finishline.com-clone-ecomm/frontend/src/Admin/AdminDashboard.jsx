import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Dashboard from './Dashboard'
import Inventory from './Inventory'
import Users from './Users'
import AddProducts from './AddProducts'
import './Styles/AdminDashboard.css'

export default function AdminDashboard() {
  return (
    <div id='admin-main-container'>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Dashboard</Tab>
          <Tab>Inventory</Tab>
          <Tab>Users</Tab>
          <Tab>Add Products</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Dashboard />
          </TabPanel>
          <TabPanel>
            <Inventory />
          </TabPanel>
          <TabPanel>
            <Users />
          </TabPanel>
          <TabPanel>
            <AddProducts />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
