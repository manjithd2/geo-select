import styles from '../styles/Layout.module.css'
import Flag from 'react-flagkit';
import InfoIcon from '@material-ui/icons/Info';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from  "@material-ui/core/styles";


// Custom tooltip styling
const CustomTooltip =  withStyles({
    tooltip: {
        color: "white",
        backgroundColor: "#1636d4",
        fontSize: "0.75rem"
    }
})(Tooltip);

const GeoOption = (props) => {

    // Callback function to return selected options id
    const handleClick = (e) => {
        e.preventDefault();
        props.onSelectChange(props.option.id)
    }

    return(
        <div className={styles.geoOption}>

            {/* Option title  */}
            <div className={styles.geoName}>
                { props.option.iso2 ? <span><Flag country={props.option.iso2}/></span> : null }
                <p>{props.option.name}</p>
                <span className={styles.geoCode}>{ props.option.iso2 ?  props.option.iso2  : props.option.state_code ?  props.option.state_code : null }</span>
            </div>

            {/* Action buttons for selecting state and city */}
            <div className={styles.actionItems}>
                
            <InfoIcon className={styles.info}/>
                {
                    props.option.iso2 || props.option.state_code ? 
                    (
                        <CustomTooltip title={ props.option.iso2 ? "Show States" : "Show Cities"}>
                            <PlayCircleFilledIcon onClick={handleClick} className={styles.next}/>
                        </CustomTooltip>
                    ) :

                    null
                }
            </div> 
            
        </div>

        
    )

}

export default GeoOption;