import CheckIcon from "./CheckIcon";
function ListItem(props){
    return (
        <>
            <li className="flex gap-2 text-2xl items-center my-2 bg-slate-50 py-3 pl-3 lg:pr-16 pr-6 sm:w-full rounded-xl"><CheckIcon />{props.item}</li>
        </>
    )
}

export default ListItem;