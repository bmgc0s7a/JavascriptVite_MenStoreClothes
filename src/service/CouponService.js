import CouponAPI from "./api/CouponAPI.js"

class CouponService{

    static async get(name){
        try {
            
            return await CouponAPI.get(name)
        } catch (e) {
           throw e
        }
    }
}

export default CouponService;