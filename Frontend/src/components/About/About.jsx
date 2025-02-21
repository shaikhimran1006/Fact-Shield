import React, { useState } from "react";

export default function AboutUs() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 border-b-2 border-gray-900 pb-2 inline-block">
            ABOUT US - DIGIPROTECTOR & FACTSHIELD
          </h1>
          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              <span className="font-semibold text-gray-900">At DigiProtector,</span> we believe in the power of truth and transparency in the digital world. In today’s fast-paced, information-driven society, misinformation and fake news can spread rapidly, causing confusion and harm. That’s where FactShield comes in.
            </p>
            <p>
              <span className="font-semibold text-gray-900">What is FactShield?</span> FactShield is an innovative platform designed to detect and flag fake news and misleading content on social media and other online platforms. By leveraging advanced AI and machine learning technologies, FactShield analyzes social media posts, news articles, images, and videos to identify false or manipulated information.
            </p>

            {showMore && (
              <>
                <p>
                  <span className="font-semibold text-gray-900">Our goal</span> is to empower individuals, organizations, and media outlets with the tools they need to fight misinformation and ensure the integrity of the information they consume and share.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">How Does FactShield Work?</span> FactShield uses cutting-edge algorithms to:
                </p>
                <ul className="list-disc pl-6">
                  <li>Verify the credibility of news stories and social media content.</li>
                  <li>Detect inconsistencies and patterns commonly found in fake news.</li>
                  <li>Cross-reference content with verified and trusted sources.</li>
                  <li>Flag misleading images and videos through advanced analysis, ensuring they are not manipulated.</li>
                </ul>
                <p>
                  Our system is capable of working in real-time, making it easy for users to get instant feedback on the authenticity of the content they come across.
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Why Choose FactShield?</span>
                </p>
                <ul className="list-disc pl-6">
                  <li><span className="font-semibold">Accurate Detection:</span> Our AI model is trained to recognize the most subtle forms of misinformation.</li>
                  <li><span className="font-semibold">User-Friendly Interface:</span> FactShield is designed to be intuitive and easy to use for everyone, whether you’re an individual or part of an organization.</li>
                  <li><span className="font-semibold">Comprehensive Coverage:</span> From text to images and videos, FactShield handles all forms of online content.</li>
                  <li><span className="font-semibold">Committed to Truth:</span> At DigiProtector, we’re passionate about protecting the truth in the digital age.</li>
                </ul>
                <p>
                  <span className="font-semibold text-gray-900">Our Mission</span> We at DigiProtector are driven by the mission to combat the spread of fake news, promote digital literacy, and ensure a more informed online community. By using technology for good, we’re making the internet a safer place for everyone. With FactShield, we’re one step closer to a world where truth prevails over misinformation.
                </p>
              </>
            )}
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/team.jpg" // Update this path to the correct image location
            alt="About Us"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
