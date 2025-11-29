
export default function SearchBar({value, onChange}){
    return <>
        <input 
            type="text" 
            placeholder=" Rechercher..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full p-6 bg-background input-search text-text-primary"
        />
    </>
}