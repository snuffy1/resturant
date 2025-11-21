import MenuFilter from "@/components/MenuFilter";
import MenuSection from "@/components/MenuSection";
import { MENU_DATA } from "@/constants/constant";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow">
        <MenuFilter />
        <div className="flex flex-col space-y-4">
          {MENU_DATA.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>

        <div className="py-20 flex justify-center items-center bg-stone-50">
          <div className="flex flex-col items-center">
            <h3 className="font-serif text-4xl mb-2">friendz fries</h3>
            <p className="font-sans text-xs text-gray-500 tracking-widest uppercase mt-2">
              Shared with friends
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
