const key = "AIzaSyDF2eUMAhp9AwTnvIDCbch11lG3CCFR_a0";


export const G_API_URL = `https://maps.googleapis.com/maps/api/js?key=${key}&&v=3.exp&libraries=geometry,drawing,places`;


const convertTolatLng = (latLng, title) => {
  return {
    latLng,
    title
  };
};


export const locationsList = {
    NewYork: convertTolatLng('40.767341, -73.968536', 'New York'),
    Miami: convertTolatLng('25.825837, -80.121077', 'Miami')
  
};