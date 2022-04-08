import { createSlice } from "@reduxjs/toolkit";
import config from '../../config';

const customizationSlice = createSlice({
    name: 'customization',
    initialState: {
        isOpen: [], //for active default menu
        fontFamily: config.fontFamily,
        borderRadius: config.borderRadius,
        opened: true,
        modeTheme: config.modeTheme,
    }
})

export default customizationSlice