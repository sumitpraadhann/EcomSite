import { all } from "redux-saga/effects";
import Maincategorysaga from "./MainCategorySagas";
import Subcategorysaga from "./SubCategorySagas";
import Brandsaga from "./BrandSagas";
import Productsaga from "./ProductSagas";
import Featuresaga from "./FeatureSagas";
import Faqsaga from "./FaqSagas";
import Settingsaga from "./SettingSagas";
export default function* Rootsaga(){
        yield all([
Maincategorysaga(),
Subcategorysaga(),
Brandsaga(),
Productsaga(),
Featuresaga(),
Faqsaga(),
Settingsaga(),
])
}