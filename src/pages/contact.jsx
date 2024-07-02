import React from 'react';

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2">
                <div className="bg-red-500 text-white text-center py-4 px-6">
                    <h1 className="text-3xl font-semibold">Contact</h1>
                </div>
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">Tisatun Riza Fauziah</h2>
                    <p className="text-gray-700 mb-2"><strong>Tempat Tanggal Lahir:</strong> 07 April 2003</p>
                    <p className="text-gray-700 mb-2"><strong>Alamat:</strong> Jl. Mawar No. 123, Jakarta</p>
                    <p className="text-gray-700 mb-2"><strong>Email:</strong> tisatun@example.com</p>
                    <p className="text-gray-700 mb-2"><strong>Telepon:</strong> +62 812 3456 7890</p>
                    <p className="text-gray-700 mb-2"><strong>Pelatihan:</strong> Pelatihan React</p>
                    <p className="text-gray-700 mb-4"><strong>Instruktur:</strong> Siti Fitriyani</p>
                    <div className="flex justify-center mt-4">
                        <a href="https://www.linkedin.com/in/tisatun" className="text-blue-500 hover:text-blue-700 mx-2">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/tisatun" className="text-blue-500 hover:text-blue-700 mx-2">
                            Twitter
                        </a>
                        <a href="https://github.com/tisatun" className="text-blue-500 hover:text-blue-700 mx-2">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
