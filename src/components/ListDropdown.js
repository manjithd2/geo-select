import GeoOption from './GeoOption';

const ListDropdown = ( props ) => {

    return(
        <div>
            {
                props.options.map((option) => {
                    return <GeoOption key={option.name} option={option} onSelectChange={props.onSelectChange}/>
                })
            }

        </div>
    )
}

export default ListDropdown;