import { Search } from "lucide-react";
function SearchBar() {
    return (
        <div className="flex h-11 w-full max-w-md items-center rounded-xl border border-gray-300 bg-white px-4">
            <Search size={20} className="text-gray-500"/> 
            
            <input 
                type="text"
                placeholder="جستجوی محصولات، برند ها و دسته بندی ها..." 
                className="m-l-3 w-full outline-none"/>
        </div>
    );
}
export default SearchBar; 