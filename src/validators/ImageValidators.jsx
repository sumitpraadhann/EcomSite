export default function imageValidators(e){
    if(e.target.files.length===1){
        let pic = e.target.files[0]
        if(!["image/jpg","image/jpeg","image/png","image/gif","image/webp","image/avif",].includes(pic.type))
            return "Invalid Pic Format, Please Upload an image of type .jpg, .jpeg, .png, .gif, .webp, .avif "
        else if(pic.size> 1048576)
            return 'Pic is too Heavy, Please uplad an image Upto 1MB'
        else
            return""
    }
    else{
        return ''
    }
}