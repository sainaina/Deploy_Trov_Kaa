import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaCamera, FaUser, FaEnvelope, FaPhone, FaCalendar } from "react-icons/fa";
import { fetchProfile, fetchUpdateUser, selectAccessToken, selectError, selectStatus, selectUser } from '../../redux/feature/user/userSlice';
// import { fetchProfile, fetchUpdateUser, selectUser, selectStatus, selectError, selectAccessToken } from '../path/to/your/slice';

const SettingComponent = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const status = useSelector(selectStatus);
    const error = useSelector(selectError);
    const accessToken = useSelector(selectAccessToken);

    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (accessToken) {
            dispatch(fetchProfile(accessToken));
        }
    }, [dispatch, accessToken]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const initialValues = {
        firstName: user ? user.first_name : '',
        lastName: user ? user.last_name : '',
        email: user ? user.email : '',
        phone: user ? user.phone : '',
        dateOfBirth: user ? user.dob : '',
    };

    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        phone: Yup.string().required('Phone number is required'),
        dateOfBirth: Yup.date().required('Date of Birth is required'),
    });

    const handleSubmit = (values) => {
        if (accessToken) {
            dispatch(fetchUpdateUser({ token: accessToken, userData: values }))
                .then((result) => {
                    if (fetchUpdateUser.fulfilled.match(result)) {
                        console.log('Profile updated successfully:', result.payload);
                    } else {
                        console.error('Failed to update profile:', result.payload);
                    }
                });
        }
    };

    return (
        <div className='flex items-center justify-center p-4'>
            <div className='bg-white p-6 w-full max-w-lg'>
                <h2 className='text-center text-2xl font-bold mb-6'>Profile Settings</h2>
                <div className='flex flex-col items-center mb-6'>
                    <div className='relative w-24 h-24 bg-gray-200 rounded-full flex justify-center items-center cursor-pointer'>
                        {selectedImage ? (
                            <img src={selectedImage} alt="Profile" className='w-24 h-24 rounded-full object-cover' />
                        ) : (
                            <FaCamera className='text-gray-600 text-3xl' />
                        )}
                        <input
                            type='file'
                            accept='image/*'
                            className='absolute inset-0 opacity-0 cursor-pointer'
                            onChange={handleImageChange}
                        />
                    </div>
                    <span className='text-center text-gray-700 mt-2'>Add Photo</span>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ isSubmitting }) => (
                        <Form className='space-y-4'>
                            <div className='flex space-x-4'>
                                <div className='relative flex-1'>
                                    <label className='block text-gray-700'>First Name</label>
                                    <FaUser className='absolute left-3 top-9 text-gray-400' />
                                    <Field
                                        type='text'
                                        name='firstName'
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm' />
                                </div>
                                <div className='relative flex-1'>
                                    <label className='block text-gray-700'>Last Name</label>
                                    <FaUser className='absolute left-3 top-9 text-gray-400' />
                                    <Field
                                        type='text'
                                        name='lastName'
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm' />
                                </div>
                            </div>
                            <div className='relative'>
                                <label className='block text-gray-700'>Email</label>
                                <FaEnvelope className='absolute left-3 top-9 text-gray-400' />
                                <Field
                                    type='email'
                                    name='email'
                                    className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                />
                                <ErrorMessage name='email' component='div' className='text-red-500 text-sm' />
                            </div>
                            <div className='flex space-x-4'>
                                <div className='relative flex-1'>
                                    <label className='block text-gray-700'>Phone</label>
                                    <FaPhone className='absolute left-3 top-9 text-gray-400' />
                                    <Field
                                        type='text'
                                        name='phone'
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <ErrorMessage name='phone' component='div' className='text-red-500 text-sm' />
                                </div>
                                <div className='relative flex-1'>
                                    <label className='block text-gray-700'>Date of Birth</label>
                                    <FaCalendar className='absolute left-3 top-9 text-gray-400' />
                                    <Field
                                        type='date'
                                        name='dateOfBirth'
                                        className='w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    />
                                    <ErrorMessage name='dateOfBirth' component='div' className='text-red-500 text-sm' />
                                </div>
                            </div>
                            <div className='text-center'>
                                <button
                                    type='submit'
                                    className='bg-Secondary text-white px-4 py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                                    disabled={isSubmitting || status === 'loading'}
                                >
                                    Save
                                </button>
                            </div>
                            {status === 'failed' && <div className='text-red-500 text-center'>{error}</div>}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default SettingComponent;
