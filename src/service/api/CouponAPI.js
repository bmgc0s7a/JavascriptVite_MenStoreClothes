class CouponAPI{


    static async get(name){
        try {
            const request = await fetch(`http://localhost:6868/couponcode?couponcode=${name}`)
            const data= await request.json()
            return [data, request.ok]
        } catch (e) {
           throw e
        }
    }
}

export default CouponAPI;