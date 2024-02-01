import { useState } from "react";
import "./App.css";
import CategoryPills from "./Components/CategoryPills";
import { categories } from "./Data/home";
import PageHeader from "./Layouts/PageHeader";

function App() {
  const [selectedCategory, setSelectCategory] = useState(categories[0]);

  return (
    <div className="flex max-h-screen flex-col">
      <PageHeader />
      <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-auto">
        <div>SideBar</div>
        <div className="overflow-x-hidden px-8 pb-4">
          <div className="sticky top-0 z-10 bg-white pb-4">
            <CategoryPills
              categories={categories}
              selectedCategory={selectedCategory}
              onSelect={setSelectCategory}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
