import { DocumentReference } from '@angular/fire/firestore';

export interface HousingLocation {
    docId: string;
    refId: DocumentReference;
    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean,
}

// export const HousingLocationConverter = {
//     toFirestore: (loc: HousingLocation) => {
//         return {
//             id: loc.id,
//             name: loc.name,
//             city: loc.city,
//             state: loc.state,
//             photo: loc.photo,
//             availableUnits: loc.availableUnits,
//             wifi: loc.wifi,
//             laundry: loc.laundry
//         };
//     },
//     fromFirestore: (snapshot, options) => {
//         const data = snapshot.data(options);
//         return {
//             id: data.id,
//             name: data.name,
//             city: data.city,
//             state: data.state,
//             photo: data.photo,
//             availableUnits: data.availableUnits,
//             wifi: data.wifi,
//             laundry: data.laundry
//         };
//     }
// };
