function CustomButtonStyle(type){
    if(type==="Primary"){
        return 'bg-red-500'
    }
    else if(type==="Secondary"){
        return 'bg-green-500 hover:bg-green-400 font-bold rounded-sm px-6 py-2'
    }
    else{
        return 'bg-blue-500 text-white font-medium rounded-r-sm px-4 py-2'
    }
}

export default CustomButtonStyle;