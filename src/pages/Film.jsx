
// import React, { useState, useEffect } from "react";
// import ListFilm from "../components/ListFilm";
// import { SquarePlus } from "lucide-react";

// const initialFilms = [
//   {
//     id: 1,
//     name: "Laskar Pelangi",
//     gambar: "https://images.tokopedia.net/img/cache/700/product-1/2020/2/27/3360727/3360727_524649cd-83cf-4826-b6a9-be2df9ff0c2c_426_426.jpg",
//     tahun: "2006",
//     gendre: "anak-anak",
//     durasi: "2 jam",
//     sinopsis: "menceritakan petualangan",
//   },
//   {
//     id: 2,
//     name: "Sang Pemimpi",
//     gambar: "https://cdns.klimg.com/resized/476x/p/sang-pemimpi.jpg",
//     tahun: "2006",
//     gendre: "anak-anak",
//     durasi: "2 jam",
//     sinopsis: "menceritakan petualangan",
//   },
//   {
//     id: 3,
//     name: "Buya Hamka",
//     gambar: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/9a0911fc-20ed-4a0f-a107-821324620bc4/POSTER+Buya+Hamka.jpg",
//     tahun: "2006",
//     gendre: "anak-anak",
//     durasi: "2 jam",
//     sinopsis: "menceritakan petualangan",
//   },
// ];

// const savedFilms = localStorage.getItem("films");

// export default function Film() {
//   const [films, setFilms] = useState(savedFilms ? JSON.parse(savedFilms) : initialFilms);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [filmName, setFilmName] = useState('');
//   const [filmTahun, setFilmTahun] = useState('');
//   const [filmImage, setFilmImage] = useState('');
//   const [filmGendre, setFilmGendre] = useState('');
//   const [filmDurasi, setFilmDurasi] = useState('');
//   const [filmSinopsis, setFilmSinopsis] = useState('');
//   const [editId, setEditId] = useState(null);

//   useEffect(() => {
//     localStorage.setItem("films", JSON.stringify(films));
//   }, [films]);

//   const handleOpenModal = () => setIsModalOpen(true);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setEditId(null);
//     resetForm();
//   };

//   const resetForm = () => {
//     setFilmName('');
//     setFilmTahun('');
//     setFilmImage('');
//     setFilmGendre('');
//     setFilmDurasi('');
//     setFilmSinopsis('');
//   };

//   const handleAddFilm = () => {
//     if (!filmName || !filmTahun || !filmImage || !filmGendre || !filmDurasi || !filmSinopsis) return;

//     const newFilm = {
//       id: films.length + 1,
//       name: filmName,
//       gambar: filmImage,
//       tahun: filmTahun,
//       gendre: filmGendre,
//       durasi: filmDurasi,
//       sinopsis: filmSinopsis,
//     };

//     setFilms([...films, newFilm]);
//     alert("Film added successfully!");
//     handleCloseModal();
//   };

//   const handleEditFilm = () => {
//     if (!filmName || !filmTahun || !filmImage || !filmGendre || !filmDurasi || !filmSinopsis) return;

//     const updatedFilms = films.map((film) => 
//       film.id === editId ? { ...film, name: filmName, gambar: filmImage, tahun: filmTahun, gendre: filmGendre, durasi: filmDurasi, sinopsis: filmSinopsis } : film
//     );

//     setFilms(updatedFilms);
//     handleCloseModal();
//   };

//   const handleDeleteFilm = (id) => {
//     const updatedFilms = films.filter((film) => film.id !== id);
//     setFilms(updatedFilms);
//   };

//   const handleSubmit = () => {
//     if (editId) {
//       handleEditFilm();
//     } else {
//       handleAddFilm();
//     }
//   };

//   const handleEditClick = (id) => {
//     const film = films.find((film) => film.id === id);
//     setFilmName(film.name);
//     setFilmTahun(film.tahun);
//     setFilmImage(film.gambar);
//     setFilmGendre(film.gendre);
//     setFilmDurasi(film.durasi);
//     setFilmSinopsis(film.sinopsis);
//     setEditId(film.id);
//     setIsModalOpen(true);
//   };

//   return (
//     <>
//       <div>
//         {isModalOpen && (
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//               <h2 className="text-2xl font-semibold mb-4">{editId ? "Edit Film" : "Add Film"}</h2>
//               <input
//                 type="text"
//                 placeholder="Film Name"
//                 value={filmName}
//                 onChange={(e) => setFilmName(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Film Year"
//                 value={filmTahun}
//                 onChange={(e) => setFilmTahun(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Film Image URL"
//                 value={filmImage}
//                 onChange={(e) => setFilmImage(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Film Gendre"
//                 value={filmGendre}
//                 onChange={(e) => setFilmGendre(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Film Duration"
//                 value={filmDurasi}
//                 onChange={(e) => setFilmDurasi(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <input
//                 type="text"
//                 placeholder="Film Synopsis"
//                 value={filmSinopsis}
//                 onChange={(e) => setFilmSinopsis(e.target.value)}
//                 className="border p-2 w-full mb-4"
//               />
//               <div className="flex justify-end gap-4">
//                 <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">{editId ? "Update" : "Add"}</button>
//                 <button onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Cancel</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//       <div>
//         <h1 className="text-3xl font-bold text-center text-black-600 my-5">Film List</h1>
//         <div className="flex flex-wrap justify-around m-5">
//           <button onClick={handleOpenModal} className="absolute top-16 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:shadow-lg">
//             <SquarePlus />
//           </button>
//           {films.map((data) => (
//             <ListFilm
//               key={data.id}
//               proopsFilm={data}
//               onEdit={handleEditClick}
//               onDelete={handleDeleteFilm}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from "react";
import ListFilm from "../components/ListFilm";
import { SquarePlus } from "lucide-react";

const initialFilms = [
  {
    id: 1,
    name: "Laskar Pelangi",
    gambar: "https://images.tokopedia.net/img/cache/700/product-1/2020/2/27/3360727/3360727_524649cd-83cf-4826-b6a9-be2df9ff0c2c_426_426.jpg",
    tahun: "2006",
    gendre: "anak-anak",
    durasi: "2 jam",
    sinopsis: "menceritakan petualangan",
  },
  {
    id: 2,
    name: "Sang Pemimpi",
    gambar: "https://cdns.klimg.com/resized/476x/p/sang-pemimpi.jpg",
    tahun: "2006",
    gendre: "anak-anak",
    durasi: "2 jam",
    sinopsis: "menceritakan petualangan",
  },
  {
    id: 3,
    name: "Buya Hamka",
    gambar: "https://images.squarespace-cdn.com/content/v1/5af1298bfcf7fd60f31f66bd/9a0911fc-20ed-4a0f-a107-821324620bc4/POSTER+Buya+Hamka.jpg",
    tahun: "2006",
    gendre: "anak-anak",
    durasi: "2 jam",
    sinopsis: "menceritakan petualangan",
  },
];

const savedFilms = localStorage.getItem("films");

export default function Film() {
  const [films, setFilms] = useState(savedFilms ? JSON.parse(savedFilms) : initialFilms);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filmName, setFilmName] = useState('');
  const [filmTahun, setFilmTahun] = useState('');
  const [filmImage, setFilmImage] = useState('');
  const [filmGendre, setFilmGendre] = useState('');
  const [filmDurasi, setFilmDurasi] = useState('');
  const [filmSinopsis, setFilmSinopsis] = useState('');
  const [editId, setEditId] = useState(null);
  const [sortType, setSortType] = useState("asc");
  const [sortCategory, setSortCategory] = useState("tahun");

  useEffect(() => {
    localStorage.setItem("films", JSON.stringify(films));
  }, [films]);

  const handleOpenModal = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditId(null);
    resetForm();
  };

  const resetForm = () => {
    setFilmName('');
    setFilmTahun('');
    setFilmImage('');
    setFilmGendre('');
    setFilmDurasi('');
    setFilmSinopsis('');
  };

  const handleAddFilm = () => {
    if (!filmName || !filmTahun || !filmImage || !filmGendre || !filmDurasi || !filmSinopsis) return;

    const newFilm = {
      id: films.length + 1,
      name: filmName,
      gambar: filmImage,
      tahun: filmTahun,
      gendre: filmGendre,
      durasi: filmDurasi,
      sinopsis: filmSinopsis,
    };

    setFilms([...films, newFilm]);
    alert("Film added successfully!");
    handleCloseModal();
  };

  const handleEditFilm = () => {
    if (!filmName || !filmTahun || !filmImage || !filmGendre || !filmDurasi || !filmSinopsis) return;

    const updatedFilms = films.map((film) => 
      film.id === editId ? { ...film, name: filmName, gambar: filmImage, tahun: filmTahun, gendre: filmGendre, durasi: filmDurasi, sinopsis: filmSinopsis } : film
    );

    setFilms(updatedFilms);
    handleCloseModal();
  };

  const handleDeleteFilm = (id) => {
    const updatedFilms = films.filter((film) => film.id !== id);
    setFilms(updatedFilms);
  };

  const handleSubmit = () => {
    if (editId) {
      handleEditFilm();
    } else {
      handleAddFilm();
    }
  };

  const handleEditClick = (id) => {
    const film = films.find((film) => film.id === id);
    setFilmName(film.name);
    setFilmTahun(film.tahun);
    setFilmImage(film.gambar);
    setFilmGendre(film.gendre);
    setFilmDurasi(film.durasi);
    setFilmSinopsis(film.sinopsis);
    setEditId(film.id);
    setIsModalOpen(true);
  };

  const handleSort = (category) => {
    if (category === "tahun") {
      const sortedFilms = [...films].sort((a, b) => {
        if (sortType === "asc") {
          return a.tahun.localeCompare(b.tahun);
        } else {
          return b.tahun.localeCompare(a.tahun);
        }
      });
      setFilms(sortedFilms);
    } else if (category === "nama") {
      const sortedFilms = [...films].sort((a, b) => {
        if (sortType === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      setFilms(sortedFilms);
    }
  };

  const toggleSortType = () => {
    setSortType(sortType === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <div>
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold mb-4">{editId ? "Edit Film" : "Add Film"}</h2>
              <input
                type="text"
                placeholder="Film Name"
                value={filmName}
                onChange={(e) => setFilmName(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Film Year"
                value={filmTahun}
                onChange={(e) => setFilmTahun(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Film Image URL"
                value={filmImage}
                onChange={(e) => setFilmImage(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Film Gendre"
                value={filmGendre}
                onChange={(e) => setFilmGendre(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Film Duration"
                value={filmDurasi}
                onChange={(e) => setFilmDurasi(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <input
                type="text"
                placeholder="Film Synopsis"
                value={filmSinopsis}
                onChange={(e) => setFilmSinopsis(e.target.value)}
                className="border p-2 w-full mb-4"
              />
              <div className="flex justify-end gap-4">
                <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">{editId ? "Update" : "Add"}</button>
                <button onClick={handleCloseModal} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center text-black-600 my-5">Film List</h1>
        <div className="flex justify-between items-center mb-4 mx-5">
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleSort("tahun")}>
              Sort by Tahun
            </button>
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => handleSort("nama")}>
              Sort by Nama
            </button>
          </div>
          <button onClick={toggleSortType} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            {sortType === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
        <div className="flex flex-wrap justify-around m-5">
          <button onClick={handleOpenModal} className="absolute top-16 right-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:shadow-lg">
            <SquarePlus />
          </button>
          {films.map((data) => (
            <ListFilm
              key={data.id}
              proopsFilm={data}
              onEdit={handleEditClick}
              onDelete={handleDeleteFilm}
            />
          ))}
        </div>
      </div>
    </>
  );
}

