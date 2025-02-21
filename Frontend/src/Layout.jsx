import React from 'react';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Chatbot from './components/Chatbot/Chatbot'; // Import Chatbot

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Chatbot /> {/* This ensures the chatbot appears on all pages */}
            <Footer />
        </>
    );
}
