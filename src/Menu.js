import React from 'react';

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")} className="p-5 border border-primary m-5 rounded-3">
            <h1>{name}</h1>
            <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient.name}</li>
                ))}
            </ul>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </section>
    )
}

const Menu = ({ title, recipes}) => {
    return (
        <article className="border border-4 border-primary">
            <header className="bg-info">
                <h1>{title}</h1>
            </header>
            <div>
                {recipes.map((recipe, i) => (
                    <Recipe key={i} {...recipe} />
                ))}
            </div>
        </article>
    );
};

export default Menu;