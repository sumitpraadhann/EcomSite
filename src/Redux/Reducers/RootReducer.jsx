import { combineReducers } from "@reduxjs/toolkit";
import MainCategoryReducer from "./MainCategoryReducer";
import SubCategoryReducer from "./SubCategoryReducer";
import BrandReducer from "./BrandReducer";
import ProductReducer from "./ProductReducer";
import FeatureReducer from "./FeatureReducer";
import FaqReducer from "./FaqReducer";
import SettingReducer from "./SettingReducer";

export default combineReducers({
    MaincategortyStateData:MainCategoryReducer,
    SubcategoryStateData:SubCategoryReducer,
    BrandStateData:BrandReducer,
    ProductStateData:ProductReducer,
    FeatureStateData:FeatureReducer,
    FaqStateData:FaqReducer,
    SettingStateData:SettingReducer,
})