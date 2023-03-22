import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Regulatorpage() {
  const {loading, error, data} = useFetch('http://localhost:1337/api/bid-requests')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  
  const bid_details = data.data
  
  return (
    <div className='regulator'>
      <Sidebar />
      <div className='regulator-main'>
      <div className="dashboard">
        <h1>Welcome back</h1>
        <div className='analytics'>
          <div className='card'>
            <h2><ion-icon name="archive-outline" style={{color: "#ffc90a"}}></ion-icon>7.1K</h2>
            <span>Monthly Bids</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="time-outline" style={{color: "#ffc90a"}}></ion-icon>1.3K</h2>
            <span>Bids Pending Approval</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="checkmark-circle-outline" style={{color: "#ffc90a"}}></ion-icon>1.7K</h2>
            <span>Rewards Pending Approval</span>
          </div>
          <div className='card'>
            <h2><ion-icon name="close-circle-outline" style={{color: "#ffc90a"}}></ion-icon>234</h2>
            <span>New Users</span>
          </div>
        </div>
        <div className='all-bids'>
          <div className='all-bids-header'>
            <h2>Bids</h2>
            <Link to={"/contractor/bids_list"} style={{ textDecoration: 'none' }}><span>See all bids <ion-icon name="arrow-forward-outline"></ion-icon></span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[0].id}</span>
            <span>{bid_details[0].attributes.request_title}</span>
            <span>{bid_details[0].attributes.Category}</span>
            <span>{bid_details[0].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[0].attributes.due_date}</span>
            <Link to='/bid_detail/1' style={{ textDecoration: 'none'}}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
          <span>{bid_details[1].id}</span>
            <span>{bid_details[1].attributes.request_title}</span>
            <span>{bid_details[1].attributes.Category}</span>
            <span>{bid_details[1].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[1].attributes.due_date}</span>
            <Link to='/bid_detail/3' style={{ textDecoration: 'none'}}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[2].id}</span>
            <span>{bid_details[2].attributes.request_title}</span>
            <span>{bid_details[2].attributes.Category}</span>
            <span>{bid_details[2].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[2].attributes.due_date}</span>
            <Link to='/bid_detail/4' style={{ textDecoration: 'none'}}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[3].id}</span>
            <span>{bid_details[3].attributes.request_title}</span>
            <span>{bid_details[3].attributes.Category}</span>
            <span>{bid_details[3].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[3].attributes.due_date}</span>
            <Link to='/bid_detail/5' style={{ textDecoration: 'none'}}><span className='yellow-hover'>View details</span></Link>
          </div>
          <div className='dashboard-bid-card'>
            <span>{bid_details[4].id}</span>
            <span>{bid_details[4].attributes.request_title}</span>
            <span>{bid_details[4].attributes.Category}</span>
            <span>{bid_details[4].attributes.request_description.slice(0, 26)}...</span>
            <span>{bid_details[4].attributes.due_date}</span>
            <Link to='/bid_detail/6' style={{ textDecoration: 'none'}}><span className='yellow-hover'>View details</span></Link>
          </div>
        </div>
        <div className='announcements'>
          <h2 style={{marginTop: "40px"}}>Announcements</h2>
          <div className='announcements-card'>
            <h3>Scheduled Maintenance</h3>
            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
            <a href='#r' className='yellow-hover'>View more</a>
          </div>
          <div className='announcements-card'>
            <h3>New Features Now Available!</h3>
            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
            <a href='#r' className='yellow-hover'>View more</a>
          </div>
          <div className='announcements-card'>
            <h3>New Features Now Available!</h3>
            <p>Read this article to find out how to easily browse through bids and find ones that are perfect for you</p>
            <a href='#r' className='yellow-hover'>View more</a>
          </div><br />
        </div>
      </div>
      </div>
    </div>
  )
}
