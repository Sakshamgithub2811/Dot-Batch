import './Item.css'

function Item(props){
    const itemName = props.name;
return (
    <div>
        <p className="Nirma">{itemName}</p>
        {props.children}
        {/* content ke ander kch text show karne ke liye props.childer use karege */}
    </div>
 
);
}

export default Item;
