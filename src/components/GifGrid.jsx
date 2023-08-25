
export const GifGrid = ({ category }) => {

    const getGifs = async() => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=liI6jAbVbs7uYuGZKwtjpzNxIl4Eqd1V&q=${category}&limit=20`;
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifts = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url

        }));

    }

    getGifs();


    return (
        <>
            <h3> {category} </h3>
        </>
    ) 
}



// const gifts = data.map(img => {
//     return {
//         id: img.id,
//         title: img.title,
//         url: img.images.downsized_medium.url
//     }
// })