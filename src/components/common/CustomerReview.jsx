import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServiceReviews, selectReviews, selectReviewsStatus } from '../../redux/feature/review/reviewSlice';

const CustomerReview = ({ serviceId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const reviewsStatus = useSelector(selectReviewsStatus);

  useEffect(() => {
    if (serviceId) {
      dispatch(fetchServiceReviews(serviceId));
    }
  }, [dispatch, serviceId]);

  const filteredReviews = reviews.filter((review) => review.service === serviceId);

  if (reviewsStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (reviewsStatus === 'failed') {
    return <div>Error loading reviews</div>;
  }

  if (filteredReviews.length === 0) {
    return <div>No reviews available for this service.</div>;
  }

  return (
    <div>
      <div className="py-5 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
          <div className="w-full">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-11 pb-11 border-b border-gray-100 max-xl:max-w-2xl max-xl:mx-auto">
              <div className="box flex flex-col gap-y-4 w-full">
                {[
                  { rating: 5, count: 989, width: '30%' },
                  { rating: 4, count: 4500, width: '40%' },
                  { rating: 3, count: 50, width: '20%' },
                  { rating: 2, count: 16, width: '16%' },
                  { rating: 1, count: 8, width: '8%' },
                ].map((item, index) => (
                  <div className="flex items-center w-full" key={index}>
                    <p className="font-medium text-lg text-black mr-0.5">
                      {item.rating}
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589)">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className="h-2 w-full xl:min-w-[278px] rounded-3xl bg-amber-50 ml-5 mr-3">
                      <span
                        className="h-full rounded-3xl bg-amber-400 flex"
                        style={{ width: item.width }}
                      ></span>
                    </p>
                    <p className="font-medium text-lg text-black mr-0.5">
                      {item.count}
                    </p>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-amber-50 rounded-3xl flex items-center justify-center flex-col">
                <h2 className="font-manrope font-bold text-5xl text-amber-400 mb-6">
                  4.3
                </h2>
                <div className="flex items-center justify-center gap-2 sm:gap-6 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44"
                      height="44"
                      viewBox="0 0 44 44"
                      fill="none"
                      key={i}
                    >
                      <g clipPath="url(#clip0_13624_2608)">
                        <path
                          d="M21.1033 2.9166C21.4701 2.17335 22.5299 2.17335 22.8967 2.9166L28.233 13.729C28.3786 14.0241 28.6602 14.2287 28.9859 14.276L40.9181 16.0099C41.7383 16.1291 42.0658 17.137 41.4723 17.7156L32.8381 26.1318C32.6024 26.3616 32.4949 26.6926 32.5505 27.017L34.5888 38.9009C34.7289 39.7178 33.8714 40.3408 33.1378 39.9551L22.4653 34.3443C22.174 34.1911 21.826 34.1911 21.5347 34.3443L10.8622 39.9551C10.1286 40.3408 9.27114 39.7178 9.41125 38.9009L11.4495 27.017C11.5051 26.6926 11.3976 26.3616 11.1619 26.1318L2.52771 17.7156C1.93419 17.137 2.2617 16.1291 3.08192 16.0099L15.0141 14.276C15.3398 14.2287 15.6214 14.0241 15.767 13.729L21.1033 2.9166Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13624_2608)">
                          <rect width="44" height="44" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
                </div>
                <p className="font-manrope font-bold text-3xl text-amber-400">
                  Average Rating
                </p>
              </div>
            </div>
            <div className="mt-10">
              {filteredReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center mb-2">
                    <p className="font-medium text-lg text-black mr-2">
                      {review.rate_star}
                    </p>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_12042_8589)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill="#FBBF24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_12042_8589)">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <p className="text-gray-500 text-sm">{review.username}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;

