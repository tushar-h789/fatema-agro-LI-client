import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetails = ({ match }) => {
  const productId = match.params.id;
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    // Fetch product details
    axios.get(`/products/${productId}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error('Error fetching product details:', error));

    // Fetch comments for the product
    axios.get(`/products/${productId}/comments`)
      .then((response) => setComments(response.data))
      .catch((error) => console.error('Error fetching comments:', error));
  }, [productId]);

  const handleAddComment = () => {
    // Add a new comment
    axios.post(`/products/${productId}/comments`, { text: newComment })
      .then((response) => {
        setComments([...comments, response.data]);
        setNewComment('');
      })
      .catch((error) => console.error('Error adding comment:', error));
  };

  return (
    <div>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          {/* Display other product details as needed */}
        </div>
      ) : (
        <p>Loading product details...</p>
      )}

      <div>
        <h3>Comments</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>{comment.text}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Add a Comment</h3>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Type your comment here..."
        />
        <button onClick={handleAddComment}>Submit Comment</button>
      </div>
    </div>
  );
};

export default ProductDetails;
