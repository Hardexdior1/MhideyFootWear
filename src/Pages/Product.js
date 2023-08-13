import img1 from '../Images/img1No.jpeg'
import img2 from '../Images/img2No.jpeg'
import img3 from '../Images/img3No.jpeg'
import img4 from '../Images/img4No.jpeg'
import img5 from '../Images/img5No.jpeg'
import img6 from '../Images/img6No.jpeg'
import img7 from '../Images/Img7No.jpeg'
import img8 from '../Images/img8No.jpeg'
import img9 from '../Images/img9No.jpeg'
import img10 from '../Images/img10No.jpeg'
import img11 from '../Images/img11No.jpeg'
import img111 from '../Images/img11Yes.jpeg'

import img12 from '../Images/img12Yes.jpeg'
import img13 from '../Images/img13Yes.jpeg'
import img14 from '../Images/img14Yes.jpeg'
import img15 from '../Images/img15Yes.jpeg'
import img16 from '../Images/img16Yes.jpeg'

import img17 from '../Images/img17Yes.jpeg'

import img18 from '../Images/img18Yes.jpeg'

import img19 from '../Images/img19Yes.jpeg'

import img20 from '../Images/img20Yes.jpeg'

import img21 from '../Images/img21Yes.jpeg'
import img22 from '../Images/img22No.jpeg'






















const products=[
    {
        name:'Suede pam',
        negotiable:false,
        image:img1,
        category:'Men',
        price:10000,

    },
    {
        name:'Siede pam',
        negotiable:false,
        image:img22,
        category:'Women',
        price:3500,

    },
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img19,

        category:'Women',
        price:4000,

    },
    {
        name:'Brown flip',
        negotiable:false,
        image:img2,
        category:'Men',
        price:80000,


    },
    
    {
        name:'leather slide ',
        negotiable:false,
        image:img4,
        category:'Women',
        price:4000,

    },
    {
        name:'Trinos green ',
        negotiable:false,
        image:img5,
        category:'Women',
        price:3500,

    },

    
   
    {
        name:'Twist slider',
        negotiable:false,
        image:img8,
        category:'Women',
        price:3500,

    },
    {
        name:'Bit palm',
        negotiable:false,
        image:img9,
        category:'Men',
        price:8000,

    },
    
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img13,
        category:'Men',
        price:8000,

    },
    {
        name:'Bijou sandal',
        negotiable:false,
        image:img10,
        category:'Men',
        price:4000,

    },
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img20,

        category:'Men',
        price:20000,

    },
    {
        name:'Mabibi wear',
        negotiable:false,
        image:img11,
        category:'Women',
        price:4000,

    },

    {
        name:'Joana hutyra',
        negotiable:true,
        image:img111,
        category:'Women',
        price:3500,

    },
    {
        name:'Ciabatte',
        negotiable:false,
        image:img3,
        category:'Women',
        price:3500,
    },


    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img12,
        category:'Women',
        price:4500,

    },
    {
        name:'Open toe ',
        negotiable:false,
        image:img6,
        category:'Women',
        price:4000,

    },
    

    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img14,
        category:'Women',
        price:4000,

    },
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img15,
        category:'Men',
        price:8000,

    },
    {
        name:'Tuscany leather',
        negotiable:false,
        image:img7,
        category:'Men',
        price:4000,

    },
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img16,
        category:'Women',
        price:4000,

    },
    {
        name:'Metallic tripple ',
        negotiable:false,
        image:img17,

        category:'Women',
        price:4000,

    },
    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img18,

        category:'Men',
        price:8000,

    },
    
    
    

    {
        name:'Metallic tripple ',
        negotiable:true,
        image:img21,

        category:'Men',
        price:30000,

    },


]

export default products



// export default YourComponent;



// import React from 'react';

//   const arrayOfObjects = [
//     { id: 1, text: 'Object 1' },
//     { id: 2, text: 'Object 2' },
//     { id: 3, text: 'Object 3' },
//     // Add more objects as needed
//   ];

//   const handleObjectClick = (clickedObject) => {
//     console.log('Clicked Object:', clickedObject);
//   };

//   return (
//     <div>
//       {arrayOfObjects.map((obj) => (
//         <div key={obj.id} onClick={() => handleObjectClick(obj)}>
//           {obj.text}
//         </div>
//       ))}
//     </div>
//   );
// };






// import React, { useState } from 'react';

// const YourComponent = () => {
//   const arrayOfObjects = [
//     { id: 1, text: 'Object 1' },
//     { id: 2, text: 'Object 2' },
//     { id: 3, text: 'Object 3' },
//     // Add more objects as needed
//   ];

//   const [selectedText, setSelectedText] = useState(arrayOfObjects[0].text);

//   const handleObjectClick = (clickedObject) => {
//     setSelectedText(clickedObject.text);
//   };

//   return (
//     <div>
//       <h1>{selectedText}</h1>
//       {arrayOfObjects.map((obj) => (
//         <div
//           key={obj.id}
//           onClick={() => handleObjectClick(obj)}
//           style={{ cursor: 'pointer' }}
//         >
//           {obj.text}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default YourComponent;


