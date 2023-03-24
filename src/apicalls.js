import {API} from './backend';

export const uploadData = (data) => {
    return fetch(`${API}/add/image`, {
        method : "POST",
        headers : {
            Accept : "application/json"
        },
        body : data
    }).then(response => {
        response.json()
    }).catch(err => console.log(err))
}

export const getImages = () => {
    return fetch(`${API}/images`,{
        method : "GET",
    }).then(response => response.json())
    .catch(err => console.log(err));
}

export const getImageUrl = (imageId) => {
    const url = imageId ?  `${API}/image/${imageId}` : 'https://images.pexels.com/photos/7162551/pexels-photo-7162551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' ;
    return url;
}