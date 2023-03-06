import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Secondhead from '../../components/Secondhead'
import useFetch from '../../hooks/useFetch'
import Swal from 'sweetalert2'

export default function BidDetail() {
  const { id } = useParams()
  const {loading, error, data} = useFetch(`http://localhost:1337/api/bid-requests/${id}`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  async function buttonClick()  {
    const { value: file } = await Swal.fire({
      title: 'Upload File',
      text: 'Please upload your proposal document',
      input: 'file',
      confirmButtonColor: '#000000',
      inputAttributes: {
        'accept': 'documents/*',
        'aria-label': 'Upload your proposal document'
      }
    })
    
    if (file) {
      Swal.fire({
        title: 'Submited!',
        text: 'Your proposal has been successfuly submited.',
        icon: 'success',
        confirmButtonColor: '#000000',
      })
    }
}
  return (
    <div>
      <Secondhead />
      <Link to={"/operator/bids_list"} style={{ textDecoration: 'none' }} className="link"><span><ion-icon name="arrow-back-outline"></ion-icon> Back</span></Link>
      <div className="bid-request-card">
        <h2>{data.data.attributes.request_title}</h2>
        <small>{data.data.attributes.Category}</small>
        <p>{data.data.attributes.request_description}</p>
      </div>
      <button className='proposal_button' onClick={buttonClick}>Place Proposal</button>
    </div>
  )
}
