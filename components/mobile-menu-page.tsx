
import MainNavMobile from "@/components/mobile-main-nav";

import { useCategoryContext } from "@/context/category-provider";

const MobileMenuPage = () => {
  const categories = useCategoryContext();

  return (
        <div className="fixed z-10 top-16 bottom-0 right-0 left-0 bg-white px-4 border-t border-black" >
      <MainNavMobile data={categories}/>
    </div>
  );
};

export default MobileMenuPage;