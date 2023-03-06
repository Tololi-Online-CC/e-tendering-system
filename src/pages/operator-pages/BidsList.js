import React from 'react'
import DataGridBid from '../../components/DataGrid'
import Secondhead from '../../components/Secondhead'
import useFetch from '../../hooks/useFetch'
// import { Link } from 'react-router-dom'

export default function BidsList() {
  const {loading, error} = useFetch('http://localhost:1337/api/bid-requests')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>


  return (
    <div>
      <Secondhead />
      <DataGridBid />
    </div>
  )
}
