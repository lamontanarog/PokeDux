export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

//Additional examples of possible middlewares
// export const featuring = (store) => (next) => (actionInfo) => {
//     const featured = [{ name: "Giuliana"}, ...actionInfo.action.payload];
//     const updatedAction =
//         { ...actionInfo, action: { ...actionInfo.action, payload: featured } };
//     next(updatedAction);
// };

// export const reversed = (store) => (next) => (action) => {
//     const reversedPkm = action.action.payload.map((item) => {
//         const split = item.name.split('');
//         const reverseArray = split.reverse();
//         const joinArray = reverseArray.join('');

//         return { ...item, name: joinArray };
//     });

//     const updated = { ...action, action: { ...action.action, payload: reversedPkm } };

//     next(updated);
// };