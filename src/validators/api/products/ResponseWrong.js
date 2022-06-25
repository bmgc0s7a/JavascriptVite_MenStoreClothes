class ResponseWrong {

    static exec(request){
        if(!request.ok) 
         throw new Error('PRODUCT API: Invalid request, try again');
    }
}

export default ResponseWrong;