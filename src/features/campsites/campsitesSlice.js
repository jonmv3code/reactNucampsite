import {CAMPSITES} from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES
}

export const selectRandomCampsite = () => {
    return Math.floor( Math.random() * CAMPSITES.length + 1 );
}