function CustomButtonStyle(type){
    if(type==="Primary"){
        return 'bg-red-500'
    }
    else if(type==="Secondary"){
        return 'bg-green-500'
    }
    else{
        return 'bg-blue-500'
    }
}

export default CustomButtonStyle;