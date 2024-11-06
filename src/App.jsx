import React from "react";
import { SidebarProvider } from "./context/sideBarContext";
import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="w-full">
      <SidebarProvider>
        <Header />
        <Content />
      </SidebarProvider>
    </div>
  );
}

export default App;
