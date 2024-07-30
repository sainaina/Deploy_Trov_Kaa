import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, selectReviews, selectReviewsError, selectReviewsStatus } from '../../redux/feature/review/reviewSlice';
import { fetchServices, selectServices } from '../../redux/feature/service/serviceSlice';
import LoadingComponent from '../common/LoadingComponent';

const ProviderReview = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const status = useSelector(selectReviewsStatus);
  const error = useSelector(selectReviewsError);
  const services = useSelector(selectServices);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState('');

  useEffect(() => {
    console.log('Component mounted: Fetching reviews and services');
    dispatch(fetchReviews());
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    console.log('Reviews:', reviews);
    console.log('Services:', services); // Add logging
  }, [reviews, services]);

  const columns = [
    {
      name: 'Date',
      selector: row => new Date(row.created_at).toLocaleDateString(),
      sortable: true,
    },
    {
      name: 'User Name',
      selector: row => row.created_by,
      sortable: true,
    },
    {
      name: 'Service',
      selector: row => {
        const service = services.find(service => service.id === row.service);
        return service ? service.name : 'Unknown Service';
      },
      sortable: true,
    },
    {
      name: 'Rate',
      selector: row => row.rate_star,
      sortable: true,
    },
    {
      name: 'Comments',
      selector: row => row.comment,
      sortable: true,
    },
  ];

  const filteredReviews = reviews
    .filter(review =>
      services.some(service => service.id === review.service)
    )
    .filter(review =>
      review.created_by.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(review =>
      selectedService ? review.service.toString() === selectedService : true
    );

  if (status === 'loading') {
    return <LoadingComponent />;
  }

  if (status === 'failed') {
    return <div>Error: {typeof error === 'object' ? error.detail : error}</div>;
  }

  return (
    <section className="container mx-auto p-4 w-[1000px]">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-1/3"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <select
          className="border p-2 rounded w-1/3"
          value={selectedService}
          onChange={e => setSelectedService(e.target.value)}
        >
          <option value="">All Services</option>
          {services.map(service => (
            <option key={service.id} value={service.id.toString()}>{service.name}</option>
          ))}
        </select>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-4">List Reviews</h3>
        {filteredReviews.length > 0 ? (
          <DataTable
            columns={columns}
            data={filteredReviews}
            pagination
            highlightOnHover
            className="min-w-full bg-white"
          />
        ) : (
          <p>No reviews to display</p>
        )}
      </div>
    </section>
  );
};

export default ProviderReview;
