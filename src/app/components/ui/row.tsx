import {ComponentChildren} from 'preact';
interface RowProps {
  id?: string, 
  children: ComponentChildren;
}


const Row = (props: RowProps) => {
  return (
    <div id={props.id} class="row">
      {props.children}
    </div>
  )
}

export default Row;
