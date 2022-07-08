class FromContactAPI{

    static async send({fullname, email, message}) {
        try {
            const request = await fetch("http://localhost:6868/contactform", {
                method: "post",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    fullname,
                    email,
                    message
                })
            });
            return [await request.json(), request.ok];  
        } catch (e) {
            throw e
        }
    }
}

export default FromContactAPI;