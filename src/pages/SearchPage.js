// import React, { useState } from "react";

// const SearchPage = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [selectedState, setSelectedState] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");

//   const states = ["Ebonyi", "Ekiti", "Enugu"]; // State options

//   const toggleModal = () => setModalOpen(!isModalOpen);

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       {/* Header */}
//       <header className="flex items-center justify-between py-4 px-6 bg-white shadow-md">
//         <h1 className="text-xl font-bold text-gray-800">Search For Auto-Specialist</h1>
//         <nav className="flex items-center space-x-6">
//           <a href="#vision" className="text-gray-600 hover:text-gray-800">Vision</a>
//           <a href="#repairers" className="text-gray-600 hover:text-gray-800">Repairers</a>
//           <a href="#about" className="text-gray-600 hover:text-gray-800">About</a>
//           <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact Us</a>
//         </nav>
//         <div className="flex space-x-4">
//           <button className="text-blue-600">Log In</button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Create Account</button>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="mt-8">
//         {/* Search Form */}
//         <div className="bg-white p-6 rounded-lg shadow-md">
//           <p className="text-gray-600 mb-4">
//             When you type a name, the system automatically suggests available details that match your entry. 
//             So you can select one of them if they match what you are looking for.
//           </p>
//           <div className="space-y-4">
//             {/* Full Name Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter a name"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>

//             {/* Dynamic Results */}
//             <div className="space-y-2">
//               {searchQuery &&
//                 ["Peter Jeff", "Samuel Peter", "David Chukwu Peter", "Faith Ngozi Peter"].map(
//                   (name, index) => (
//                     <div
//                       key={index}
//                       className="flex items-center justify-between px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
//                     >
//                       <p>{name}</p>
//                       <button className="text-blue-600">Select</button>
//                     </div>
//                   )
//                 )}
//             </div>

//             {/* State Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">State</label>
//               <button
//                 onClick={toggleModal}
//                 className="w-full px-4 py-2 border rounded-md text-left focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 {selectedState || "Enter the state you are in"}
//               </button>
//             </div>

//             {/* City Input */}
//             <div>
//               <label className="block text-sm font-medium text-gray-600">City</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder="Enter the city you are in"
//               />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-11/12 md:w-1/2 rounded-lg p-6">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-bold">Select State</h2>
//               <button onClick={toggleModal} className="text-gray-500 hover:text-gray-800">
//                 ✕
//               </button>
//             </div>

//             {/* State Options */}
//             <div className="space-y-4">
//               {states.map((state, index) => (
//                 <div key={index} className="flex items-center">
//                   <input
//                     type="radio"
//                     id={state}
//                     name="state"
//                     value={state}
//                     className="h-5 w-5 text-blue-600"
//                     onChange={(e) => setSelectedState(e.target.value)}
//                   />
//                   <label htmlFor={state} className="ml-2 text-gray-700">
//                     {state}
//                   </label>
//                 </div>
//               ))}
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex items-center justify-between">
//               <button
//                 onClick={toggleModal}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={toggleModal}
//                 className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md"
//               >
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchPage;
