function Cardshop() {
    const cardshopData = [
        {
            id: 1,
            name: "Card 1",
            description: "Description for Card 1",
            price: 100,
            img: "/bg_hero.jpeg",
        },
        {
            id: 2,
            name: "Card 2",
            description: "Description for Card 2",
            price: 150,
            img: "/bg_hero.jpeg",
        },
        {
            id: 3,
            name: "Card 3",
            description: "Description for Card 3",
            price: 200,
            img: "/bg_hero.jpeg",

        },
        {
            id: 4,
            name: "Card 4",
            description: "Description for Card 4",
            price: 250,
            img: "/bg_hero.jpeg",
        },
        {
            id: 5,
            name: "Card 5",
            description: "Description for Card 5",
            price: 300,
            img: "/bg_hero.jpeg",
        
        },
    ];


    return ( 
        <div className="text-center py-20 bg-gradient-to-r from-[#F6EAD9] via-[#F9F3EB] to-[#D9E8EA]">
            <h1 className="text-2xl font-bold ">Cardshop</h1>
            <div className="flex flex-wrap items-center justify-center gap-6 p-6 max-w-7xl mx-auto">
            {cardshopData.map((card) => (
                <div key={card.id} className="w-full sm:w-[45%] lg:w-[20%] h-60  rounded-2xl shadow-lg">
                    <img src={card.img} alt={card.name} className="w-full h-30 p-0 object-cover rounded-t-2xl"/>
                    <h2 className="text-xl font-bold mt-4">{card.name}</h2>
                    <p className="text-gray-600 ">{card.description}</p>
                    <button className="bg-[#F07C1F] hover:bg-[#D96B14] text-white font-bold w-full mt-4  px-4 py-2 rounded-full shadow-lg transition-all duration-300">
                        Price : {card.price}
                    </button>
                </div>
            ))}
            </div>
        </div>
     );
}

export default Cardshop;

