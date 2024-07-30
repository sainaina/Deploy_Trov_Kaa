import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { FaEdit } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReviews, selectReviews, selectReviewsStatus } from '../../redux/feature/review/reviewSlice';
import { selectUser } from '../../redux/feature/user/userSlice';

const Review = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const reviewsStatus = useSelector(selectReviewsStatus);
  const user = useSelector(selectUser);
  const username = user?.username;

  const [searchQuery, setSearchQuery] = useState('');
  const [editingReview, setEditingReview] = useState(null);
  const [editedReview, setEditedReview] = useState({});

  useEffect(() => {
    if (reviewsStatus === 'idle') {
      dispatch(fetchReviews());
    }
  }, [reviewsStatus, dispatch]);

  const handleEditClick = (review) => {
    setEditingReview(review.id);
    setEditedReview(review);
  };

  const handleSaveClick = () => {
    const { rate } = editedReview;
    if (rate < 1 || rate > 5) {
      alert('Rating must be between 1 and 5');
      return;
    }
    // Implement save logic here, e.g., dispatch an update action
    setEditingReview(null);
  };

  const columns = [
    {
      name: t('Date'),
      selector: row => new Date(row.created_at).toLocaleDateString(),
      sortable: true,
    },
    {
      name: t('Service'),
      selector: row => row.service,
      sortable: true,
    },
    {
      name: t('Rate'),
      selector: row => row.rate_star,
      sortable: true,
    },
    {
      name: t('Cmt'),
      selector: row => row.comment,
      sortable: true,
    },
    {
      name: t('Action'),
      cell: row => (
        <FaEdit
          className="text-blue-500 inline mx-2 cursor-pointer "
          onClick={() => handleEditClick(row)}
        />
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const userReviews = reviews.filter(review => review.created_by === username);

  const filteredReviews = userReviews.filter(review =>
    Object.values(review).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <section className="container mx-auto p-4 w-[1000px] ">
      <h2 className="text-2xl font-bold mb-4">{t('Reviews')}</h2>
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search"
          className="border p-2 rounded w-1/3 dark:bg-gray-800"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="bg-white shadow rounded-lg p-4 dark:bg-gray-800">
        <h3 className="text-lg font-semibold mb-4 ">{t('List_Reviews')}</h3>
        {editingReview ? (
          <div className="mb-4">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 ">Rate</label>
              <input
                type="number"
                className="border p-2 rounded w-full"
                value={editedReview.rate}
                min={1}
                max={5}
                onChange={e => setEditedReview({ ...editedReview, rate: Math.max(1, Math.min(5, e.target.value)) })}
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Comments</label>
              <input
                type="text"
                className="border p-2 rounded w-full "
                value={editedReview.comments}
                onChange={e => setEditedReview({ ...editedReview, comments: e.target.value })}
              />
            </div>
            <button
              onClick={handleSaveClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        ) : (
          <DataTable
            columns={columns}
            data={filteredReviews}
            pagination
            highlightOnHover
            className="min-w-full bg-white "
          />
        )}
      </div>
    </section>
  );
};

export default Review;
