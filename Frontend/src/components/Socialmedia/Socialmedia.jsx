import axios from "axios";
import React, { useState } from "react";

function InstagramLinkInput() {
    const [link, setLink] = useState("");
    const [imageurl, setimageurl] = useState("");
    const [status, setstatus] = useState('');
    const handleInputChange = (event) => {
        setLink(event.target.value);
    };
    const func = async () => {
        const res = await axios.post('http://192.168.50.72:3000/get-instagram-image', { postUrl: link });
        return res.data;

    }
    const func2 = async (img) => {
        const apiResponse = await axios.post('http://192.168.50.171:8080/api/detect/', {
            image_url: img
        });
        console.log(apiResponse.data.is_deepfake);
        return apiResponse.data.is_deepfake
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Instagram Post Link:", link);
        func().then((res) => {
            setimageurl(res.imageUrl);
            func2(res.imageUrl).then((res) => setstatus(res))
        })
        // You can add further logic to process the link
    };

    return (
        <div className="max-w-lg mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Enter Instagram Post Link</h1>
            </div>

            <form onSubmit={handleSubmit} className="mt-6">
                <input
                    type="url"
                    placeholder="Paste Instagram post link here..."
                    value={link}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <button
                    type="submit"
                    className="mt-4 w-full px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
            {imageurl && (
                <div className="flex gap-2.5 flex-col mt-2.5">
                    <img src={imageurl} alt="" className="w-2xl" />
                    <div
                        className={`text-3xl align-middle font-bold ${status === "fake" ? "text-red-500" : "text-green-500"
                            }`}
                    >
                        {status}
                    </div>


                </div>

            )}
        </div>
    );
}

export default function App() {
    return (
        <div className="App">
            <InstagramLinkInput />
        </div>
    );
}
