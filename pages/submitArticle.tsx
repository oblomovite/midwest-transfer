import React from 'react';

const SubmitArticle: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Submit Article</h1>
      <p className="text-lg mb-2">
        To submit an article, please fill out the form below with the required information:
      </p>
      <form>
        <div className="mb-4">
          <label htmlFor="title" className="block font-semibold mb-1">
            Article Title
          </label>
          <input type="text" id="title" className="w-full px-4 py-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-semibold mb-1">
            Article Content
          </label>
          <textarea
            id="content"
            className="w-full px-4 py-2 border border-gray-300 rounded"
            rows={6}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmitArticle;
