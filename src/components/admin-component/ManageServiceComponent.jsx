import React, { useState, useMemo, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { RiSearchLine } from "react-icons/ri";
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';
import AddServicePopup from './AddServicePopup';
import EditServicePopup from './EditServicePopup';
import DeleteServiceConfirmation from './DeleteServiceConfirmation';

export const ManageServicesComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isAddServicePopupOpen, setIsAddServicePopupOpen] = useState(false);
    const [isEditServicePopupOpen, setIsEditServicePopupOpen] = useState(false);
    const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] = useState(false);
    const [serviceToEdit, setServiceToEdit] = useState(null);
    const [serviceToDelete, setServiceToDelete] = useState(null);

    const data = useMemo(() => [
        { id: 1, service: 'Steam Car Wash', category: 'Home Service', subCategory: 'Plumbing', price: '$15', createBy: 'Pu Chhveng', date: '7 July, 2024', status: true },
        { id: 2, service: 'Steam Car Wash', category: 'Auto Service', subCategory: 'Car Wash', price: '$5', createBy: 'Pu Chhveng', date: '7 July, 2024', status: true },
        { id: 3, service: 'Steam Car Wash', category: 'Auto Service', subCategory: 'Car Wash', price: '$10', createBy: 'Pu Chhveng', date: '7 July, 2024', status: true },
    ], []);

    const columns = useMemo(() => [
        { name: 'Service', selector: row => row.service, sortable: true },
        { name: 'Category', selector: row => row.category, sortable: true },
        { name: 'Sub Category', selector: row => row.subCategory, sortable: true },
        { name: 'Price', selector: row => row.price, sortable: true },
        { name: 'Create By', selector: row => row.createBy, sortable: true },
        { name: 'Date', selector: row => row.date, sortable: true },
        {
            name: 'Status', cell: row => (
                <input type="checkbox" checked={row.status} readOnly className="toggle-input" />
            )
        },
        {
            name: 'Action', cell: row => (
                <div className="flex space-x-2">
                    <button className="text-blue-500" onClick={() => handleEditClick(row)}><FaEdit /></button>
                    <button className="text-red-500" onClick={() => handleDeleteClick(row)}><FaTrashAlt /></button>
                </div>
            )
        }
    ], []);

    useEffect(() => {
        if (searchQuery === '') {
            setFilteredData(data);
        } else {
            setFilteredData(
                data.filter(item =>
                    item.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.price.includes(searchQuery) ||
                    item.createBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.date.includes(searchQuery)
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
                // backgroundColor: '#f5f5f5',
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
            },
        },
    };

    const handleEditClick = (service) => {
        setServiceToEdit(service);
        setIsEditServicePopupOpen(true);
    };

    const handleSaveEdit = (editedService) => {
        setFilteredData(filteredData.map(service => service.id === editedService.id ? editedService : service));
        setIsEditServicePopupOpen(false);
        setServiceToEdit(null);
    };

    const handleDeleteClick = (service) => {
        setServiceToDelete(service);
        setIsDeleteConfirmationPopupOpen(true);
    };

    const handleDeleteConfirm = () => {
        setFilteredData(filteredData.filter(service => service.id !== serviceToDelete.id));
        setIsDeleteConfirmationPopupOpen(false);
        setServiceToDelete(null);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Services</h2>
            </div>
            <div className="flex justify-between mb-4">
                <div className="relative w-1/3">
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded"
                    />
                    <RiSearchLine className="absolute left-3 top-3 text-gray-400" />
                </div>
                <button
                    className="bg-Primary text-white px-4 py-2 rounded flex items-center"
                    onClick={() => setIsAddServicePopupOpen(true)}
                >
                    <FaPlus className="mr-2" /> Add Service
                </button>
            </div>
            <DataTable className=''
                title={<div className="font-semibold">List Services</div>}
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
            />
            {isAddServicePopupOpen && <AddServicePopup onClose={() => setIsAddServicePopupOpen(false)} />}
            {isEditServicePopupOpen && serviceToEdit && (
                <EditServicePopup
                    service={serviceToEdit}
                    onClose={() => setIsEditServicePopupOpen(false)}
                    onSave={handleSaveEdit}
                />
            )}
            {isDeleteConfirmationPopupOpen && (
                <DeleteServiceConfirmation
                    onClose={() => setIsDeleteConfirmationPopupOpen(false)}
                    onConfirm={handleDeleteConfirm}
                />
            )}
        </div>
    );
};

export default ManageServicesComponent;
