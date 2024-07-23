import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Search({ products, setProducts }) {
    const [search, setSearch] = useState("");

    const handleSearch = () => {
        // eslint-disable-next-line react/prop-types
        const filterSearch = products.filter((product) => {
            return product.name.toLowerCase().includes(search.toLowerCase());
        });

        setProducts(filterSearch);
    }

    return (
        <section className="flex justify-center items-center h-full">
            <div className="p-2 top-12 absolute">
                <input
                    className="border border-gray-900 m-2 rounded-lg"
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </section>
    );
}

export default Search;
