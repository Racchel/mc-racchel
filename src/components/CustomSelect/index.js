export function CustomSelect({ state, setState, list }) {
   return (
      <select
         required
         value={state}
         onChange={(e) => setState(e.target.value)}
      >
         {list.map((categorie) => (
            <option key={categorie.id} value={categorie.name}>
               {categorie.name}
            </option>
         ))}
      </select>
   )
}