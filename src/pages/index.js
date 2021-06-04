import Geoselector from '../components/GeoSelector'
import { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'
import Grid from '@material-ui/core/Grid';


export default function Home({countries, stateCity}) {

  // Defining state variables for country, state and city
  const [country,setCountry] = useState(null)
  const [countryState,setCountryState] = useState(null)
  const [stateList,setStateList] = useState([])
  const [cityList,setCityList] = useState([])


  useEffect(() => {
    const currStateList = stateCity.filter(states => {
        if (states.country_id === country)
        {
          return states
        }
      }  
    );
    setStateList(currStateList);
  },[country])


  useEffect(() => {
    const currCityList = stateCity.filter(states => {
        if (states.id === countryState)
        {
          return states
        }
      }  
    );
    if(currCityList.length > 0 ){
      setCityList(currCityList[0].cities);
    }
  },[countryState])


  const handleCountrySelect = (country_id) => {
    setStateList([])
    setCountry(country_id)
  }

  const handleStateSelect = (state_id) => {
    setCountryState(state_id)
  }

  return (
    
    <div className={styles.container}>
        
      <Grid container spacing={3}>
        <Grid item xs={4} className={styles.selectColumn}>
            <Geoselector title={"Country"} optionList={countries} onSelectChange={handleCountrySelect}/>
        </Grid>

        <Grid item xs={4} className={styles.selectColumn} >
            <Geoselector title={"State"} optionList={stateList} onSelectChange={handleStateSelect}/>
        </Grid>

        <Grid item xs={4} className={styles.selectColumn} >
            <Geoselector title={"City"} optionList={cityList}/>
        </Grid>
      </Grid>

    </div>
  )

}

// Basic serving of JSON files
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:3000/api/country`)
  const countries = await res.json()

  //Serving from flask api because of size
  const res1 = await fetch(`http://localhost:5000/statecity`)
  const stateCity = await res1.json()

  return {
    props: {
      countries,
      stateCity,
    },
  }
}
