function Avisclient() {

const avisclient = [
    {
        name : "Hassane",
        ville : "Casablanca",
        avis : "Service rapide et efficace 👍",
        img : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    {
        name : "Ahmed",
        ville : "Tanger",
        avis : "Travail propre et professionnel",
        img : "https://cdn-icons-png.flaticon.com/512/9991/9991241.png",
    },
    {
        name : "Saida",
        ville : "Oujda",
        avis : "Je recommande vivement",
        img : "https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png",
    },
    {
        name : "Ayoub",
        ville : "Rabat",
        avis : "Super expérience du début à la fin",
        img : "https://cdn-icons-png.flaticon.com/256/6750/6750916.png",
    },
    {
        name : "Amin",
        ville : "Eljadida",
        avis : "Rien à dire, parfait !",
        img : "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },

];

    return (
        <div className="flex  flex-col justify-center items-center">
        <h1 className="text-center font-bold text-5xl py-4">Des Avis de Nos clients</h1> 
        <div className="flex  flex-wrap items-center justify-center gap-4 p-8">
        
        {avisclient.map((item) => (
        <div className="flex  flex-col justify-center gap-2 p-4 shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-2 w-50 h-auto">

            <p className="text-lg line-clamp-2">{item.avis}</p>
            <div className="flex items-center gap-2">
                <img src={item.img} alt="" className="rounded-full w-10"/>
                <div>
                    <h1 className="font-bold">{item.name}</h1>
                    <p className="text-sm">{item.ville}</p>                   
                </div>
            </div>

        </div>            
        ))}

        </div>

        </div>
     );
}

export default Avisclient;