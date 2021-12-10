import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { registerReducer } from "../../components/auth/Register/reducer";
import { ProductsReducer } from "../../components/products/reducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    register: registerReducer,
    product: ProductsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;