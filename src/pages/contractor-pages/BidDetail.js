import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Secondhead from '../../components/Secondhead'
import useFetch from '../../hooks/useFetch'
import Swal from 'sweetalert2'
// import axios from 'axios'

export default function BidDetail() {
  const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
  
  const { id } = useParams()
  const {loading, error, data} = useFetch(`http://localhost:1337/api/bid-requests/${id}`)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  async function buttonClick()  {
    const { value: file } = await Swal.fire({
      title: 'Place a proposal',
      text: 'Please upload your proposal document',
      input: 'file',
      confirmButtonColor: '#000000',
      confirmButtonText: 'Submit proposal',
      inputAttributes: {
        'accept': 'documents/*',
        'aria-label': 'Upload your proposal document'
      }
    })
    
    if (file) {
      // await axios.post(
      //   `http://localhost:1337/api/bid-proposals`,
      //   {
      //     data: {
      //       company_name: "Test Motor Company",
      //       company_email: "dannibuga@gmail.com",
      //       phone_number: "0818779053",
      //       attached_file: "",
      //     }
      //   },
      //   {
      //     headers: {
      //       Authorization: '1a0ccb9075c50bc448a0781a7b50056dc6b0b77536de28a552f73bf7d7bb67e9372698bcec4ac93162f375c25faf165b6754843295c53e6a429cf5ec1bcee7e1053be6d6e73b4fa51cf4e5b572970415f03fd5191f672d00e6507d9ad9555218b4cd79e50c7bf976410efca748f588c2046dd2acccba1af7cde2d1060f3debff'
      //     }
      //   },
        
      // ).then( ( response ) => {
      //   console.log( response )
        
      // } )
      // .catch();
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
      <span className="link" onClick={goBack}><ion-icon name="arrow-back-outline"></ion-icon> Back</span>
      <div className="bid-request-card">
        <h2>{data.data.attributes.request_title}</h2>
        <small>{data.data.attributes.Category}</small>
        <p>{data.data.attributes.request_description}</p>
      </div>
      <button className='proposal_button' onClick={buttonClick}>Place Proposal</button>
    </div>
  )
}
