// import React, { useEffect, useState } from "react";

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch users from the server
//   const fetchUsers = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch("http://127.0.0.1:8080/api/users");

//       if (!response.ok) {
//         if (response.status === 401) {
//           setError("Unauthorized: Invalid or expired token.");
//         } else {
//           setError(`Error: ${response.status}`);
//         }
//         setLoading(false);
//         return;
//       }

//       const data = await response.json();
//       setUsers(data);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch users. Please try again later.");
//       setLoading(false);
//       console.error(err);
//     }
//   };

//   // Handle user deletion
//   const deleteUser = async (id) => {
//     if (window.confirm("Are you sure you want to delete this user?")) {
//       try {
//         const response = await fetch(`http://127.0.0.1:8080/api/users/${id}`, {
//           method: "DELETE",
//         });

//         if (!response.ok) {
//           setError(`Error: ${response.status}`);
//           return;
//         }

//         // Remove the deleted user from the state
//         setUsers(users.filter((user) => user.id !== id));
//       } catch (err) {
//         setError("Failed to delete user. Please try again later.");
//         console.error(err);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchUsers(); // Fetch users when the component mounts
//   }, []);

//   return (
//     <div>
//       <h1>Users</h1>
//       {error && <p style={{ color: "red" }}>{error}</p>}{" "}
//       {/* Display error messages */}
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               {user.name} -{" "}
//               <button
//                 style={{
//                   color: "blue",
//                   cursor: "pointer",
//                   border: "none",
//                   background: "none",
//                 }}
//                 onClick={() => deleteUser(user.id)}
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;
