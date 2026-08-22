export default function TextValidators(e){
    let {name,value} = e.target
    switch(name){
        case "name":
        
        if(!value || value.length === 0 )
            return name+ "Field is mandatory"
        else if(value.length<3 || value.length>30)
            return name+ "field length must be 3-30 Characters"
        else
            return ""
          
        case"shortDescription":
        case"Answer":
         if(!value || value.length === 0 )
            return name+ "Field is mandatory"
        else if(value.length<30|| value.length>1000)
            return name+ "field length must be 30-1000 Characters"
        else
            return ""

           
        case"questions":
        if(!value || value.length === 0 )
            return name+ "Field is mandatory"
        else if(value.length<10|| value.length>1000)
            return name+ "field length must be 30-1000 Characters"
        else
            return ""


        case"icon":
         if(!value || value.length === 0 )
            return name+ "Field is mandatory"
        else if(value.length<10|| value.length>100)
            return name+ "field length must be 10-100 Characters"
        else
            return ""

        default:
        return ""
    }
}