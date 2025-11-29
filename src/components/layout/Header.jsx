import { useState } from "react"
import  SearchBar  from "/src/components/ui/SearchBar.jsx"
import Profil from "../ui/Profil";
function Header({notifOn, setNotifOn}) {

    const [searchValue, setSearchValue] = useState('');

    return <>
        <div className="flex  border-b border-border w-full">
            <SearchBar
                value={searchValue}
                onChange={setSearchValue}
                
            />
            <Profil
                notifOn={notifOn}
                setNotifOn={setNotifOn}
            />
        </div>
    </>

}

export default Header