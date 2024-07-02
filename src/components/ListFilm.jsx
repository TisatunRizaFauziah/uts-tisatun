
import React, { useState } from "react";
import { Pencil, Delete, Info, Heart } from "lucide-react";

const ListFilm = ({ proopsFilm, onEdit, onDelete }) => {
    const { id, gambar, name, tahun, gendre, durasi, sinopsis } = proopsFilm;
    const [liked, setLiked] = useState(false);

    const handleEdit = () => {
        onEdit(id);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    const handleShowInfo = () => {
        alert(`Judul: ${name}\nGendre: ${gendre}\nDurasi: ${durasi}\nSinopsis: ${sinopsis}`);
    };

    const handleToggleLike = () => {
        setLiked(!liked);
    };

    return (
        <div className="border p-8 w-72 h-auto m-1 shadow-lg rounded-lg">
            <img src={gambar} className="mx-auto w-1/2 h-48 mb-4" alt={name} />
            <h1 className="text-center font-semibold text-xl mb-2">{name}</h1>
            <p className="text-center text-gray-700 mb-4">Tahun Rilis : {tahun}</p>
            <div className="flex justify-around gap-2">
                <button onClick={handleShowInfo} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:shadow-lg">
                    <Info />
                </button>
                <button onClick={handleEdit} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 hover:shadow-lg">
                    <Pencil />
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 hover:shadow-lg">
                    <Delete />
                </button>
                <button onClick={handleToggleLike} className="px-4 py-2 rounded hover:shadow-lg flex items-center justify-center">
            <Heart className={`w-6 h-6 ${liked ? 'bg-red-500' : 'text-gray-500'}`} />
        </button>
            </div>
        </div>
    );
};

export default ListFilm;
