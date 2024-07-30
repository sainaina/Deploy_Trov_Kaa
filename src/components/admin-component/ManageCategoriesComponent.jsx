import React, { useState, useMemo, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { RiSearchLine } from "react-icons/ri";
import { FaPlus, FaTrashAlt, FaEdit } from 'react-icons/fa';
import AddCategoryPopup from './AddCategoryPopup';
import EditCategoryPopup from './EditCategoryPopup';
import DeleteCategoryConfirmation from './DeleteCategoryConfirmation';

export const ManageCategoriesComponent = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isAddCategoryPopupOpen, setIsAddCategoryPopupOpen] = useState(false);
    const [isEditCategoryPopupOpen, setIsEditCategoryPopupOpen] = useState(false);
    const [isDeleteConfirmationPopupOpen, setIsDeleteConfirmationPopupOpen] = useState(false);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    const data = useMemo(() => [
        { id: 1, category: 'Home Service', subCategory: 'Cleaning', date: '7 July, 2024', status: true },
        { id: 2, category: 'Auto Service', subCategory: 'Car Wash', date: '7 July, 2024', status: true },
        { id: 3, category: 'Restaurant', subCategory: 'Cafe', date: '7 July, 2024', status: true },
        { id: 4, category: 'Electronic', subCategory: 'Phone repair', date: '7 July, 2024', status: true },
        { id: 5, category: 'Education', subCategory: 'IT Course', date: '7 July, 2024', status: true },
    ], []);

    const columns = useMemo(() => [
        { name: 'Category', selector: row => row.category, sortable: true },
        { name: 'Sub Category', selector: row => row.subCategory, sortable: true },
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
                    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.subCategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
                backgroundColor: '#f5f5f5',
            },
        },
        headCells: {
            style: {
                fontWeight: 'bold',
            },
        },
    };

    const handleEditClick = (category) => {
        setCategoryToEdit(category);
        setIsEditCategoryPopupOpen(true);
    };

    const handleSaveEdit = (editedCategory) => {
        setFilteredData(filteredData.map(category => category.id === editedCategory.id ? editedCategory : category));
        setIsEditCategoryPopupOpen(false);
        setCategoryToEdit(null);
    };

    const handleDeleteClick = (category) => {
        setCategoryToDelete(category);
        setIsDeleteConfirmationPopupOpen(true);
    };

    const handleDeleteConfirm = () => {
        setFilteredData(filteredData.filter(category => category.id !== categoryToDelete.id));
        setIsDeleteConfirmationPopupOpen(false);
        setCategoryToDelete(null);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Category</h2>
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
                    onClick={() => setIsAddCategoryPopupOpen(true)}
                >
                    <FaPlus className="mr-2" /> Add Category
                </button>
            </div>
            <DataTable
                title={<div className="font-semibold">List Category</div>}
                columns={columns}
                data={filteredData}
                customStyles={customStyles}
                pagination
            />
            {isAddCategoryPopupOpen && <AddCategoryPopup onClose={() => setIsAddCategoryPopupOpen(false)} />}
            {isEditCategoryPopupOpen && categoryToEdit && (
                <EditCategoryPopup
                    category={categoryToEdit}
                    onClose={() => setIsEditCategoryPopupOpen(false)}
                    onSave={handleSaveEdit}
                />
            )}
            {isDeleteConfirmationPopupOpen && (
                <DeleteCategoryConfirmation
                    onClose={() => setIsDeleteConfirmationPopupOpen(false)}
                    onConfirm={handleDeleteConfirm}
                />
            )}
        </div>
    );
};

export default ManageCategoriesComponent;
