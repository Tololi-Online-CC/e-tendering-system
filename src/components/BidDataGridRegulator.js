import React from 'react'
import useFetch from '../hooks/useFetch'
import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter, GridToolbarExport } from '@mui/x-data-grid'
import { useNavigate } from 'react-router-dom'

export function RegulatorDataGridPending() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', width: 45 },
        { field: 'request_title', headerName: 'Tittle', width: 150 },
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Company', headerName: 'Company', width: 100 },
        { field: 'request_description', headerName: 'Description', width: 300 },
        {
            field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <>
                    <button className='action-btn-review'>Review Application</button>
                    {/* <button className='action-btn-reject'>Reject</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function RegulatorDataGridAll() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'request_title', headerName: 'Tittle', width: 150 },
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Company', headerName: 'Company', width: 150 },
        { field: 'request_description', headerName: 'Description', width: 350 },
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(rowData) => navigate(`/bid_detail/${rowData.id}`)}
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function RegulatorDataGridRejected() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', width: 45 },
        { field: 'request_title', headerName: 'Tittle', width: 150 },
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Company', headerName: 'Company', width: 100 },
        { field: 'request_description', headerName: 'Description', width: 300 },
        {
            field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <>
                    <button className='action-btn-review'>Review Application</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(rowData) => navigate(`/bid_detail/${rowData.id}`)}
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}

export function RegulatorDataGridApproved() {
    const { loading, error, data } = useFetch('http://localhost:1337/api/bid-requests')
    const navigate = useNavigate();

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error</p>

    const columns = [
        { field: 'id', headerName: 'ID', width: 45 },
        { field: 'request_title', headerName: 'Tittle', width: 150 },
        { field: 'Category', headerName: 'Category', width: 150 },
        { field: 'Company', headerName: 'Company', width: 100 },
        { field: 'request_description', headerName: 'Description', width: 300 },
        {
            field: 'actions', headerName: 'Actions', width: 150, renderCell: (params) => {
                return <>
                    <button className='action-btn-view'>View Approved</button>
                    {/* <button className='action-btn-approve'>Approve</button> */}
                </>
            }
        }
    ]

    const rows = data.data.map((row) => ({
        id: row.id,
        request_title: row.attributes.request_title,
        Category: row.attributes.Category,
        Company: row.attributes.Company,
        request_description: row.attributes.request_description,
    }))



    function CustomToolbar() {
        return (
            <GridToolbarContainer className='grid-tool-bar'>
                <GridToolbarQuickFilter />
                <GridToolbarExport style={{ color: "black" }} />
            </GridToolbarContainer>
        );
    }

    return (
        <>
            <div style={{ width: "95%", height: "80vh", margin: "0 auto" }}>
                <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    checkboxSelection
                    disableRowSelectionOnClick
                    onRowClick={(rowData) => navigate(`/bid_detail/${rowData.id}`)}
                    slots={{
                        toolbar: CustomToolbar
                    }}
                    rows={rows}
                    columns={columns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    className='styled-table'
                />
            </div>
        </>
    )
}