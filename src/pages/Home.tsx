import React from 'react'
import { Box } from '@mui/material'
import MonthlySummary from '../components/MonthlySummary'
import Caldendar from '../components/Caldendar'
import TransitionMenu from '../components/TransitionMenu'
import TransitionForm from '../components/TransitionForm'
import { Transaction } from '../types'

interface HomeProps {
  monthlyTransactions: Transaction[],
}

const Home = ({monthlyTransactions}: HomeProps) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ flexGrow: 1, }}>
        <MonthlySummary monthlyTransactions={monthlyTransactions}/>
        <Caldendar />
      </Box>

      <Box>
        <TransitionMenu />
        <TransitionForm />
      </Box>
    </Box>
  )
}

export default Home