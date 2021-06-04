import { useEffect, useState } from "react";
import ListDropdown from './ListDropdown';
import  layoutStyles from '../styles/Layout.module.css'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import ClearIcon from '@material-ui/icons/Clear';
import IconButton from '@material-ui/core/IconButton';



const Geoselector = (props) => {
    const [geoField,setGeoField] = useState("");
    const [showOptions, setShowOptions] = useState(false);
    const [options,setOptions] = useState([]);

    // useEffect to update options coming in from parent component
    useEffect(() => {
        setOptions(props.optionList)
        setShowOptions(true);
    },[props.optionList])


    const handleChange = (e) => {

        const optionList  = props.optionList;     
        const filteredOptions = optionList.filter( 
            options => {
                return options.name.toLowerCase().indexOf(e.currentTarget.value.toLowerCase()) > -1
             } );
                
        setGeoField(e.currentTarget.value);
        setShowOptions(true);
        setOptions(filteredOptions);
    }

    const handleClear = (e) => {
        setGeoField("");
    }

    return (
        <div className={layoutStyles.selectorContainer}>
            <div className={layoutStyles.title}>
                <h3>{props.title}</h3>
            </div>
            <div className={layoutStyles.geoTextbox}>
                <TextField 
                variant="outlined"
                value={geoField}
                placeholder= {`Search for ${props.title}`}
                onChange={handleChange}
                fullWidth={true}
                InputProps={{
                    endAdornment: (
                      <InputAdornment>
                        {  geoField.length > 0 ? 
                            (<IconButton onClick={handleClear}>
                                 <ClearIcon />
                            </IconButton>  )
                            :
                            <div></div>
                        }
                      </InputAdornment>
                    )
                  }}
                />
            </div>

            {/* Dropdown list section of locations */}
            <div className={layoutStyles.geoDropdown}>
            {
               showOptions ? (
                    <ListDropdown options={options} onSelectChange={props.onSelectChange}/>
               ) :

               (
               <p className={layoutStyles.selectPlaceholder}>Select a { props.title === "City" ? "State" : "Country"}</p>
               )
    
            }
            </div>
        </div>
    )
}

export default Geoselector;