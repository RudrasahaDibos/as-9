import React from 'react';

const Blogs = () => {
    return (
        <div>
               <div  className=' mt-20 hover:drop-shadow-2xl  border border-indigo-600  hover:text-white  hover:animate-bounce  rounded-full bg-sky-400 opacity-100'>
                      <h1>WHAT IS CONTEXT API</h1>
                      <p>In React we usually send data from one component to another. In that case the data of one component has to be sent to another child component as props. Often the situation is that the child component is much lower than our main component where your data is. There may be many children doing this. It can be said to be like digging up data. We usually use Redux in such situations.</p>
               </div>
               <div className=' mt-20 hover:drop-shadow-2xl  border border-indigo-600  hover:text-white  hover:animate-bounce  rounded-full bg-sky-400 opacity-100 mb-20'>
                       <h1>WHAT IS SEMANTIC TAGS</h1>
                       <p>HTML5 semantic elements support all modern browsers. Generally semantic tags means about to an element call it with it's proper name. which induces with it's prime criteria. Able to define separate parts with it's separate name which previous version of HTML use with classes. Possible combinations are included here. Tags define HTML elements for markups in terms of browser of modern style approach.</p>
               </div>
        </div>
    );
};

export default Blogs;