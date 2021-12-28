const SmallpersonListItem = ({ person }) => {
    const { name, age } = person;

    return (
        <p>Name: {name}, Age: {age} Years old</p>
    );
};

export default SmallpersonListItem;