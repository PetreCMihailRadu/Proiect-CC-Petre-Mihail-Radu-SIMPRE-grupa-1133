import { useRouter } from "next/router";
import React, { useState } from "react";

const RecordForm = (props) => {
    const router = useRouter();
    const { entry, onSubmit } = props;
    const [data, setData] = useState(entry);

    const handleChange = (type, value) => {
        setData({ ...data, [type]: value });
    };

    const handleCancel = () => {
        router.push("/");
    }

    return (
        <div className="p-4">
    <div className="flex flex-col mx-auto max-w-80 border p-4 shadow-sn gap-4 w-full">
<div>
    <label 
    htmlFor="title" 
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
        Title
        </label>
    <input 
    type="title" 
    id="title" 
    value={data.title}
    onChange={(e) => handleChange('title', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Title task" 
    required 
    />
  </div>
  <div>
    
<label 
htmlFor="content" 
className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
    Content task
    </label>
<textarea 
id="Content" 
rows="4"
value={data.content} 
onChange={(e) => handleChange("content", e.target.value)}
className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
placeholder="Write your thoughts here..."
></textarea>

  </div>
  <div>
    <label 
    htmlFor="completed" 
    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
        Status task
        </label>
    <input 
    type="completed" 
    id="completed"
    value={data.completed} 
    onChange={(e) => handleChange('completed', e.target.value)}
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
    placeholder="Status task" 
    required 
    />
  </div>
  <div className="flex justify-center">
  
 <button 
 type="button" 
 onClick={handleCancel}
 className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
 >
    Cancel
    </button>
    <button
  type="button"
  onClick={() => onSubmit(data)}
  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  >
    {entry?._id ? "Update" : "Create"}
    </button>
  </div>
    </div>
    </div>
    );
};

export default RecordForm;