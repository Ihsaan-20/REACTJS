import React, { useState } from 'react';

function DataSubmissionForm() {
  // State variables for form fields
  // Har input field ke liye alag state.
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');
  const [responseMessage, setResponseMessage] = useState(''); // API response ke liye

  // Handle form submission
  const handleSubmit = async (event) => {
    // Default form submission ko roko (jo page ko reload karta hai)
    event.preventDefault();

    // Data jo API ko bhejna hai
    const formData = {
      title: title,
      body: body,
      userId: parseInt(userId, 10), // userId ko integer mein convert karein
    };

    setResponseMessage('Submitting data...'); // Submission se pehle message dikhao

    try {
      // POST request to JSONPlaceholder dummy API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST', // Method POST hai
        headers: {
          'Content-Type': 'application/json', // Bata rahe hain ke data JSON format mein hai
        },
        body: JSON.stringify(formData), // JavaScript object ko JSON string mein badlein
      });

      // Agar response theek nahi hai
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Response ko JSON mein parse karein
      console.log('Success:', data);
      setResponseMessage('Data submitted successfully! See console for details.');
      // Optional: Form fields ko clear karein submission ke baad
      setTitle('');
      setBody('');
      setUserId('');

    } catch (error) {
      console.error('Error submitting data:', error);
      setResponseMessage(`Error: ${error.message}. Check console for more info.`);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Submit Your Data</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="title" style={{ display: 'block', marginBottom: '5px' }}>Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required // Yeh field zaroori hai
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="body" style={{ display: 'block', marginBottom: '5px' }}>Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required // Yeh field zaroori hai
            rows="5"
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="userId" style={{ display: 'block', marginBottom: '5px' }}>User ID:</label>
          <input
            type="number" // Number input
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required // Yeh field zaroori hai
            min="1" // Minimum value 1 ho sakti hai
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Submit Data
        </button>
      </form>

      {/* Response message dikhane ke liye */}
      {responseMessage && (
        <p style={{ marginTop: '20px', padding: '10px', backgroundColor: '#e9ecef', borderRadius: '5px' }}>
          {responseMessage}
        </p>
      )}
    </div>
  );
}

export default DataSubmissionForm;