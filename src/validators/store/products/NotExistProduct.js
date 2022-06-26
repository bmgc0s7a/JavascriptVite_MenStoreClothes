class NotExistProduct {

    static exec(data){
        if(!data)
            throw new Error('PRODUCT: Product not found!');
    }
}

export default NotExistProduct;