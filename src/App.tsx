import { useState } from "react";
import "./App.css";
import CategoryPills from "./Components/CategoryPills";
import { categories, videos } from "./Data/home";
import PageHeader from "./Layouts/PageHeader";
import VideoGridItem from "./Components/VideoGridItem";
import Sidebar from "./Layouts/Sidebar";
import SidebarContextProvider from "./Context/SidebarContextProvider";

function App() {
  const [selectedCategory, setSelectCategory] = useState(categories[0]);

  return (
    <SidebarContextProvider>
      <div className="flex max-h-screen flex-col">
        <PageHeader />
        <div className="flex-grow-1 grid grid-cols-[auto,1fr] overflow-y-auto">
          <Sidebar />
          <div className="overflow-x-hidden px-8 pb-4">
            <div className="sticky top-0 z-10 bg-white pb-4">
              <CategoryPills
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectCategory}
              />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4">
              {/* auto-fill: fill with maximum number according to col width;
              minmax: 300px for min width and 1fr for max width */}
              {videos.map((video) => {
                return <VideoGridItem key={video.id} {...video} />;
                // notice that we can automatically fit attributes with spread syntax and key-value pairs
              })}
            </div>
          </div>
        </div>
      </div>
    </SidebarContextProvider>
  );
}

export default App;
