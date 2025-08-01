import { createContext } from 'react';
import { products } from '../assets/assets';
//product file is not yet created, so this will be an empty array for now

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency ='₹';
    const deliceryfee = 10;
    const value = {
currency, deliceryfee ,products  };
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;