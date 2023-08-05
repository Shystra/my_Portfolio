import { Button, Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, urls }) => {
  const firstUrl = urls[0]; // Pegando a primeira URL do array de URLs

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>
            {/* Adicionando link em torno do título */}
            <a href={firstUrl} target="_blank" rel="noopener noreferrer">{title}</a>
          </h4>
          <span>{description}</span>
         
          <Button href={firstUrl} target="_blank" rel="noopener noreferrer">Ver mais</Button>
        </div>
      </div>
    </Col>
  );
};


// import { Button, Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl, urls }) => {
//   const firstUrl = urls[0]; 

//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt={title} />
//         <div className="proj-txtx">
//           <h4>
            
//             <a href={firstUrl} target="_blank" rel="noopener noreferrer">{title}</a>
//           </h4>
//           <span>{description}</span>
          
//           <Button href={firstUrl} target="_blank" rel="noopener noreferrer">Veja mais</Button>
//         </div>
//       </div>
//     </Col>
//   );
// };

