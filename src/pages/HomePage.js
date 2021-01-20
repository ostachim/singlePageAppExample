import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id:1,
        title:"Czym jest React?",
        author: "Jan Kowalski",
        text: "Do duis adipisicing amet eu quis cillum veniam proident sunt cupidatat. Laborum nisi do nulla commodo cillum fugiat magna voluptate in consequat dolor elit esse. Nostrud officia nisi deserunt irure minim qui ipsum officia exercitation ullamco labore ullamco ut. Commodo qui veniam proident commodo ut occaecat culpa dolor ad minim non labore mollit. Occaecat labore est ex qui aliqua."
    },
    {
        id:2,
        title:"Czym jest JavaScript?",
        author: "Jan Kowalski",
        text: "Aliquip eiusmod aliquip nulla et dolore velit qui voluptate occaecat. Sint ut minim sint id ut nulla nulla quis proident est. Excepteur est nisi elit nulla reprehenderit ad cillum. Labore Lorem consectetur sit culpa laboris ut. Veniam sint consequat enim laborum duis ipsum ex. Eiusmod officia est Lorem veniam labore dolor do labore culpa minim ullamco aliquip voluptate anim. Qui aliqua enim ad Lorem elit laborum."
    },
    {
        id:3,
        title:"Czym jest AJAX?",
        author: "Jan Kowalski",
        text: "Cillum ex labore ullamco do sint reprehenderit incididunt aute anim. Incididunt adipisicing fugiat duis tempor est proident. Est consectetur commodo pariatur proident enim velit aliquip ullamco laboris. Elit pariatur enim tempor esse cillum nostrud pariatur deserunt. Qui anim irure est culpa id ad aliquip eiusmod ullamco. Mollit proident elit nulla qui excepteur. Commodo duis Lorem irure aliqua deserunt in."
    },
]

const HomePage = () => {

    const artList = articles.map(article => <Article key={article.id} article={article} />)
    return ( 
        <div className = "home">
            {artList}
        </div>
     );
}
 
export default HomePage;