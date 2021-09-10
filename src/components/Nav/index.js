import React from 'react';

const cateogories = [
    { name: 'commercial', description: 'Photos of grocery stores, food trucks, and other commercial properties' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delacacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
];

function categorySelected(name) {
    console.log(`${name} clicked`);
};

function Nav() {
    return (
        <header>
            <h2>
                <a href="/">
                <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                    About me
                    </a>
                </li>
                <li>
                    <span>
                        Contact
                    </span>
                </li>
                {cateogories.map((category) => (
                    <li 
                        className="mx-1"
                        key={category.name}
                    >
                        <span onClick = {() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                    </li>
                ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;