import React, { useState, useMemo, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { RiSearchLine } from "react-icons/ri";

export const ManageReviewsComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const data = useMemo(() => [
        { id: 1, date: '7 July, 2024', providerName: 'Sun Nari', userName: 'Sok Borey', service: 'Plumbing Services', rate: 3, comments: 'Good' },
        { id: 2, date: '7 July, 2024', providerName: 'Ina Hogan', userName: 'Khann Teymeta', service: 'Steam Car Wash', rate: 5, comments: 'New test' },
        { id: 3, date: '7 July, 2024', providerName: 'Devin Harmon', userName: 'Adminh', service: 'Car Repair Services', rate: 2, comments: 'Quick service provided' },
        { id: 4, date: '7 July, 2024', providerName: 'Pi Ya', userName: 'Srey Pech', service: 'IT Course', rate: 4, comments: 'Review testing' },
        { id: 5, date: '7 July, 2024', providerName: 'ENO', userName: 'Chan Ni', service: 'Computer Repair', rate: 1, comments: 'Poor service' },
    ], []);

    const columns = useMemo(() => [
        { name: 'Date', selector: row => row.date, sortable: true },
        { name: 'Provider Name', selector: row => row.providerName, sortable: true },
        { name: 'User Name', selector: row => row.userName, sortable: true },
        { name: 'Service', selector: row => row.service, sortable: true },
        { name: 'Rate', selector: row => row.rate, sortable: true },
        { name: 'Comments', selector: row => row.comments, sortable: true },
    ], []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter(item =>
                    item.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.userName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.comments.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.date.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        }
    }, [searchQuery, data]);

    const customStyles = {
        header: {
            style: {
                minHeight: '56px',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f5f5f5',
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
            },
        },
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Reviews</h2>
            </div>
            <div className="flex justify-between mb-4">
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded"
                        aria-label="Search"
                    />
                    <RiSearchLine className="absolute left-3 top-3 text-gray-400" />
                </div>
            </div>
            <DataTable
                title={<div className="font-semibold">List Reviews</div>}
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
                paginationPerPage={6}
                paginationRowsPerPageOptions={[6, 12, 24]}
            />
        </div>
    );
};

export default ManageReviewsComponent;
