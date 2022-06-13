import {
   Content
} from './style.js'

import { useDrag } from 'react-dnd'


export function Picture({ id, image, isChosen }) {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: "image",
      item: { id: id },
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }));

   return isChosen ? (
      <Content
         ref={drag}
         src={image}
         style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
   ) : (
      <Content
            src={image}
         style={{ border: isDragging ? "5px solid pink" : "0px" }}
      />
   )

}
