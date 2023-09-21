// import React, { useState } from 'react';

// function Diet() {
//   // State for diet and meals
//   const [selectedDiet, setSelectedDiet] = useState('');
//   const [meals, setMeals] = useState([]);
//   const [newMeal, setNewMeal] = useState('');

//   // Handle diet selection
//   const handleDietChange = (e) => {
//     setSelectedDiet(e.target.value);
//   };

//   // Handle adding a meal
//   const handleAddMeal = () => {
//     if (newMeal.trim() !== '') {
//       setMeals([...meals, newMeal]);
//       setNewMeal('');
//     }
//   };

//   // Handle removing a meal
//   const handleRemoveMeal = (index) => {
//     const updatedMeals = [...meals];
//     updatedMeals.splice(index, 1);
//     setMeals(updatedMeals);
//   };

//   // Render the diet page
//   return (
//     <div>
//       <h1>Diet</h1>
//       <div>
//         <label>Select Diet:</label>
//         <select value={selectedDiet} onChange={handleDietChange}>
//           <option value="">Select a diet</option>
//           <option value="vegetarian">Vegetarian</option>
//           <option value="vegan">Vegan</option>
//           <option value="paleo">Paleo</option>
//           {/* Add more diet options as needed */}
//         </select>
//       </div>
//       <div>
//         <label>Meals:</label>
//         <ul>
//           {meals.map((meal, index) => (
//             <li key={index}>
//               {meal}
//               <button onClick={() => handleRemoveMeal(index)}>Remove</button>
//             </li>
//           ))}
//         </ul>
//         <input
//           type="text"
//           placeholder="Add a meal"
//           value={newMeal}
//           onChange={(e) => setNewMeal(e.target.value)}
//         />
//         <button onClick={handleAddMeal}>Add Meal</button>
//       </div>
//     </div>
//   );
// }

// export default Diet;
