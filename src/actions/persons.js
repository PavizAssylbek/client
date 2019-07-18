export function personsFetchDataSuccess(persons) {
    return {
        type: "PERSONS_FETCH_DATA_SUCCESS",
        persons
    }
}

export function personsFetchData(url) {
    return (dispatch) => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(persons => dispatch(personsFetchDataSuccess(persons)))
            .catch(()=>{});
    }
}

// export function personsAddDataSuccess(persons) {
//     return {
//         type: "PERSONS_ADD_DATA_SUCCESS",
//         persons
//     }
// }

// export function personsAddData(url) {
//     return (dispatch) => {
//             var data = {
//                 name: this.state.nameValue,
//                 age: this.state.ageValue,
//                 status: this.state.statusValue
//               };
//               fetch(url, {
//                 method: 'POST', // или 'PUT'
//                 body: JSON.stringify(data), // data может быть типа `string` или {object}!
//                 headers:{
//                   'Content-Type': 'application/json'
//                 }
//               })
//               .then(res => res.json())
//               .then(persons => dispatch(personsAddDataSuccess(persons)))
//              .catch(()=>{})
//               .then(response => console.log('Успех:', JSON.stringify(response)))
//               .catch(error => console.error('Ошибка:', error));
//     }
// }