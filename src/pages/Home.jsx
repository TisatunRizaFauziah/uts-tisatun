import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-red-400 to-pink-500 text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">EXPLORE OUR CINEMATIC WORLD</h1>
                <p className="text-xl mb-8">Discover a Variety of Films & Quality Cinematic Experience</p>
                <Link to="/film">
                    <button className="bg-white text-red-500 hover:bg-red-700 hover:text-white py-3 px-6 rounded-lg shadow-lg transition duration-300">
                        View Our Films
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
