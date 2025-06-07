/**
 * Name : width x height
 * 8k 7680 x 4320
 * 4k 3840x 2160
 * wqhd 2560 x 1440
 * fhd 1920 x 1080
 * hd 1280x 720
 */

//This fucntion determined  whicht resolution is 
function nameResolution(width, height){
    //we use if statement, and if else to determine which resolution is
    if(width >= 7680 && height >= 4320){
        return ' 8K';
    } else if(width >= 3840 && height >= 2160){
        return '4K';
    }else if (width >= 2560  && height >= 1440){
        return 'WQHD'; 
    }else if (width >= 1920  && height >= 1080){
        return 'FHD'; 
    }else if(width >= 1280  && height >= 720){
        return 'HD'; 
    }else{
        return false;
    }

}

let nameResult = nameResolution(3840,2160);

console.log(nameResult);