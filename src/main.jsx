import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import myCreatedRouter from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import AuthProvider from "./Provider/AuthProvider";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <QueryClientProvider client={client}>
               <AuthProvider>
                    <HelmetProvider>
                         <RouterProvider router={myCreatedRouter} />
                    </HelmetProvider>
               </AuthProvider>
          </QueryClientProvider>
     </React.StrictMode>
);
