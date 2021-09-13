export const fetchReviews = (productId) =>
  $.ajax({
    method: "get",
    url: `/api/products/${productId}/reviews`,
  });

export const fetchReview = (reviewId, productId) =>
  $.ajax({
    method: "get",
    url: `/api/products/${productId}/reviews/${reviewId}`,
  });

export const createReview = (review, productId) =>
  $.ajax({
    method: "post",
    url: `/api/products/${productId}/reviews`,
    data: { review },
  });

export const deleteReview = (review, productId) =>
  $.ajax({
    method: "delete",
    url: `/api/products/${productId}/reviews/${review.id}`,
  });

export const updateReview = (review, productId) =>
  $.ajax({
    method: "patch",
    url: `/api/products/${productId}/reviews/${review.id}`,
    data: { review },
  });
