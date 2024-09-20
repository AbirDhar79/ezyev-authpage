// "use client";

// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/stores/authStore";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export default function ExamplePage() {
//   const { isAuthenticated, logout } = useAuthStore();
//   const router = useRouter();
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/login");
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) return null;

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Welcome to EzyEV! You are logged in!</h1>
      
//       <div className="relative w-64 h-64">
//         {/* Cat body */}
//         <motion.div
//           className="absolute inset-0 bg-gray-800 dark:bg-gray-200 rounded-full"
//           animate={{ scale: isHovering ? 1.1 : 1 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         />
//         {/* Cat face */}
//         <motion.div
//           className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-gray-200 dark:bg-gray-800 rounded-full"
//           animate={{ scale: isHovering ? 1.2 : 1 }}
//         />
//         {/* Cat eyes */}
//         <motion.div
//           className="absolute top-1/3 left-1/3 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full"
//           animate={{ scaleY: isHovering ? 1 : 0.1 }}
//         />
//         <motion.div
//           className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full"
//           animate={{ scaleY: isHovering ? 1 : 0.1 }}
//         />
//         {/* Fish */}
//         <motion.div
//           className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-blue-400 rounded-full"
//           animate={{ y: isHovering ? -20 : 0, rotate: isHovering ? 45 : 0 }}
//           onHoverStart={() => setIsHovering(true)}
//           onHoverEnd={() => setIsHovering(false)}
//         >
//           <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full" />
//         </motion.div>
//       </div>
//       <p className="mt-8 text-xl text-gray-600 dark:text-gray-400">
//         {isHovering ? "I'm awake! Give me that fish!" : "Zzz... Just a sleepy EV cat..."}
//       </p>
//       <Button onClick={handleLogout} className="mt-8">
//         Logout
//       </Button>
//     </div>
//   );
// }
// /////////////////////////////////////////////////////////////////////////////////////////////////

// "use client";

// import { useRouter } from "next/navigation";
// import { useAuthStore } from "@/stores/authStore";
// import { useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import EVBatteryIndicator from "@/components/EVBatteryIndicator";

// export default function ExamplePage() {
//   const { isAuthenticated, logout } = useAuthStore();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isAuthenticated) {
//       router.push("/login");
//     }
//   }, [isAuthenticated, router]);

//   if (!isAuthenticated) return null;

//   const handleLogout = () => {
//     logout();
//     router.push("/login");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
//       <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Welcome to EzyEV!</h1>
//       <EVBatteryIndicator />
//       <Button onClick={handleLogout} className="mt-8">
//         Logout
//       </Button>
//     </div>
//   );
// }

"use client";

import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import EVBatteryIndicator from "@/components/EVBatteryIndicator";

export default function ExamplePage() {
  const { isAuthenticated, logout } = useAuthStore();
  const router = useRouter();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">Welcome to EzyEV! You are logged in!</h1>

      
      <div className="flex flex-row items-center space-x-16">
        {/* Charger animation section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Sleepy EV Charger</h2>
          
          <div className="relative w-64 h-64">
            {/* Charger body */}
            <motion.div
              className="absolute inset-0 bg-gray-800 dark:bg-gray-200 rounded-full"
              animate={{ scale: isHovering ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
            {/* Charger face */}
            <motion.div
              className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 bg-gray-200 dark:bg-gray-800 rounded-full"
              animate={{ scale: isHovering ? 1.2 : 1 }}
            />
            {/* Charger eyes */}
            <motion.div
              className="absolute top-1/3 left-1/3 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full"
              animate={{ scaleY: isHovering ? 1 : 0.1 }}
            />
            <motion.div
              className="absolute top-1/3 right-1/3 w-4 h-4 bg-gray-800 dark:bg-gray-200 rounded-full"
              animate={{ scaleY: isHovering ? 1 : 0.1 }}
            />
            {/* cell */}
            <motion.div
              className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-blue-400 rounded-full"
              animate={{ y: isHovering ? -20 : 0, rotate: isHovering ? 45 : 0 }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
            >
              <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full" />
            </motion.div>
          </div>

          <p className="mt-8 text-xl text-gray-600 dark:text-gray-400">
            {isHovering ? "Plug me in! I'm ready to charge!" : "Zzz... Just a sleepy EV charger..."}
          </p>
        </div>

        {/* EV Battery indicator section */}
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">EV Battery Indicator</h2>
          <EVBatteryIndicator />
        </div>
      </div>

      {/* Logout button */}
      <Button onClick={handleLogout} className="mt-8">
        Logout
      </Button>
    </div>
  );
}
