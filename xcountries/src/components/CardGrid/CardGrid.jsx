import {React, useState, useEffect} from 'react';
import Card from "../Card/Card"
import styles from "./CardGrid.module.css"
import { errorHandler } from '../../config/helper-methods';
import { fetchAllCountries } from '../../api/api';
import { Toaster } from 'react-hot-toast';

const CardGrid = ()=>{
    const [countryData, setCountryData] = useState([]);
    const [loadingState, setLoadingState] = useState(true)
    
    const generateCountryData = async ()=>{
        try{
            setLoadingState(true);
            const data = await fetchAllCountries();
            setCountryData(data);
            setLoadingState(false);
        }
        catch(error){
            setLoadingState(false);
            errorHandler(error);
        }
    }

    useEffect(()=>{
        generateCountryData();
    }, []);

    return (
        <>
            <Toaster position="bottom-right" reverseOrder={false} />
            {countryData.length? (
                <div className={styles.wrapper}>
                {
                    countryData.map((country)=>{
                        return <Card country={country}/>
                    })
                }
            </div>
            )
            :loadingState?(
                <div className={styles.loader}>Loading...</div>
            )
            :(<p>No Data Found</p>)
            }
            
        </>

    )
}

export default CardGrid;