import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Secondhead from '../../components/Secondhead'
import useFetch from '../../hooks/useFetch'
import Swal from 'sweetalert2'
import axios from 'axios'

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
      html: '<h4>Please upload a zip folder of your proposal documents</h4>\n<p>The zipped folder should include all requiremnts under Eligibility Criteria</p>',
      input: 'file',
      confirmButtonColor: '#000000',
      confirmButtonText: 'Submit proposal',
      inputAttributes: {
        'accept': 'zip/',
        'aria-label': 'Upload your proposal document'
      }
    })
    
    if (file) {
      const userData = {
        data: {
          company_name: "Edilson Zau",
          company_email: "development@tololishop.com",
          phone_number: "0813307467",
          attached_file: file
        }
      };
      const token = "1a0ccb9075c50bc448a0781a7b50056dc6b0b77536de28a552f73bf7d7bb67e9372698bcec4ac93162f375c25faf165b6754843295c53e6a429cf5ec1bcee7e1053be6d6e73b4fa51cf4e5b572970415f03fd5191f672d00e6507d9ad9555218b4cd79e50c7bf976410efca748f588c2046dd2acccba1af7cde2d1060f3debff";

      await axios.post(`http://localhost:1337/api/bid-proposals`, userData, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((response) => {
        console.log("User data updated successfully", response.data);
        Swal.fire({
          title: 'Submited!',
          text: 'Your proposal has been successfuly submited.',
          icon: 'success',
          confirmButtonColor: '#000000',
        })
      })
      .catch((error) => {
        console.error("Error updating user data", error);
        Swal.fire({
          title: 'Error!',
          text: 'Your proposal could not be submited.',
          icon: 'error',
          confirmButtonColor: '#000000',
        })
      });

      
    }
  }
  
  return (
    <div>
      <Secondhead />
      <span className="link" onClick={goBack}><ion-icon name="arrow-back-outline"></ion-icon> Back</span>
      <div className="bid-request-card">
        <h2>{data.data.attributes.Company}: {data.data.attributes.request_title}</h2>
        <p><b>ID: </b>{data.data.id}</p>
        <p><b>Category: </b>{data.data.attributes.Category}</p>
        <p><b>Due Date: </b>{data.data.attributes.due_date}</p><br/>
        <h3>RFQ Description</h3>
        <p>{data.data.attributes.request_description}</p>
        <h3>Insturctions to Bidder</h3>
        <ol>
          <li>
            <h4>Rights of <b>{data.data.attributes.Company}</b></h4>
            <p>{data.data.attributes.Company} reserves the right:</p>
            <ol type='a'>
              <li>to split the contract as per the lowest evaluated cost per item, or</li>
              <li>to accept or reject any quotation approved by the regulator (NamCor); and</li>
              <li>to cancel the quotation process and reject all quotations at any time prior to contract award.</li>
            </ol>
          </li>
          <li>
            <h4>Preparation of Proposal</h4>
            <p>You are requested to quote for the items mentioned in Section III by completing, signing and returning:</p>
            <ol type='a'>
              <li>the Quotation Letter in Section II with its annex for Bid Securing Declaration.</li>
              <li>the List of Goods and Price Schedule Section III;</li>
              <li>the Specifications and Compliance Sheet in Section V; and</li>
              <li>any other attachment deemed appropriate.</li>
            </ol>
            <p>You are advised to carefully read the complete Request for Sealed Quotations document, including the Special Conditions of Contract in Section VII, before preparing your quotation. The standard forms in this document may be retyped for completion but the Bidder is responsible for their accurate reproduction.</p>
          </li>
          <li>
            <h4>Validity of Quotations</h4>
            The Quotation validity period shall be 60 days from the date of submission deadline.
          </li>
          <li>
            <h4>Eligibility Criteria</h4>
            <p>To be eligible to participate in this Quotation exercise, you should provide the following documents:</p>
            <ol type='A'>
              <li>a valid company Registration Certificate;</li>
              <li>an original valid good Standing Tax Certificate;</li>
              <li>an original valid good Standing Social Security Certificate;</li>
              <li>a valid certified copy of Affirmative Action Compliance Certificate, proof from Employment Equity Commissioner that bidder is not a relevant employer, or exemption issued in terms of Section 42 of the Affirmative Action Act, 1998;</li>
              <li>a certificate indicating SME Status (for Bids reserved for SMEs);</li>
              <li>An undertaking on the part of the Bidder that the salaries and wages payable to its personnel in respect of this proposal are compliant to the relevant laws, Remuneration Order, and Award, where applicable and that it will abide to sub-clause 4.6 of the General conditions of Contract if it is awarded the contract or part thereof; and</li>
            </ol>
          </li>
          <li>
            <h4>Evaluation of Quotations</h4>
            <p><b>{data.data.attributes.Company}</b> shall have the right to request for clarifications in writing during evaluation. Offers that are substantially responsive shall be compared on the basis of price or ownership cost, subject to Margin of Preference where applicable, to determine the lowest evaluated quotation.</p>
          </li>
          <li>
            <h4>Technical Compliance</h4>
            <p>Bidders shall submit along with their quotations documents, such as catalogues or any other literature to substantiate compliance with the required specifications and to qualify deviations if any with respect to NamPower’s requirements.</p>
            <p>The Specifications, Performance Requirements and Compliance Sheet details the minimum specifications of the goods/items to be supplied. The specifications have to be met but no credit will be given for exceeding the specifications.</p>
          </li>
          <li>
            <h4>Margin of Preference will be applied as per formula below:</h4>
            <p>A = (MP x BP)/100</p> 
            <p>Where:</p>
            <ol type='a'>
              <li>“A” represents the amount to be determined:</li>
              <li>“MP” represents the total percentage of all margins of preferences granted in respect and</li>
              <li>“BP” represents the bid price.</li>
            </ol>
          </li>
        </ol>
      </div>
      <button className='proposal_button' style={{marginBottom: "20px"}} onClick={buttonClick}>Place Proposal</button>
    </div>
  )
}
