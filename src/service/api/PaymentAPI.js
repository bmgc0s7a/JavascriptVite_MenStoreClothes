class PaymentAPI{

    static async send(paymentObj) {
        try {
            const request = await fetch("http://localhost:6868/pay", {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },

                body: JSON.stringify(paymentObj)
            });
            return [await request.json(), request.ok];  
        } catch (e) {
            throw e
        }
    }
}

export default PaymentAPI;