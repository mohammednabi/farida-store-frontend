// here will be all instance from storses that will be exported

import { CartStore } from "./cartStore";
import { UserDropStore } from "./userDropStore";


// cart store instance 

export const cartProducts = new CartStore()

// userDrop store instance

export const userDropInstance = new UserDropStore()