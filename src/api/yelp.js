import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer cLh0mnf4VsaWgxj1RvFxIYqCdt8sN6W4KuwEdVuYc4Ppiz5wXWYRp4Jc7E0gBD4eUclCRc3OQD60DBzQeCRxs4Iu3daBmAmTKS7gCUX-bOMxCTiUrFzk1-Je1OKNXXYx'
    }
});