import React, { useState, useCallback } from "react";
import { Client, Storage, ID } from "appwrite";
import { useDropzone } from "react-dropzone";

// Initialize Appwrite
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
  .setProject("6786b37a000e1a5e8c68"); // Replace with your project ID

const storage = new Storage(client);

function VideoUpload() {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [urlInput, setUrlInput] = useState("");

  const uploadFile = async (file) => {
    try {
      setIsUploading(true);
      setError(null);

      // Create a preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);

      // Upload the file to Appwrite
      const response = await storage.createFile(
        "6786b6e90012a9d714fd", // Replace with your bucket ID
        ID.unique(),
        file
      );

      // Generate public URL for the uploaded file
      const fileUrl = storage.getFileView("videos", response.$id); // Replace with your bucket ID
      setVideoUrl(fileUrl);
      console.log("File uploaded successfully:", fileUrl);
    } catch (err) {
      setError(err.message);
      console.error("Upload failed:", err);
    } finally {
      setIsUploading(false);
    }
  };

  const uploadFromUrl = async (url) => {
    try {
      setIsUploading(true);
      setError(null);

      // Download the file from the URL and create a File object
      const response = await fetch(url);
      const blob = await response.blob();
      const file = new File([blob], "video.mp4", { type: blob.type });

      await uploadFile(file);
    } catch (err) {
      setError(err.message);
      console.error("Failed to upload from URL:", err);
    } finally {
      setIsUploading(false);
      setUrlInput(""); // Clear the URL input
    }
  };

  const onDrop = useCallback(
    async (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        await uploadFile(acceptedFiles[0]);
      }
    },
    [uploadFile]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "video/*": [".mp4", ".mov", ".avi", ".mkv"],
    },
    multiple: false,
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upload a video to detect</h1>
        <h2 className="text-4xl font-bold text-gray-900">
          <span className="text-red-700">Fake</span> or <span className="text-green-700">Real</span>
        </h2>
      </div>

      <div className="mt-12">
        {/* Drag-and-Drop Section */}
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 ${
            isDragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <div className="text-center">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Upload Video
            </button>
            <p className="mt-2 text-sm text-gray-600">or drop a video file</p>
          </div>
        </div>

        {/* URL Input Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (urlInput) uploadFromUrl(urlInput);
          }}
          className="mt-8"
        >
          <label htmlFor="urlInput" className="block text-lg font-medium text-gray-700">
            Upload via URL
          </label>
          <div className="flex gap-2 mt-2">
            <input
              id="urlInput"
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Enter video URL"
              className="flex-1 pl-2 rounded-md border-2 border-gray-400 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={!urlInput || isUploading}
            >
              Submit
            </button>
          </div>
        </form>

        {/* Upload Progress */}
        {isUploading && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-500 transition ease-in-out duration-150">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Uploading...
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && <div className="mt-4 text-center text-red-600">{error}</div>}

        {/* Preview Section */}
        {preview && (
          <div className="mt-8">
            <video
              src={preview}
              controls
              className="w-3xs h-auto mx-auto rounded-lg shadow-lg"
            ></video>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-1">
        <VideoUpload />
      </main>
    </div>
  );
}
